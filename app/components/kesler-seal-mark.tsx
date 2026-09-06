type KeslerSealMarkProps = {
  className?: string;
  label?: string;
};

export function KeslerSealMark({ className, label }: KeslerSealMarkProps) {
  return (
    <svg className={className} viewBox="0 0 400 400" role={label ? "img" : "presentation"} aria-label={label}>
      <g className="seal-rings" fill="none" stroke="currentColor">
        <path d="M200 20C299 20 380 101 380 200S299 380 200 380 20 299 20 200 101 20 200 20Z" strokeWidth="8" />
        <path d="M200 37C289 37 363 111 363 200S289 363 200 363 37 289 37 200 111 37 200 37Z" strokeWidth="2.5" strokeDasharray="3 8" />
        <circle cx="200" cy="200" r="126" strokeWidth="3" />
      </g>

      <g className="seal-lettering" fill="currentColor">
        <path d="M83 139c27-38 65-62 109-66v12c-39 4-73 25-98 59l-11-5Zm125-66c44 3 84 27 110 64l-11 7c-23-33-59-54-99-59V73Z" opacity=".92" />
        <path d="M83 261c27 38 65 62 109 66v-12c-39-4-73-25-98-59l-11 5Zm125 66c44-3 84-27 110-64l-11-7c-23 33-59 54-99 59v12Z" opacity=".92" />
      </g>

      <g className="seal-stars" fill="currentColor">
        <path d="m62 200 8-4 4-8 4 8 8 4-8 4-4 8-4-8-8-4Z" />
        <path d="m314 200 8-4 4-8 4 8 8 4-8 4-4 8-4-8-8-4Z" />
        <circle cx="111" cy="112" r="4" />
        <circle cx="289" cy="112" r="4" />
        <circle cx="111" cy="288" r="4" />
        <circle cx="289" cy="288" r="4" />
      </g>

      <g className="seal-wordmark" fill="currentColor" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700">
        <text x="200" y="66" fontSize="18" letterSpacing="8">FAMÍLIA</text>
        <text x="200" y="350" fontSize="19" letterSpacing="10">KESLER</text>
      </g>

      <path className="seal-shield" d="M200 92 294 126v72c0 57-36 94-94 116-58-22-94-59-94-116v-72l94-34Z" fill="none" stroke="currentColor" strokeWidth="7" />
      <path className="seal-shield-detail" d="M200 108v188M122 138l78 30 78-30M122 252l78-30 78 30" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" />
      <path className="seal-monogram" d="M159 133h27v54l51-54h35l-61 62 67 75h-36l-56-66v66h-27V133Z" fill="currentColor" />
      <path className="seal-crown" d="m161 108 14-20 25 17 25-17 14 20-39 15-39-15Z" fill="currentColor" />
    </svg>
  );
}
