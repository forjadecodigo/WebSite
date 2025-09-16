import React, { useState, useEffect, useRef } from 'react'

const cn = (...classes) => classes.filter(Boolean).join(' ')

export const ScrollTimeline = ({
  events = [
    {
      year: '01',
      title: 'Cuéntanos tu idea',
      description:
        'Nos compartes qué necesitas: una app, un sitio web, una solución personalizada… ¡lo que tengas en mente!'
    },
    {
      year: '02',
      title: 'Exploramos juntos la mejor solución',
      description:
        'Analizamos tu proyecto, te asesoramos y definimos la tecnología ideal para lo que quieres lograr.'
    },
    {
      year: '03',
      title: 'Te presentamos una propuesta',
      description:
        'Diseñamos una solución a medida con tiempos, costos y alcance claros desde el inicio.'
    },
    {
      year: '04',
      title: '¡Manos al código!',
      description:
        'Nos ponemos a trabajar. Recibes tu proyecto funcionando, con soporte, ajustes y acompañamiento según lo que necesites.'
    }
  ],
  title = 'Nuestro proceso',
  subtitle = 'Así forjamos tus ideas paso a paso',
  className = ''
}) => {
  const containerRef = useRef(null)
  const progressRef = useRef(null)
  const cometRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  const cardRefs = useRef([])
  const visualRef = useRef(null)
  const visualImgRef = useRef(null)
  const tiltRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const el = containerRef.current
    const onScroll = () => {
      if (!el || !progressRef.current || !cometRef.current) return
      const rect = el.getBoundingClientRect()
      const total = rect.height
      const startOffset = window.innerHeight * 0.5
      const raw = (window.innerHeight - rect.top - startOffset) / (total + window.innerHeight - startOffset)
      const clamped = Math.max(0, Math.min(1, raw))
      const eased = Math.pow(clamped, 0.85)
      progressRef.current.style.height = `${eased * 100}%`
      cometRef.current.style.top = `${eased * 100}%`

      const newIndex = Math.floor(eased * events.length)
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < events.length) setActiveIndex(newIndex)

      cardRefs.current.forEach((card) => {
        if (!card) return
        const r = card.getBoundingClientRect()
        const trigger = window.innerHeight * 0.5 // revelar a mitad de pantalla
        if (r.top < trigger) { card.classList.add('is-visible') } else { card.classList.remove('is-visible') }
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    const onMouseMove = (e) => {
      if (!visualRef.current) return
      const rect = visualRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const tx = ((x - cx) / cx) * 10 // max 10px
      const ty = ((y - cy) / cy) * 10
      tiltRef.current = { x: tx, y: ty }
      if (visualImgRef.current) {
        visualImgRef.current.style.transform = `translate(${tx}px, ${ty}px)`
      }
    }
    const onEnter = () => {
      if (visualRef.current) visualRef.current.classList.add('encendido')
    }
    const onLeave = () => {
      if (visualRef.current) {
        visualRef.current.classList.remove('encendido')
        if (visualImgRef.current) visualImgRef.current.style.transform = ''
      }
    }
    const vr = visualRef.current
    if (vr) {
      vr.addEventListener('mousemove', onMouseMove)
      vr.addEventListener('mouseenter', onEnter)
      vr.addEventListener('mouseleave', onLeave)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (vr) {
        vr.removeEventListener('mousemove', onMouseMove)
        vr.removeEventListener('mouseenter', onEnter)
        vr.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [events.length, activeIndex])

  return (
    <div ref={containerRef} className={cn('relative w-full overflow-hidden', className)}>
      <style>{`
        .st-title { text-align:center; padding:48px 16px; }
        .st-title h2 { color:#fff; font-weight:800; font-size:clamp(28px,3.5vw,56px); margin:0 0 10px; }
        .st-title p { color:rgba(255,255,255,0.8); font-size:clamp(14px,1.5vw,18px); margin:0 auto; max-width:720px; }
        .st-wrap { position:relative; max-width:1100px; margin:0 auto; padding:0 16px 48px; transform: translateX(-200px); }
        .st-line { position:absolute; left:50%; top:0; bottom:0; width:2px; transform:translateX(-50%); background:rgba(255,255,255,0.18); }
        .st-progress { position:absolute; left:50%; top:0; width:2px; transform:translateX(-50%); background:linear-gradient(to bottom,#22d3ee,#6366f1,#a855f7); box-shadow:0 0 16px rgba(99,102,241,0.45); border-radius:9999px; height:0; }
        .st-comet { position:absolute; left:50%; width:18px; height:18px; transform:translate(-50%,-50%); border-radius:9999px; background:radial-gradient(circle, rgba(168,85,247,0.8) 0%, rgba(99,102,241,0.5) 40%, rgba(34,211,238,0) 70%); box-shadow:0 0 15px 4px rgba(168,85,247,0.6), 0 0 25px 8px rgba(99,102,241,0.4), 0 0 40px 15px rgba(34,211,238,0.2); }
        @keyframes st-pulse { 0%{ transform:translate(-50%,-50%) scale(1);} 50%{ transform:translate(-50%,-50%) scale(1.25);} 100%{ transform:translate(-50%,-50%) scale(1);} }
        .st-comet { animation: st-pulse 1.6s ease-in-out infinite; }
        .st-row { position:relative; display:flex; align-items:center; gap:24px; margin-bottom:36px; padding:8px 0; flex-direction:column; }
        @media(min-width:1024px){ .st-row { flex-direction:row; justify-content:flex-start; } .st-row.rev { flex-direction:row-reverse; }}
        .st-node { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:20px; height:20px; border-radius:9999px; background:#000; border:4px solid rgba(255,255,255,0.35); z-index:1; }
        .st-node.active { border-color:#fff; box-shadow:0 0 12px rgba(255,255,255,0.4); }
        .st-card { position:relative; z-index:2; width:100%; max-width:560px; background:rgba(0,0,0,0.5); border:1px solid rgba(255,255,255,0.15); border-radius:12px; backdrop-filter:blur(6px); padding:20px; color:#fff; }
        @media(min-width:1024px){ .st-card { width:calc(50% - 40px); margin-top:0; } }
        .st-year { color:rgba(255,255,255,0.85); font-weight:700; font-size:13px; margin:0 0 4px; display:flex; align-items:center; gap:8px; }
        .st-title-txt { font-weight:800; font-size:20px; margin:0 0 6px; }
        .st-sub { color:rgba(255,255,255,0.7); font-weight:600; margin:0 0 8px; }
        .st-desc { color:rgba(255,255,255,0.82); margin:0; }
        .st-card { opacity:0; transform: translateY(40px); transition: opacity .6s ease, transform .6s ease; }
        .st-card.is-visible { opacity:1; transform: translateY(0); }
        /* Right visual (recrea etapas-image con brillo) */
        .st-visual { position:absolute; right:-430px; top:830px; width:260px; height:760px; display:none; align-items:center; justify-content:center; pointer-events:auto; z-index:50; cursor:pointer; }
        .st-visual::before { content:""; position:absolute; inset:-40px; border-radius:9999px; background: radial-gradient(circle, rgba(255,217,0,0.35) 0%, rgba(255,217,0,0.12) 40%, transparent 70%); filter: blur(10px); animation: st-glow 2.2s ease-in-out infinite; transition: all .25s ease; }
        .st-visual.encendido::before, .st-visual:hover::before { background: radial-gradient(circle, rgba(255,217,0,0.8) 0%, rgba(255,217,0,0.35) 40%, transparent 70%); filter: blur(14px); }
        .st-visual img { width:100%; height:100%; object-fit: contain; filter: brightness(1) drop-shadow(0 0 0px rgba(255,217,0,0)); transition: transform .25s ease, filter .25s ease; }
        .st-visual.encendido img, .st-visual:hover img { filter: brightness(1.7) drop-shadow(0 0 40px rgba(255,217,0,0.8)); }
        .st-visual-text { position:absolute; right:-520px; top:120px; width:420px; color:#fff; display:none; z-index:51; }
        .st-visual-text .box { background: rgba(0,0,0,0.45); border:1px solid rgba(255,255,255,0.15); border-radius:14px; backdrop-filter: blur(6px); padding:16px 18px; }
        .st-visual-text h3 { margin:0 0 8px; font-size:20px; font-weight:800; }
        .st-visual-text p { margin:0 0 10px; line-height:1.4; color: rgba(255,255,255,0.85); }
        @keyframes st-glow { 0%{opacity:.6; transform:scale(1);} 50%{opacity:1; transform:scale(1.05);} 100%{opacity:.6; transform:scale(1);} }
        @media(min-width:1024px){ .st-visual { display:flex; } .st-visual-text { display:block; } }
        /* Mobile adjustments: center timeline, hide box, show bulb below */
        @media(max-width:1023px){
          .st-wrap { transform: none; padding: 0 16px 48px; display: flex; flex-direction: column; align-items: center; }
          .st-visual-text { display: none !important; }
          .st-visual { position: relative; display: flex; margin: 28px auto 0; right: auto; top: auto; width: 200px; height: 200px; order: 999; }
          .st-visual::before { position: absolute; inset: auto !important; bottom: -10px; left: 50%; transform: translateX(-50%); width: 240px; height: 160px; z-index: 0; }
          .st-visual img { position: relative; z-index: 1; }
        }
      `}</style>
      <div className="st-title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="st-wrap">
        <div className="st-line" />
        <div ref={progressRef} className="st-progress" />
        <div ref={cometRef} className="st-comet" />
        <div className="st-visual-text">
          <div className="box">
            <h3>Descubre el poder de nuestros productos</h3>
            <p>Porque desarrollar un software no es solo escribir líneas de código… es entenderte, acompañarte y construir algo que realmente te sirva.</p>
            <p>Nuestro proceso está pensado para que te sientas parte del proyecto desde el primer momento, con claridad en cada etapa y decisiones tomadas en conjunto.</p>
            <p>Usamos metodologías ágiles para adaptarnos contigo, y mantenemos una comunicación constante para que sientas que tu idea evoluciona, no se pierde.</p>
            <p style={{marginTop: 12}}>Con este paso a paso, no solo forjamos código: forjamos confianza.</p>
          </div>
        </div>
        <div className="st-visual" ref={visualRef}>
          <img ref={visualImgRef} src="/bombilloapp-600h.png" alt="Brillo" />
        </div>
        {events.map((e, i) => (
          <div key={i} className={cn('st-row', i % 2 === 1 ? 'rev' : '')}>
            <div className={cn('st-node', i <= activeIndex ? 'active' : '')} />
            <div className="st-card" ref={(el) => { cardRefs.current[i] = el }}>
              <p className="st-year">{e.year}</p>
              <h3 className="st-title-txt">{e.title}</h3>
              {e.subtitle ? <p className="st-sub">{e.subtitle}</p> : null}
              <p className="st-desc">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScrollTimeline


