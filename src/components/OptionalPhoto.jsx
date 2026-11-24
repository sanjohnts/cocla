import { useState } from 'react'

/**
 * A photo laid over a drawing. It fades in once loaded (class "ok") and removes
 * itself if the file is missing, so the drawing underneath shows instead.
 * Pass srcMobile to use a different file on phones (max-width 640px).
 */
export default function OptionalPhoto({ src, srcMobile, style, loading = 'lazy' }) {
  const [state, setState] = useState('loading')
  if (state === 'error') return null

  const img = (
    <img
      className={'photo' + (state === 'ok' ? ' ok' : '')}
      src={src}
      alt=""
      loading={loading}
      decoding="async"
      style={style}
      onLoad={() => setState('ok')}
      onError={() => setState('error')}
    />
  )

  if (!srcMobile) return img
  return (
    <picture>
      <source media="(max-width: 640px)" srcSet={srcMobile} />
      {img}
    </picture>
  )
}
