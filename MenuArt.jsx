const drawings = {
  bowls: (
    <>
      <path d="M19 48c1 18 10 29 28 29s28-11 30-29" fill="var(--art-fill)" />
      <ellipse cx="48" cy="47" rx="29" ry="8" />
      <path d="M26 45c0-7 5-12 11-12 6 0 10 5 10 11M52 42c4-8 12-11 17-5M39 34c-1-8 2-13 8-14 5 5 5 10 0 15" />
      <circle cx="56" cy="45" r="3" />
      <circle cx="65" cy="45" r="3" />
      <path d="m29 52 4 1m7-2 3 2m12-3 3 2M30 82h35" />
    </>
  ),
  coffee: (
    <>
      <path
        d="M23 42h41v16c0 12-8 18-20 18S23 70 23 58Z"
        fill="var(--art-fill)"
      />
      <path d="M64 46h6c13 0 13 18 0 18h-7M17 81h56M35 17c-8 7 8 9 0 16M48 13c-8 7 8 9 0 16" />
      <ellipse cx="43" cy="42" rx="20" ry="4" />
    </>
  ),
  signature: (
    <>
      <path d="m26 37 6 43h31l6-43" fill="var(--art-fill)" />
      <ellipse cx="47" cy="37" rx="21" ry="6" />
      <path d="M31 31c2-7 10-12 16-8 9-10 17-1 16 8M55 31l4-17M34 54c9-5 17 5 30-1M40 80h16" />
      <path d="m38 45 8 2-2 9-8-2Zm15 4 8 2-2 8-8-2Z" />
    </>
  ),
  matcha: (
    <>
      <path d="m27 34 5 46h32l5-46" fill="var(--art-fill)" />
      <ellipse cx="48" cy="34" rx="21" ry="6" />
      <path d="M31 55c11 5 23-4 35 1M48 62c-9-8-12-15-7-22 9 1 13 9 7 22Zm0 0 1-13M57 28l5-15" />
      <path d="M35 74h26" />
    </>
  ),
  smoothies: (
    <>
      <path d="m28 35 6 44h29l6-44" fill="var(--art-fill)" />
      <ellipse cx="48" cy="35" rx="21" ry="6" />
      <path d="m50 31 8-19h9M35 51h26M38 70h20" />
      <path
        d="M67 66c-7-2-12 2-11 9 2 8 13 8 17 1 3-5 0-9-6-10Zm0 0c-4-7-1-12 5-14 4 6 2 11-5 14Z"
        fill="var(--art-fill)"
      />
    </>
  ),
  softdrinks: (
    <>
      <path d="M39 15h18v17l9 13v35H30V45l9-13Z" fill="var(--art-fill)" />
      <path d="M39 24h18M31 53h34M31 69h34M43 58h10M40 80h16" />
      <path d="M43 15V9h10v6" />
    </>
  ),
  croffel: (
    <>
      <path
        d="M26 30c11-12 33-13 43 0 11 13 10 35-3 46-11 9-33 9-44-4-10-11-8-29 4-42Z"
        fill="var(--art-fill)"
      />
      <path d="m30 29 38 38M22 40l35 36M40 25l33 33M25 66l35-35M34 76l36-35M20 55l29-29" />
      <path
        d="M24 42c14 3 14 12 30 13M32 29c15 3 15 12 30 13"
        stroke="var(--art-drizzle)"
        strokeWidth="3"
      />
    </>
  ),
  pancakes: (
    <>
      <ellipse cx="48" cy="70" rx="29" ry="10" fill="var(--art-fill)" />
      <path d="M19 60v10M77 60v10" />
      <ellipse cx="48" cy="59" rx="29" ry="10" fill="var(--art-fill)" />
      <path d="M19 49v10M77 49v10" />
      <ellipse cx="48" cy="48" rx="29" ry="10" fill="var(--art-fill)" />
      <path d="M37 42v-5h20v5M43 23c-7-2-11 5-7 10 5 5 11 0 10-5-1-3-2-4-3-5Zm3 2 5-6" />
    </>
  ),
  food: (
    <>
      <path
        d="M27 31c0-9 11-14 21-14s21 5 21 14l-3 5v41H30V36Z"
        fill="var(--art-fill)"
      />
      <path d="M37 44c-2-8 9-17 16-14 9 4 7 14 0 22s-18 1-16-8Z" />
      <path d="m42 43 4 8 8-15M37 62l4 3m8-4 4 2m-13 8 3 1m13-4 3 2" />
      <path d="M24 82h48" />
    </>
  ),
  kuchen: (
    <>
      <path d="m24 48 43-21 9 40-39 15-13-8Z" fill="var(--art-fill)" />
      <path d="m24 48 13 15 39-15M37 63v19M26 65l10 11 38-15M35 40l12 13 28-11" />
      <path d="M55 31c-8-1-10-8-5-12 5-4 11 0 11 5 0 4-2 6-6 7Zm2-11 4-7" />
    </>
  ),
};

export default function MenuArt({ category }) {
  return (
    <svg
      className="menu-art"
      viewBox="0 0 96 96"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="menu-art__halo"
        d="M80 20c13 16 13 42-3 57-16 15-42 14-57 0C4 62 4 38 17 21 32 3 64 2 80 20Z"
        fill="var(--art-halo)"
      />
      <g
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {drawings[category]}
      </g>
      <path
        d="M80 10v8m-4-4h8M11 78v6m-3-3h6"
        stroke="var(--bronze)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
