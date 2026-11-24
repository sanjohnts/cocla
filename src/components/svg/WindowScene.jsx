// Auto-ported from cocla-website/index.html
export default function WindowScene() {
  return (
    <svg viewBox="0 0 600 640" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bWall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#efe2d6" /><stop offset="1" stopColor="#e6d3c3" /></linearGradient>
        <linearGradient id="bOut" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbe9ea" /><stop offset="1" stopColor="#f7e3dc" /></linearGradient>
        <linearGradient id="bFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9bfa3" /><stop offset="1" stopColor="#c7a585" /></linearGradient>
        <clipPath id="bWin"><path d="M190 520V250A140 140 0 0 1 470 250V520Z" /></clipPath>
        <filter id="bSoft"><feGaussianBlur stdDeviation="2" /></filter>
      </defs>
      <rect width="600" height="640" fill="url(#bWall)" />
      <g clipPath="url(#bWin)">
        <rect x="180" y="100" width="300" height="430" fill="url(#bOut)" />
        <path d="M180 430Q300 400 480 440V530H180Z" fill="#d9ddcc" />
        <path d="M300 520C305 470 296 420 316 380M316 380C330 352 350 340 372 330M316 380C300 356 280 346 256 340" fill="none" stroke="#6b4a40" strokeWidth="7" strokeLinecap="round" />
        <g filter="url(#bSoft)" fill="url(#hBloom)">
          <circle cx="250" cy="300" r="70" /><circle cx="340" cy="270" r="80" /><circle cx="420" cy="320" r="70" /><circle cx="300" cy="360" r="60" /><circle cx="210" cy="220" r="50" /><circle cx="430" cy="220" r="55" />
        </g>
        <g fill="#fff" opacity=".5"><circle cx="320" cy="240" r="16" /><circle cx="250" cy="280" r="12" /><circle cx="410" cy="300" r="14" /></g>
      </g>
      <path d="M190 520V250A140 140 0 0 1 470 250V520" fill="none" stroke="#b98f67" strokeWidth="12" />
      <g stroke="#c49d76" strokeWidth="3" opacity=".9"><path d="M283 120V520M377 120V520M190 330H470M190 430H470" /></g>
      <rect x="170" y="516" width="320" height="14" rx="3" fill="#b98f67" />
      <rect y="560" width="600" height="80" fill="url(#bFloor)" />
      <path d="M210 560L420 560L520 640L120 640Z" fill="#fff" opacity=".22" />
      
      <ellipse cx="470" cy="572" rx="62" ry="10" fill="#8a6447" />
      <rect x="462" y="572" width="16" height="40" fill="#7a573d" />
      <ellipse cx="470" cy="614" rx="34" ry="5" fill="#7a573d" opacity=".5" />
      <path d="M458 570C452 548 458 532 466 524H474C482 532 488 548 482 570Z" fill="#f3ece4" stroke="#d8c9bb" />
      <path d="M470 526C468 500 460 480 444 466M470 526C474 498 486 478 502 470" fill="none" stroke="#6b4a40" strokeWidth="2.5" strokeLinecap="round" />
      <use href="#sk" x="430" y="452" width="26" height="26" />
      <use href="#sk" x="492" y="458" width="24" height="24" />
      <use href="#sk" x="458" y="478" width="18" height="18" />
      <use href="#br" x="0" y="0" width="420" height="280" transform="translate(300 -10) scale(-.8 .8)" />
    </svg>
  )
}
