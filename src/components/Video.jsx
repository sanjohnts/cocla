import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { prefersReducedMotion } from '../lib/helpers'
import { IconArrowRight, IconPlay } from './svg/icons'

const PLAYER_ID = 'cocla-video-player'
const PLAYING = 1 // YT.PlayerState values
const PAUSED = 2
const BUFFERING = 3

/** Loads YouTube's player script once. Rejects if it is blocked (e.g. by an ad blocker). */
let apiPromise
function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady
      window.onYouTubeIframeAPIReady = () => {
        previous?.()
        resolve(window.YT)
      }
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.onerror = () => {
        apiPromise = null
        reject(new Error('YouTube player script failed to load'))
      }
      document.head.appendChild(script)
    })
  }
  return apiPromise
}

const IconSound = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 9.5h3.5L12 5v14l-4.5-4.5H4z" fill="currentColor" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

/**
 * Course introduction video. It only plays while it is on screen:
 * - Scrolled into view (half visible): starts or resumes playing by itself.
 * - Scrolled out of view: pauses, so there is no sound away from the video.
 * - Sound: browsers only allow it after the visitor has clicked, tapped or pressed a key on the
 *   page. If they have, it plays with sound; if not, it plays muted until their first
 *   click/tap/key press while the video is on screen, or until they press "Tap for sound".
 * - Clicking the thumbnail starts it with sound. Visitors who ask for reduced motion get
 *   click-to-play only.
 */
export default function Video() {
  const v = site.video
  const [mode, setMode] = useState(null) // null = thumbnail, 'auto' = started by scrolling, 'click' = started by a click
  const [muted, setMuted] = useState(null) // null until the player is ready
  const [apiFailed, setApiFailed] = useState(false)
  const frame = useRef(null)
  const host = useRef(null)
  const player = useRef(null)
  const inView = useRef(false)
  const autoUnmute = useRef(true) // switched off once the visitor has had sound, so a deliberate mute sticks
  const pausedByScroll = useRef(false) // only resume videos we paused, not ones the visitor paused

  // Turn the sound on. If the browser refuses, it pauses the video; then keep playing muted.
  const unmute = useCallback(() => {
    const p = player.current
    if (!p?.unMute) return
    p.unMute()
    p.setVolume(100)
    setTimeout(() => {
      if (player.current !== p) return
      if (p.getPlayerState() === PAUSED && inView.current && !pausedByScroll.current) {
        p.mute()
        p.playVideo()
      }
      setMuted(p.isMuted())
    }, 600)
  }, [])

  // Sound on when allowed: the visitor has clicked, tapped or pressed a key on this page before.
  const unmuteIfAllowed = useCallback(() => {
    const p = player.current
    if (p?.isMuted?.() && autoUnmute.current && navigator.userActivation?.hasBeenActive) unmute()
  }, [unmute])

  // Play only while the video is on screen: start/resume when it scrolls in, pause when it scrolls out.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting
        const p = player.current
        if (entry.isIntersecting) {
          if (!prefersReducedMotion()) setMode((m) => m ?? 'auto')
          if (p?.playVideo && pausedByScroll.current) {
            pausedByScroll.current = false
            p.playVideo()
            unmuteIfAllowed()
          }
        } else if (p?.getPlayerState) {
          const s = p.getPlayerState()
          if (s === PLAYING || s === BUFFERING) {
            pausedByScroll.current = true
            p.pauseVideo()
          }
        }
      },
      { threshold: 0.5 },
    )
    io.observe(frame.current)
    return () => io.disconnect()
  }, [unmuteIfAllowed])

  // Keep the "Tap for sound" button in step with the player (sound can also be changed in YouTube's own controls).
  useEffect(() => {
    if (!mode || apiFailed) return
    const timer = setInterval(() => {
      const p = player.current
      if (!p?.isMuted) return
      const isMuted = p.isMuted()
      if (!isMuted) autoUnmute.current = false
      setMuted(isMuted)
    }, 1000)
    return () => clearInterval(timer)
  }, [mode, apiFailed])

  // Create the YouTube player once the video should play.
  useEffect(() => {
    if (!mode) return
    let cancelled = false
    loadYouTubeApi()
      .then((YT) => {
        if (cancelled) return
        const target = document.createElement('div')
        target.id = PLAYER_ID
        host.current.appendChild(target)
        player.current = new YT.Player(target, {
          videoId: v.youtubeId,
          width: '100%',
          height: '100%',
          // Started by a click: sound is allowed. Started by scrolling: begin muted so it always plays.
          playerVars: { autoplay: 1, mute: mode === 'auto' ? 1 : 0, rel: 0, playsinline: 1 },
          events: {
            onReady: (e) => {
              e.target.getIframe().title = v.playerTitle
              setMuted(e.target.isMuted())
              if (inView.current) {
                e.target.playVideo()
                unmuteIfAllowed()
              } else {
                pausedByScroll.current = true
              }
            },
            // Never play while scrolled away (e.g. the visitor scrolled past before it loaded).
            onStateChange: (e) => {
              if (e.data === PLAYING && !inView.current) {
                pausedByScroll.current = true
                e.target.pauseVideo()
              }
            },
          },
        })
      })
      .catch(() => {
        if (!cancelled) setApiFailed(true)
      })
    return () => {
      cancelled = true
      player.current?.destroy()
      player.current = null
    }
  }, [mode, v.youtubeId, v.playerTitle, unmuteIfAllowed])

  // While muted: the visitor's first click, tap or key press anywhere turns the sound on,
  // as long as the video is on screen. ("click" rather than "pointerdown": on phones the
  // browser only allows sound once the finger is lifted.)
  useEffect(() => {
    if (!muted) return
    const onInteract = () => {
      if (inView.current && autoUnmute.current) unmute()
    }
    window.addEventListener('click', onInteract, true)
    window.addEventListener('keydown', onInteract, true)
    return () => {
      window.removeEventListener('click', onInteract, true)
      window.removeEventListener('keydown', onInteract, true)
    }
  }, [muted, unmute])

  // Plain embed, used only if YouTube's player script can't load.
  const fallbackSrc =
    `https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0&playsinline=1` + (mode === 'auto' ? '&mute=1' : '')

  return (
    <section className="sec video" id="video" aria-labelledby="videoT">
      <div className="wrap">
        <div className="center reveal">
          <p className="label">{v.label}</p>
          <h2 id="videoT">{v.title}</h2>
          <p className="lead">{v.intro}</p>
        </div>

        <figure className="video-card reveal">
          <div className="video-frame" ref={frame}>
            {!mode ? (
              <button type="button" className="video-poster" onClick={() => setMode('click')}>
                <img
                  src={`https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="video-play" aria-hidden="true">
                  <IconPlay />
                </span>
                <span className="video-cta">{v.playLabel}</span>
              </button>
            ) : apiFailed ? (
              <iframe
                src={fallbackSrc}
                title={v.playerTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="video-host" ref={host} />
            )}
            {mode && muted && (
              <button type="button" className="video-sound" onClick={unmute}>
                <IconSound />
                {v.soundLabel}
              </button>
            )}
          </div>
          <figcaption>
            <span className="ml" lang="ml">
              {v.caption}
            </span>
            <a href={site.brand.socials.youtube} target="_blank" rel="noopener">
              {v.moreLabel} <IconArrowRight />
            </a>
          </figcaption>
          <svg className="fl" viewBox="-13 -13 26 26" aria-hidden="true">
            <use href="#sk" />
          </svg>
        </figure>
      </div>
    </section>
  )
}
