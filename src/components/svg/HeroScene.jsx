// Auto-ported from cocla-website/index.html
export default function HeroScene() {
  return (
    <svg viewBox="0 0 700 600" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f6d5d8" /><stop offset=".55" stopColor="#fae8e2" /><stop offset="1" stopColor="#fbf1ea" /></linearGradient>
        <radialGradient id="hSun"><stop offset="0" stopColor="#f3a9b3" /><stop offset=".55" stopColor="#f6c4c8" stopOpacity=".8" /><stop offset="1" stopColor="#f6c4c8" stopOpacity="0" /></radialGradient>
        <linearGradient id="hFuji" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7f8ba1" /><stop offset=".55" stopColor="#a6aec0" /><stop offset="1" stopColor="#dcd6d8" /></linearGradient>
        <linearGradient id="hMist" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".9" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
        <radialGradient id="hBloom" cx="40%" cy="35%" r="70%"><stop offset="0" stopColor="#fde8ee" /><stop offset=".6" stopColor="#f6c0ce" /><stop offset="1" stopColor="#e99db2" /></radialGradient>
        <linearGradient id="hHill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b5b8a6" /><stop offset="1" stopColor="#8f977f" /></linearGradient>
        <filter id="hSoft"><feGaussianBlur stdDeviation="1.6" /></filter>
        <filter id="hSoft6"><feGaussianBlur stdDeviation="7" /></filter>
      </defs>
      <rect width="700" height="600" fill="url(#hSky)" />
      <circle cx="470" cy="160" r="150" fill="url(#hSun)" />
      <circle cx="470" cy="160" r="64" fill="#f2a3ae" opacity=".85" />
      <path d="M0 360Q120 320 230 352T470 340T700 330V600H0Z" fill="#e6d4d5" opacity=".8" filter="url(#hSoft)" />
      
      <path d="M40 440C160 388 246 300 298 206L318 199L331 208L346 197L362 206L381 200C434 300 524 392 660 440Z" fill="url(#hFuji)" />
      <path d="M346 197L362 206L381 200C434 300 524 392 660 440L486 440C440 360 392 282 346 197Z" fill="#6f7a90" opacity=".28" />
      <path d="M298 206L318 199L331 208L346 197L362 206L381 200C394 222 406 243 420 264L402 256L388 273L371 254L355 278L339 257L323 276L308 257L290 272L275 262C284 245 291 226 298 206Z" fill="#fdfdff" />
      <path d="M346 197L362 206L381 200C394 222 406 243 420 264L402 256L388 273L371 254L362 266C358 240 352 218 346 197Z" fill="#e4e6ee" />
      <rect x="0" y="350" width="700" height="90" fill="url(#hMist)" />
      
      <path d="M0 470Q90 420 190 440Q280 456 360 432Q460 402 560 430Q640 452 700 440V600H0Z" fill="url(#hHill)" opacity=".75" />
      
      <g transform="translate(0 6)">
        <rect x="489" y="456" width="102" height="8" fill="#6d5a55" />
        <rect x="508" y="432" width="64" height="24" fill="#c2453a" />
        <path d="M478 436Q540 422 602 436L596 428Q540 413 484 428Z" fill="#3d2e2e" />
        <rect x="514" y="410" width="52" height="20" fill="#c94b3f" />
        <path d="M486 414Q540 401 594 414L588 406Q540 392 492 406Z" fill="#3d2e2e" />
        <rect x="519" y="389" width="42" height="18" fill="#c94b3f" />
        <path d="M494 392Q540 380 586 392L581 385Q540 372 499 385Z" fill="#3d2e2e" />
        <rect x="524" y="369" width="32" height="17" fill="#c94b3f" />
        <path d="M502 371Q540 360 578 371L574 364Q540 353 506 364Z" fill="#3d2e2e" />
        <rect x="529" y="351" width="22" height="15" fill="#c94b3f" />
        <path d="M509 352Q540 342 571 352L567 346Q540 336 513 346Z" fill="#3d2e2e" />
        <rect x="538.5" y="312" width="3" height="36" fill="#3d2e2e" />
        <g fill="#3d2e2e"><rect x="535" y="318" width="10" height="2" /><rect x="535" y="324" width="10" height="2" /><rect x="535" y="330" width="10" height="2" /></g>
        <g fill="#f3d7a7" opacity=".7"><rect x="534" y="440" width="12" height="10" /><rect x="536" y="416" width="8" height="8" /></g>
      </g>
      <path d="M0 500Q120 470 230 492Q330 512 430 486Q560 456 700 488V600H0Z" fill="#8c9580" opacity=".85" />
      
      <g filter="url(#hSoft)">
        <circle cx="60" cy="520" r="96" fill="url(#hBloom)" />
        <circle cx="160" cy="560" r="80" fill="url(#hBloom)" />
        <circle cx="10" cy="430" r="70" fill="url(#hBloom)" />
        <circle cx="660" cy="540" r="100" fill="url(#hBloom)" />
        <circle cx="580" cy="590" r="80" fill="url(#hBloom)" />
        <circle cx="300" cy="600" r="70" fill="url(#hBloom)" />
      </g>
      <g fill="#fff" opacity=".55">
        <circle cx="40" cy="480" r="16" /><circle cx="96" cy="500" r="12" /><circle cx="150" cy="530" r="14" /><circle cx="640" cy="500" r="18" /><circle cx="690" cy="520" r="12" /><circle cx="600" cy="560" r="10" />
      </g>
      <use href="#sk" x="70" y="500" width="54" height="54" transform="rotate(10 97 527)" />
      <use href="#sk" x="150" y="540" width="40" height="40" />
      <use href="#sk" x="615" y="505" width="58" height="58" transform="rotate(-14 644 534)" />
      <use href="#sk" x="20" y="440" width="34" height="34" />
      
      <use href="#br" x="0" y="0" width="420" height="280" transform="translate(300 -40) scale(-1 1)" />
      
      <g fill="#f4b7c6">
        <ellipse cx="250" cy="150" rx="5" ry="3.4" transform="rotate(30 250 150)" />
        <ellipse cx="380" cy="300" rx="4" ry="2.8" transform="rotate(-20 380 300)" />
        <ellipse cx="610" cy="250" rx="5" ry="3.2" transform="rotate(60 610 250)" />
        <ellipse cx="200" cy="330" rx="4" ry="2.6" />
      </g>
    </svg>
  )
}
