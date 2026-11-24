// Auto-ported from cocla-website/index.html
export default function SvgSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="gPetal" cx="50%" cy="100%" r="105%">
      <stop offset="0" stopColor="#ec8aa6" />
      <stop offset=".38" stopColor="#f6c2d0" />
      <stop offset="1" stopColor="#fff2f5" />
    </radialGradient>
    <symbol id="sk" viewBox="-13 -13 26 26">
      <g fill="url(#gPetal)" stroke="#f0a6b9" strokeWidth=".25">
        <path id="skp" d="M0 0C-4.2-2.6-6.4-7.6-3.6-10.8C-2.2-12.2-.8-11.6 0-10.4C.8-11.6 2.2-12.2 3.6-10.8C6.4-7.6 4.2-2.6 0 0Z" />
        <use href="#skp" transform="rotate(72)" />
        <use href="#skp" transform="rotate(144)" />
        <use href="#skp" transform="rotate(216)" />
        <use href="#skp" transform="rotate(288)" />
      </g>
      <g stroke="#d6668a" strokeWidth=".45" strokeLinecap="round" fill="none">
        <path d="M0 0V-4.6M0 0L3.8-2.8M0 0L2.6 3.6M0 0L-2.6 3.6M0 0L-3.8-2.8M0 0L1.6-4.2M0 0L-1.6-4.2" />
      </g>
      <circle r="1.5" fill="#e7809f" />
      <g fill="#c24a70"><circle cx="0" cy="-4.9" r=".6" /><circle cx="3.9" cy="-2.9" r=".6" /><circle cx="2.7" cy="3.7" r=".6" /><circle cx="-2.7" cy="3.7" r=".6" /><circle cx="-3.9" cy="-2.9" r=".6" /></g>
    </symbol>
    <symbol id="bud" viewBox="-5 -8 10 14">
      <path d="M0-7C3-5 3.4-1 0 2C-3.4-1-3-5 0-7Z" fill="#ea8ba6" />
      <path d="M-2.2 1.2Q0 3 2.2 1.2L0 4Z" fill="#8f9c62" />
    </symbol>
    <symbol id="br" viewBox="0 0 420 280">
      <g fill="none" stroke="#5a3a33" strokeLinecap="round">
        <path d="M430 14C370 28 320 50 270 74" strokeWidth="9" />
        <path d="M272 73C220 96 170 112 120 132" strokeWidth="6" />
        <path d="M121 132C90 145 64 160 38 180" strokeWidth="3.5" />
        <path d="M330 44C322 70 318 96 300 128" strokeWidth="3.5" />
        <path d="M240 87C230 64 226 50 214 30" strokeWidth="3" />
        <path d="M172 110C166 132 164 150 150 176" strokeWidth="2.5" />
        <path d="M384 26C388 52 394 70 404 92" strokeWidth="3" />
        <path d="M120 132C106 118 96 108 80 100" strokeWidth="2" />
      </g>
      <g stroke="#7a5249" strokeWidth="1" opacity=".5" fill="none"><path d="M410 19C372 30 330 46 290 64" /><path d="M262 80C220 98 180 110 140 124" /></g>
      <use href="#sk" x="242" y="42" width="40" height="40" transform="rotate(12 262 62)" />
      <use href="#sk" x="283" y="107" width="34" height="34" transform="rotate(-20 300 124)" />
      <use href="#sk" x="199" y="13" width="30" height="30" />
      <use href="#sk" x="136" y="160" width="28" height="28" transform="rotate(30 150 174)" />
      <use href="#sk" x="100" y="102" width="36" height="36" transform="rotate(-8 118 120)" />
      <use href="#sk" x="32" y="160" width="24" height="24" />
      <use href="#sk" x="319" y="19" width="30" height="30" transform="rotate(25 334 34)" />
      <use href="#sk" x="388" y="78" width="28" height="28" />
      <use href="#sk" x="178" y="92" width="24" height="24" transform="rotate(40 190 104)" />
      <use href="#sk" x="69" y="87" width="22" height="22" />
      <use href="#sk" x="340" y="60" width="20" height="20" />
      <use href="#sk" x="221" y="111" width="18" height="18" />
      <use href="#bud" x="20" y="176" width="10" height="14" transform="rotate(-40 25 183)" />
      <use href="#bud" x="204" y="2" width="9" height="13" />
      <use href="#bud" x="311" y="134" width="10" height="14" transform="rotate(30 316 141)" />
      <use href="#bud" x="158" y="186" width="9" height="13" transform="rotate(20 162 192)" />
      <use href="#bud" x="90" y="82" width="8" height="12" transform="rotate(-30 94 88)" />
    </symbol>
    <symbol id="laurel" viewBox="0 0 22 34">
      <g fill="currentColor"><path d="M14 33C6 28 3 18 6 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="4" cy="8" rx="2" ry="4" transform="rotate(-20 4 8)" /><ellipse cx="3.5" cy="15" rx="2" ry="4" transform="rotate(-35 3.5 15)" /><ellipse cx="5" cy="22" rx="2" ry="4" transform="rotate(-50 5 22)" /><ellipse cx="9" cy="28" rx="2" ry="4" transform="rotate(-65 9 28)" />
        <ellipse cx="9" cy="10" rx="1.8" ry="3.6" transform="rotate(25 9 10)" /><ellipse cx="9.5" cy="17" rx="1.8" ry="3.6" transform="rotate(15 9.5 17)" /><ellipse cx="11.5" cy="23.5" rx="1.8" ry="3.6" transform="rotate(0 11.5 23.5)" /></g>
    </symbol>
  </defs>
</svg>
  )
}
