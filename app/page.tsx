'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="holy-spirit-container">
      {/* Animated Background Layers */}
      <div className="animated-background">
        <div className="spirit-particles"></div>
        <div className="floating-lights">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="floating-light" style={{ 
              '--delay': `${i * 0.5}s`,
              '--duration': `${15 + i * 2}s`,
              '--x': `${Math.random() * 100}%`,
            } as React.CSSProperties}></div>
          ))}
        </div>
        <div className="gradient-orb" style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}></div>
      </div>

      {/* Hero Section */}
      <section className={`hero-section ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <div className="title-wrapper">
            <h1 className="main-title">
              <span className="title-word" style={{ '--delay': '0s' } as React.CSSProperties}>
                The
              </span>
              <span className="title-word highlight" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                Holy
              </span>
              <span className="title-word highlight" style={{ '--delay': '0.4s' } as React.CSSProperties}>
                Spirit
              </span>
            </h1>
            <div className="title-underline"></div>
          </div>
          
          <p className={`hero-subtitle ${isLoaded ? 'visible' : ''}`}>
            <span className="subtitle-line">Where Divine Presence Meets</span>
            <span className="subtitle-line">Everyday Conversations</span>
          </p>

          <div className="hero-description">
            <p className="description-text">
              Experience the warmth, wisdom, and wonder of the Holy Spirit through 
              heartfelt conversations that feel like sitting with a dear friend. 
              Each moment is an invitation to discover how the Spirit moves, 
              guides, and transforms our lives.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          <div className="sparkle sparkle-4"></div>
        </div>
      </section>

      {/* Interactive Episode Cards */}
      <section className="episodes-section">
        <h2 className="section-title">
          <span className="title-text">Featured Episodes</span>
          <span className="title-underline-animated"></span>
        </h2>

        <div className="episodes-grid">
          {[
            {
              title: "The Gift of the Holy Spirit",
              description: "Discover the profound gift that transforms hearts and opens doors to divine connection. Join us for an intimate conversation about receiving and recognizing the Holy Spirit's presence in your life.",
              theme: "gift",
              color: "gold"
            },
            {
              title: "Hearing the Still Small Voice",
              description: "Learn to recognize the gentle whispers of the Spirit through scripture, prayer, and the quiet moments of your day. Practical wisdom for tuning your heart to hear God's voice.",
              theme: "voice",
              color: "rose"
            },
            {
              title: "The Fruits of the Spirit",
              description: "Explore how love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control blossom in our lives through the Spirit's transformative power.",
              theme: "fruits",
              color: "lavender"
            },
            {
              title: "Walking in the Spirit Daily",
              description: "Discover practical ways to invite the Holy Spirit into every moment—from morning routines to work, relationships, and quiet reflection. Make the Spirit your constant companion.",
              theme: "walk",
              color: "sage"
            },
            {
              title: "The Power of Prayer & Presence",
              description: "Uncover how prayer becomes a living conversation with the Spirit, creating space for miracles, guidance, and profound peace in your daily life.",
              theme: "prayer",
              color: "amber"
            },
            {
              title: "Spiritual Gifts & Calling",
              description: "Explore the unique gifts the Spirit has given you and how to use them to serve others and fulfill your divine purpose with confidence and joy.",
              theme: "gifts",
              color: "peach"
            }
          ].map((episode, index) => (
            <div 
              key={index} 
              className={`episode-card card-${episode.color}`}
              style={{ '--card-delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="episode-number">Episode {String(index + 1).padStart(2, '0')}</div>
                <h3 className="episode-title">{episode.title}</h3>
                <p className="episode-description">{episode.description}</p>
                <button className="episode-button">
                  <span>Watch Now</span>
                  <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <div className="card-pattern"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-mark quote-mark-left">"</div>
          <blockquote className="quote-text">
            The Holy Spirit doesn't just visit us—<br />
            <span className="quote-highlight">The Spirit makes a home in our hearts</span><br />
            and transforms us from the inside out.
          </blockquote>
          <div className="quote-mark quote-mark-right">"</div>
        </div>
        <div className="quote-attribution">— Inspired by Scripture</div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-main">The Holy Spirit Talk Show</p>
            <p className="footer-sub">Spreading divine love, one conversation at a time</p>
          </div>
          <div className="footer-year">&copy; {new Date().getFullYear()}</div>
        </div>
        <div className="footer-glow"></div>
      </footer>
    </div>
  )
}
