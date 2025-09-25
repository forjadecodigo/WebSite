import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const cn = (...classes) => classes.filter(Boolean).join(' ')

const LeftIcon = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<polyline points="15 18 9 12 15 6" />
	</svg>
)

const RightIcon = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<polyline points="9 18 15 12 9 6" />
	</svg>
)

const TeamCarousel = ({
	members,
	title = 'OUR TEAM',
	titleSize = '2xl',
	titleColor = 'rgba(0, 76, 255, 1)',
	background,
	cardWidth = 280,
	cardHeight = 380,
	cardRadius = 20,
	showArrows = true,
	showDots = true,
	keyboardNavigation = true,
	touchNavigation = true,
	animationDuration = 800,
	autoPlay = 0,
	pauseOnHover = true,
	visibleCards = 2,
	sideCardScale = 0.9,
	sideCardOpacity = 0.8,
	grayscaleEffect = true,
	className,
	cardClassName,
	titleClassName,
	infoPosition = 'bottom',
	infoTextColor = 'rgb(8, 42, 123)',
	infoBackground = 'transparent',
	onMemberChange,
	onCardClick,
	initialIndex = 0,
}) => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex)
	const [direction, setDirection] = useState(0)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	const totalMembers = members?.length || 0

	const paginate = useCallback(
		(newDirection) => {
			if (totalMembers === 0) return
			setDirection(newDirection)
			const nextIndex = (currentIndex + newDirection + totalMembers) % totalMembers
			setCurrentIndex(nextIndex)
			onMemberChange && onMemberChange(members[nextIndex], nextIndex)
		},
		[currentIndex, totalMembers, members, onMemberChange]
	)

	const wrapIndex = (index) => (index + totalMembers) % totalMembers

	const calculatePosition = (index) => {
		const activeIndex = currentIndex
		const diff = wrapIndex(index - activeIndex)
		if (diff === 0) return 'center'
		if (diff <= visibleCards) return `right-${diff}`
		if (diff >= totalMembers - visibleCards) return `left-${totalMembers - diff}`
		return 'hidden'
	}

	const getVariantStyles = (position) => {
		const transition = {
			duration: animationDuration / 1000,
			ease: [0.25, 0.46, 0.45, 0.94],
		}
		switch (position) {
			case 'center':
				return { zIndex: 10, opacity: 1, scale: 1.1, x: 0, filter: 'grayscale(0%)', pointerEvents: 'auto', transition }
			case 'right-1':
				return { zIndex: 5, opacity: sideCardOpacity, scale: sideCardScale, x: cardWidth * 0.6, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition }
			case 'right-2':
				return { zIndex: 1, opacity: sideCardOpacity * 0.6, scale: sideCardScale * 0.8, x: cardWidth * 1.2, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition }
			case 'left-1':
				return { zIndex: 5, opacity: sideCardOpacity, scale: sideCardScale, x: -cardWidth * 0.6, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition }
			case 'left-2':
				return { zIndex: 1, opacity: sideCardOpacity * 0.6, scale: sideCardScale * 0.8, x: -cardWidth * 1.2, filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', pointerEvents: 'auto', transition }
			default:
				return { zIndex: 0, opacity: 0, scale: 0.8, x: direction > 0 ? cardWidth * (visibleCards + 1) : -cardWidth * (visibleCards + 1), pointerEvents: 'none', filter: grayscaleEffect ? 'grayscale(100%)' : 'grayscale(0%)', transition }
		}
	}

	useEffect(() => {
		let interval
		if (autoPlay > 0) {
			interval = setInterval(() => paginate(1), autoPlay)
		}
		const container = document.getElementById('team-carousel-container')
		const handleMouseEnter = () => {
			if (pauseOnHover && autoPlay > 0) clearInterval(interval)
		}
		const handleMouseLeave = () => {
			if (pauseOnHover && autoPlay > 0) interval = setInterval(() => paginate(1), autoPlay)
		}
		if (container && pauseOnHover && autoPlay > 0) {
			container.addEventListener('mouseenter', handleMouseEnter)
			container.addEventListener('mouseleave', handleMouseLeave)
		}
		return () => {
			clearInterval(interval)
			if (container && pauseOnHover && autoPlay > 0) {
				container.removeEventListener('mouseenter', handleMouseEnter)
				container.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}, [autoPlay, paginate, pauseOnHover])

	useEffect(() => {
		if (!keyboardNavigation) return
		const handleKeyDown = (e) => {
			if (e.key === 'ArrowLeft') paginate(-1)
			else if (e.key === 'ArrowRight') paginate(1)
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [keyboardNavigation, paginate])

	const handleTouchStart = (e) => {
		if (!touchNavigation) return
		setTouchStart(e.targetTouches[0].clientX)
	}
	const handleTouchMove = (e) => {
		if (!touchNavigation) return
		setTouchEnd(e.targetTouches[0].clientX)
	}
	const handleTouchEnd = () => {
		if (!touchNavigation) return
		const swipeThreshold = 50
		const diff = touchStart - touchEnd
		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) paginate(1)
			else paginate(-1)
		}
	}

	const titleSizeClasses = {
		sm: 'text-4xl',
		md: 'text-5xl',
		lg: 'text-6xl',
		xl: 'text-7xl',
		'2xl': 'text-8xl',
	}

	return (
		<div
			id="team-carousel-container"
			className={cn('tc-container', className)}
			style={{ background: background }}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{title ? (
				<h2
					className={cn('tc-title', titleClassName)}
					style={{
						fontSize: titleSizeClasses[titleSize]?.replace('text-', '') || '48px',
						color: 'transparent',
						background: `linear-gradient(to bottom, ${titleColor}75 40%, transparent 76%)`,
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
					}}
				>
					{title}
				</h2>
			) : null}

			<div className="tc-stage" style={{ height: cardHeight + 100 }}>
				{showArrows ? (
					<>
						<motion.button 
							onClick={() => paginate(-1)} 
							className="tc-arrow tc-left" 
							whileTap={{ scale: 0.9 }}
							onTouchStart={(e) => { e.stopPropagation(); }}
							onTouchEnd={(e) => { e.stopPropagation(); }}
							onMouseDown={(e) => { e.stopPropagation(); }}
						>
							<LeftIcon />
						</motion.button>
						<motion.button 
							onClick={() => paginate(1)} 
							className="tc-arrow tc-right" 
							whileTap={{ scale: 0.9 }}
							onTouchStart={(e) => { e.stopPropagation(); }}
							onTouchEnd={(e) => { e.stopPropagation(); }}
							onMouseDown={(e) => { e.stopPropagation(); }}
						>
							<RightIcon />
						</motion.button>
					</>
				) : null}

				<div className="tc-track">
					<AnimatePresence initial={false} custom={direction}>
						{(members || []).map((member, index) => {
							const position = calculatePosition(index)
							const isCurrent = index === currentIndex
							if (position === 'hidden' && !isCurrent) return null
							return (
								<motion.div
									key={member.id || index}
									className={cn('tc-card', cardClassName)}
									style={{
										width: cardWidth,
										height: cardHeight,
										borderRadius: cardRadius,
									}}
									initial={getVariantStyles('hidden')}
									animate={getVariantStyles(position)}
									exit={getVariantStyles('hidden')}
									onClick={() => {
										if (!isCurrent) {
											const newDirection = index > currentIndex ? 1 : -1
											setDirection(newDirection)
											setCurrentIndex(index)
											onMemberChange && onMemberChange(members[index], index)
										}
										onCardClick && onCardClick(member, index)
									}}
								>
									<img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
									{infoPosition === 'overlay' ? (
										<div className="tc-overlay" style={{ background: infoBackground || 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: infoTextColor }}>
											<h3 className="tc-overlay-title">{member.name}</h3>
											<p className="tc-overlay-role">{member.role}</p>
										</div>
									) : null}
								</motion.div>
							)
						})}
					</AnimatePresence>
				</div>
			</div>

			{infoPosition === 'bottom' && members && members[currentIndex] ? (
				<motion.div
					key={(members[currentIndex].id || currentIndex) + '-info'}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
					className="tc-bottom-info"
				>
					{(() => {
						const name = members[currentIndex].name || ''
						const len = name.length
						const lenClass = len <= 12 ? 'tc-name-short' : len <= 15 ? 'tc-name-medium' : 'tc-name-long'
						return (
							<h2 className={`tc-name ${lenClass}`} style={{ color: infoTextColor }}>
								{name}
								<span className="tc-underline" style={{ background: infoTextColor }} />
							</h2>
						)
					})()}
					<p className="tc-role" style={{ color: infoTextColor }}>
						{members[currentIndex].role}
					</p>
					{members[currentIndex].bio ? (
						<p className="tc-bio">{members[currentIndex].bio}</p>
					) : null}
				</motion.div>
			) : null}

			{showDots ? (
				<div className="tc-dots">
					{(members || []).map((_, index) => (
						<motion.button
							key={index}
							onClick={() => {
								if (index !== currentIndex) {
									const newDirection = index > currentIndex ? 1 : -1
									setDirection(newDirection)
									setCurrentIndex(index)
									onMemberChange && onMemberChange(members[index], index)
								}
							}}
							className={cn('tc-dot', index === currentIndex ? 'active' : '')}
							whileTap={{ scale: 0.9 }}
						/>
					))}
				</div>
			) : null}

			<style>{`
				.tc-container { min-height: 60vh; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: visible; margin-top:-120px; }
				.tc-title { font-weight: 900; text-transform: uppercase; letter-spacing: -1px; position: absolute; top: 12px; left: 50%; transform: translateX(-50%); pointer-events: none; white-space: nowrap; }
				.tc-stage { width: 90%; max-width: 1800px; margin-top: 80px; position: relative; perspective: 1000px; transform: translateX(60%); }
				.tc-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 999px; background: rgba(0,0,0,0.6); color: #fff; border: 0; display: flex; align-items: center; justify-content: center; z-index: 20; cursor: pointer; }
				.tc-left { left: 20px; }
				.tc-right { right: 20px; }
				.tc-track { width: 100%; height: 100%; position: relative; display: flex; align-items: center; justify-content: center; transform-style: preserve-3d; overflow: visible; }
				.tc-card { position: absolute; overflow: hidden; background: #111; box-shadow: 0 10px 24px rgba(0,0,0,0.35); cursor: pointer; }
				.tc-overlay { position: absolute; left: 0; right: 0; bottom: 0; padding: 12px; text-align: center; }
				.tc-overlay-title { margin: 0; font-size: 18px; font-weight: 700; }
				.tc-overlay-role { margin: 4px 0 0; font-size: 14px; opacity: 0.9; }
				.tc-bottom-info { text-align: center; margin-top: 24px; transform: none; }
				.tc-name { font-size: 32px; font-weight: 800; margin: 0 0 8px; position: relative; display: inline-block; transform: none; }
				.tc-name-short { transform: translateX(140%); }
				.tc-name-medium { transform: translateX(120%); }
				.tc-name-long { transform: translateX(70%); }
				.tc-underline { position: absolute; left: 0; right: 0; height: 2px; bottom: -6px; }
				.tc-role { font-size: 18px; font-weight: 600; opacity: 0.85; text-transform: uppercase; letter-spacing: 1px; margin: 8px 0 0; transform: translateX(54%); }
				.tc-bio { font-size: 16px; margin: 12px auto 0; max-width: 900px; line-height: 1.6; color: #E6F3FF; background: rgba(0,0,0,0.35); padding: 12px 16px; border-radius: 10px; transform: translateX(54%); }
				.tc-dots { width: 100%; display: flex; justify-content: center; gap: 12px; margin: 20px auto 0; transform: translateX(54%); }
				.tc-dot { width: 10px; height: 10px; border-radius: 999px; background: rgba(8,42,123,0.4); border: 0; cursor: pointer; }
				.tc-dot.active { background: rgb(8,42,123); transform: scale(1.1); }
				@media (max-width: 1024px) and (min-width: 768px) {
					.tc-stage { max-width: 85%; transform: translateX(0%); }
					.tc-card { width: 280px !important; height: 350px !important; }
					.tc-name { transform: none; }
					.tc-name-short { transform: none; }
					.tc-name-medium { transform: none; }
					.tc-name-long { transform: none; }
					.tc-role { transform: none; }
					.tc-bio { transform: none; max-width: 85%; }
					.tc-dots { transform: none; }
					.tc-arrow { width: 36px; height: 36px; }
					.tc-left { left: 15px; }
					.tc-right { right: 15px; }
				}
				@media (max-width: 767px) { 
					.tc-stage { max-width: 95%; transform: translateX(0%); }
					.tc-name { transform: none; }
					.tc-name-short { transform: none; }
					.tc-name-medium { transform: none; }
					.tc-name-long { transform: none; }
					.tc-role { transform: none; }
					.tc-bio { transform: none; max-width: 90%; }
					.tc-dots { transform: none; }
					.tc-arrow { width: 32px; height: 32px; }
					.tc-left { left: 10px; }
					.tc-right { right: 10px; }
				}
			`}</style>
		</div>
	)
}

export default TeamCarousel


