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
                PROJECT
              </span>
              <span className="title-word highlight" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                RECONCILE
              </span>
            </h1>
            <div className="title-underline"></div>
          </div>
          
          <p className={`hero-subtitle ${isLoaded ? 'visible' : ''}`}>
            <span className="subtitle-line">Reconciliation Through</span>
            <span className="subtitle-line">The Power of the Holy Spirit</span>
          </p>

          <div className="hero-description">
            <p className="description-text">
              Discover practical steps for reconciliation in your relationships, 
              guided by the transformative power of the Holy Spirit. Learn how to 
              heal broken connections, restore trust, and find peace through divine 
              wisdom and grace. Join us for heartfelt conversations that bring 
              hope and healing to wounded hearts.
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
          <span className="title-text">Reconciliation Journey</span>
          <span className="title-underline-animated"></span>
        </h2>

        <div className="episodes-grid">
          {[
            {
              title: "Step 1: Understanding the Holy Spirit's Role in Reconciliation",
              description: "Discover how the Holy Spirit works in our hearts to prepare us for reconciliation. Learn to recognize the Spirit's gentle guidance as you take the first steps toward healing broken relationships. We'll explore how divine love opens doors that seemed permanently closed.",
              theme: "foundation",
              color: "gold"
            },
            {
              title: "Step 2: Examining Your Heart - Self-Reflection & Repentance",
              description: "Before reaching out to others, we must first look inward. This episode guides you through honest self-examination, helping you identify your role in conflicts and embrace genuine repentance. The Holy Spirit illuminates areas that need healing within ourselves first.",
              theme: "reflection",
              color: "rose"
            },
            {
              title: "Step 3: Prayer & Seeking Divine Guidance",
              description: "Learn how prayer becomes your foundation for reconciliation. Discover practical ways to seek the Holy Spirit's wisdom before approaching difficult conversations. We'll explore how prayer transforms our hearts and prepares us to be instruments of peace.",
              theme: "prayer",
              color: "lavender"
            },
            {
              title: "Step 4: Approaching with Humility & Grace",
              description: "The Holy Spirit teaches us to approach reconciliation with humility rather than pride. Learn how to initiate conversations with grace, acknowledging your part while extending genuine love. Discover the power of a gentle, humble heart in opening doors to healing.",
              theme: "humility",
              color: "sage"
            },
            {
              title: "Step 5: Active Listening & Understanding",
              description: "True reconciliation requires listening with the heart, not just the ears. Learn how the Holy Spirit helps us truly hear others' pain and perspectives. We'll explore how understanding precedes healing and how divine wisdom guides our responses.",
              theme: "listening",
              color: "amber"
            },
            {
              title: "Step 6: Forgiveness - Receiving & Extending",
              description: "Forgiveness is at the heart of reconciliation, and it's only possible through the Holy Spirit's power. Discover how to receive God's forgiveness for yourself and extend it to others, even when it feels impossible. Learn the difference between forgiveness and trust.",
              theme: "forgiveness",
              color: "peach"
            },
            {
              title: "Step 7: Rebuilding Trust Through Consistent Action",
              description: "Trust is rebuilt through consistent, Spirit-led actions over time. Learn practical ways to demonstrate genuine change and rebuild broken trust. We'll explore how the Holy Spirit empowers us to keep our commitments and show love through our actions.",
              theme: "trust",
              color: "gold"
            },
            {
              title: "Step 8: Maintaining Reconciliation - Walking in the Spirit",
              description: "Reconciliation isn't a one-time event—it's a daily walk. Discover how to maintain healed relationships through the ongoing work of the Holy Spirit. Learn to recognize and address conflicts early, before they become major divisions.",
              theme: "maintenance",
              color: "rose"
            }
          ].map((episode, index) => (
            <div 
              key={index} 
              className={`episode-card card-${episode.color}`}
              style={{ '--card-delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="episode-number">Step {String(index + 1).padStart(2, '0')}</div>
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

      {/* Together Section - Inspired by Drew's Show */}
      <section className="together-section">
        <div className="together-container">
          <h2 className="together-title">We Get To</h2>
          <div className="together-words">
            {[
              'heal together',
              'forgive together',
              'restore together',
              'love together',
              'grow together',
              'pray together',
              'understand together',
              'reconcile together',
              'hope together',
              'peace together',
              'trust together',
              'flourish together',
              'bless together',
              'transform together',
              'unite together'
            ].map((word, index) => (
              <span 
                key={index} 
                className="together-word"
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-mark quote-mark-left">"</div>
          <blockquote className="quote-text">
            Reconciliation is not about who was right or wrong—<br />
            <span className="quote-highlight">It's about allowing the Holy Spirit</span><br />
            to heal what was broken and restore what was lost.
          </blockquote>
          <div className="quote-mark quote-mark-right">"</div>
        </div>
        <div className="quote-attribution">— PROJECT RECONCILE</div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-text">
            <p className="footer-main">PROJECT RECONCILE</p>
            <p className="footer-sub">Reconciliation through the power of the Holy Spirit</p>
          </div>
          <div className="footer-year">&copy; {new Date().getFullYear()} PROJECT RECONCILE. All rights reserved.</div>
        </div>
        <div className="footer-glow"></div>
      </footer>
    </div>
  )
}
