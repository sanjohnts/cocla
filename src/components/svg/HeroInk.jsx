// Auto-ported from cocla-website/index.html
export default function HeroInk() {
  return (
    <svg className="hero-ink" viewBox="0 0 520 360" aria-hidden="true">
    <defs>
      <linearGradient id="inkM" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8f8f95" stopOpacity=".55" /><stop offset="1" stopColor="#8f8f95" stopOpacity="0" /></linearGradient>
      <linearGradient id="inkM2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b6b3b5" stopOpacity=".6" /><stop offset="1" stopColor="#b6b3b5" stopOpacity="0" /></linearGradient>
      <filter id="inkBlur"><feGaussianBlur stdDeviation="1.4" /></filter>
    </defs>
    <path d="M0 250L60 170L96 196L150 120L214 210L260 180L330 250V360H0Z" fill="url(#inkM2)" filter="url(#inkBlur)" />
    <path d="M-10 300L70 236L120 262L190 214L260 272L320 250L400 300V360H-10Z" fill="url(#inkM)" filter="url(#inkBlur)" />
    <rect x="0" y="232" width="520" height="40" fill="#faf6f1" opacity=".6" filter="url(#inkBlur)" />
  </svg>
  )
}
