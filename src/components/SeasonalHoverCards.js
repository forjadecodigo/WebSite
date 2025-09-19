import React from 'react'

const cx = (...classes) => classes.filter(Boolean).join(' ')

export const SeasonCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  className,
  onClick,
  url
}) => {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <div className={cx('season-card group', className)} onClick={handleClick}>
      <img src={imageSrc} alt={imageAlt || title} className="season-card-bg" />
      <div className="season-card-overlay" />
      <div className="season-card-header">
        <h2>{title}</h2>
        {subtitle ? <p className="sub">{subtitle}</p> : null}
      </div>
      <div className="season-card-desc">
        <p>{description}</p>
      </div>
      <style>{`
        .season-card { position:relative; display:flex; flex-direction:column; justify-content:flex-end; padding:24px; width:100%; height:350px; background:#000; border-radius:12px; overflow:hidden; box-shadow:0 10px 24px rgba(0,0,0,0.35); transition: all .5s ease; cursor:pointer; }
        /* Border-only neon (no fill) + strong outer halo */
        .season-card::before { content:""; position:absolute; inset:0; border-radius:12px; border:2px solid rgba(56,189,248,0.95); box-shadow: 0 0 14px rgba(56,189,248,0.85), 0 0 34px rgba(56,189,248,0.55), 0 0 58px rgba(56,189,248,0.35), inset 0 0 10px rgba(56,189,248,0.35); opacity:0; transition: opacity .2s ease; pointer-events:none; z-index:3; }
        .season-card::after { content:""; position:absolute; inset:-2px; border-radius:14px; pointer-events:none; box-shadow: 0 0 0 0 rgba(56,189,248,0); filter: blur(8px); transition: box-shadow .25s ease, filter .25s ease; z-index:2; }
        .season-card:hover::before, .season-card:active::before { opacity:1; }
        .season-card:hover::after, .season-card:active::after { box-shadow: 0 0 24px 6px rgba(56,189,248,0.6), 0 0 64px 12px rgba(56,189,248,0.45); filter: blur(10px); }
        @media(min-width:1024px){ .season-card { height:450px; } }
        .season-card-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:0; }
        .season-card-overlay { position:absolute; inset:0; background:rgba(0,0,0,0.6); transition: background .35s ease, opacity .45s ease; opacity: 0.95; z-index:1; }
        .season-card.group:hover .season-card-overlay { background:rgba(0,0,0,0.65); opacity: 1; }
        .season-card-header { position:relative; z-index:3; margin-bottom:auto; color:#fff; }
        @media(min-width:768px){ .season-card-header { position:absolute; top:24px; left:24px; right:24px; } }
        .season-card-header h2 { margin:0 0 6px; font-size:20px; font-weight:800; }
        .season-card-header .sub { margin:0; font-size:14px; color:#d1d5db; }
        .season-card-desc { position:relative; z-index:3; margin-top:16px; transform: translateY(24px); opacity:0; transition: all .5s ease; }
        .season-card.group:hover .season-card-desc { opacity:1; transform: translateY(0); }
        .season-card-desc p { margin:0; color:#fff; font-size:18px; }
      `}</style>
    </div>
  )
}

export const SeasonalHoverCards = ({ cards, className, onCardClick }) => {
  const rows = []
  for (let i = 0; i < (cards?.length || 0); i += 3) {
    rows.push(cards.slice(i, i + 3))
  }

  const handleCardClick = (card) => {
    if (onCardClick) {
      onCardClick(card);
    }
  };

  return (
    <div className={cx('season-cards-wrapper', className)}>
      {/* Mobile infinite carousel */}
      <div className="season-mobile">
        <div className="season-track">
          {[...(cards || []), ...(cards || []), ...(cards || [])].map((card, idx) => (
            <div key={`m-${idx}`} className="season-mobile-item">
              <SeasonCard {...card} url={card.url} onClick={() => handleCardClick(card)} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop rows with per-row hover expansion */}
      {rows.map((row, rIdx) => (
        <div key={rIdx} className="season-row">
          {row.map((card, idx) => (
            <SeasonCard key={`${rIdx}-${idx}`} {...card} url={card.url} onClick={() => handleCardClick(card)} />
          ))}
        </div>
      ))}

      <style>{`
        .season-cards-wrapper { position: relative; width: 100%; padding: 0 16px; display: grid; gap: 24px; }
        /* Mobile carousel */
        .season-mobile { display:block; overflow:hidden; }
        .season-track { display:flex; gap:16px; align-items:stretch; width: max-content; will-change: transform; animation: season-scroll 35s linear infinite; }
        .season-mobile:hover .season-track { animation-play-state: paused; }
        .season-mobile-item { flex:0 0 auto; width: 260px; }
        /* We duplicated 3x, so move by one third for a perfect loop */
        @keyframes season-scroll { from { transform: translateX(0); } to { transform: translateX(-33.3333%); } }
        /* Hide desktop rows on mobile, show on desktop */
        .season-row { display:none; }
        @media(min-width:768px){
          .season-mobile { display:none; }
          .season-row { display:flex; gap:24px; }
        }
        /* Ensure rows remain hidden on mobile */
        @media(min-width:768px){
          .season-row .season-card { flex: 1 1 0; transform: scale(1); transition: flex-grow .45s ease, transform .45s ease, filter .45s ease; will-change: transform, filter; }
          .season-row:hover .season-card { transform: scale(0.9); filter: saturate(0.9) brightness(0.95); }
          .season-row .season-card.group:hover { flex-grow: 2.1; transform: scale(1.04); filter: none; z-index: 2; }
        }
      `}</style>
    </div>
  )
}

export default SeasonalHoverCards


