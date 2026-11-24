// Auto-ported from cocla-website/index.html
export default function Enso() {
  return (
    <svg className="enso" viewBox="0 0 300 300" aria-hidden="true">
        <defs><filter id="brush"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="5" /></filter></defs>
        <path d="M232 92C258 140 244 206 188 236C128 268 58 240 40 178C22 116 70 56 136 50C170 47 196 58 214 74" fill="none" stroke="#efbcc6" strokeWidth="14" strokeLinecap="round" filter="url(#brush)" opacity=".8" />
      </svg>
  )
}
