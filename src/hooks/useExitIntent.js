import { useEffect } from 'react'

/**
 * Calls onExit when the mouse leaves through the top of the window
 * (someone heading for the tabs or address bar). Ignored during the first
 * `delayMs` after the page loads.
 */
export default function useExitIntent(onExit, delayMs = 5000) {
  useEffect(() => {
    const armedAt = Date.now() + delayMs
    const handler = (e) => {
      if (e.relatedTarget || e.clientY > 8 || Date.now() < armedAt) return
      onExit()
    }
    document.addEventListener('mouseout', handler)
    return () => document.removeEventListener('mouseout', handler)
  }, [onExit, delayMs])
}
