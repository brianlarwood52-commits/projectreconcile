'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 4)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // Scroll reveal animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wdt-animate-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.wdt-animate-on-scroll')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marriage Counselor',
      text: 'PROJECT RECONCILE has transformed how I approach reconciliation in my own relationships. The Holy Spirit-led steps are practical and powerful.',
      image: '👩'
    },
    {
      name: 'Michael Chen',
      role: 'Pastor',
      text: 'This ministry provides the clearest, most biblical approach to reconciliation I\'ve seen. The focus on the Holy Spirit\'s work is exactly what our church needed.',
      image: '👨'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Family Therapist',
      text: 'The step-by-step process has helped countless families in my practice. The emphasis on prayer and humility makes all the difference.',
      image: '👩‍🦰'
    },
    {
      name: 'David Thompson',
      role: 'Small Group Leader',
      text: 'We\'ve used these principles in our small group and seen incredible healing. The Holy Spirit truly moves when we follow these steps.',
      image: '👨‍🦱'
    }
  ]

  const services = [
    {
      title: 'Prayer & Guidance',
      description: 'Receive personalized prayer support and guidance for your reconciliation journey.',
      image: '🙏'
    },
    {
      title: 'Video Episodes',
      description: 'Watch our talk show episodes covering each step of reconciliation in depth.',
      image: '📺'
    },
    {
      title: 'Resource Library',
      description: 'Access comprehensive guides, workbooks, and study materials for your journey.',
      image: '📚'
    },
    {
      title: 'Community Support',
      description: 'Join others walking the same path in our supportive online community.',
      image: '💬'
    }
  ]

  // Function to split text into spaced letters (like Netlink)
  const spacedText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="spaced-letter">{char === ' ' ? '\u00A0' : char}</span>
    ))
  }

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % 4)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + 4) % 4)
  }

  return (
    <div className="netlink-homepage">
      {/* Hero Section - Exact Netlink Structure */}
      <section className={`wdt-hero-section ${isVisible ? 'wdt-visible' : ''}`}>
        <div className="wdt-hero-container">
          <div className="wdt-hero-content">
            <div className="wdt-hero-text wdt-animate-on-scroll">
              <div className="wdt-hero-badge">PROJECT RECONCILE</div>
              <h1 className="wdt-hero-title">
                Reconciliation Connects Hearts{' '}
                <span className="spaced-letters">
                  {spacedText('Through The Holy Spirit')}
                </span>
              </h1>
              <p className="wdt-hero-description">
                Discover practical steps for healing relationships, guided by the transformative power of the Holy Spirit. 
                Learn how to restore trust, find peace, and experience divine reconciliation in your life.
              </p>
              <div className="wdt-hero-buttons">
                <a href="#pricing" className="wdt-button wdt-button-primary">Start Now</a>
                <a href="#resources" className="wdt-button wdt-button-secondary">
                  Browse Resources
                  <span className="button-arrow">→</span>
                </a>
              </div>
            </div>
            <div className="wdt-hero-cards wdt-animate-on-scroll">
              <div className="wdt-hero-card">
                <a href="#personal">
                  <div className="wdt-hero-card-image">
                    <span className="card-icon">🙏</span>
                  </div>
                  <h5 className="wdt-hero-card-title">Personal Journey</h5>
                </a>
              </div>
              <div className="wdt-hero-card">
                <a href="#relationships">
                  <div className="wdt-hero-card-image">
                    <span className="card-icon">❤️</span>
                  </div>
                  <h5 className="wdt-hero-card-title">Relationships</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="wdt-scroll-down">
            <a href="#scroll-content" className="wdt-scroll-link">
              <div className="wdt-scroll-icon">↓</div>
              <span className="wdt-scroll-text">Scroll Down</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Netlink Carousel Style */}
      <section className="wdt-testimonials-section" id="scroll-content">
        <div className="wdt-container">
          <div className="wdt-testimonials-carousel">
            <div className="wdt-testimonials-wrapper">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`wdt-testimonial-item ${activeTestimonial === index ? 'wdt-active' : ''}`}
                >
                  <div className="wdt-testimonial-content">
                    <div className="wdt-testimonial-image">
                      <span className="wdt-testimonial-avatar">{testimonial.image}</span>
                    </div>
                    <div className="wdt-testimonial-text-wrapper">
                      <p className="wdt-testimonial-text">{testimonial.text}</p>
                      <div className="wdt-testimonial-author">
                        <h5>{testimonial.name}</h5>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="wdt-carousel-controls">
              <button 
                className="wdt-carousel-prev" 
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button 
                className="wdt-carousel-next" 
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Netlink "What We Do" Style */}
      <section className="wdt-services-section">
        <div className="wdt-container">
          <div className="wdt-section-header wdt-animate-on-scroll">
            <div className="wdt-section-badge">WHAT WE DO</div>
            <h2 className="wdt-section-title">
              Find Your Path To{' '}
              <span className="spaced-letters">
                {spacedText('Reconciliation')}
              </span>
            </h2>
            <p className="wdt-section-description">
              Discover practical resources and guidance for your reconciliation journey, 
              all centered on the transformative power of the Holy Spirit.
            </p>
          </div>
          <div className="wdt-services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="wdt-service-card wdt-animate-on-scroll"
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
              >
                <div className="wdt-service-image">
                  <span className="wdt-service-icon">{service.image}</span>
                </div>
                <div className="wdt-service-content">
                  <h5 className="wdt-service-title">{service.title}</h5>
                  <p className="wdt-service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="wdt-footer">
        <div className="wdt-container">
          <div className="wdt-footer-content">
            <div className="wdt-footer-section">
              <a href="/" className="wdt-footer-logo">PROJECT RECONCILE</a>
              <p className="wdt-footer-description">
                Reconciliation through the power of the Holy Spirit. 
                Healing relationships, one step at a time.
              </p>
              <div className="wdt-footer-newsletter">
                <input type="email" placeholder="Your Email" className="wdt-newsletter-input" />
                <button className="wdt-newsletter-button">
                  <span>→</span>
                </button>
              </div>
              <p className="wdt-footer-newsletter-text">Subscribe today and get wonderful resources.</p>
            </div>
            <div className="wdt-footer-section">
              <h5 className="wdt-footer-heading">Resources</h5>
              <ul className="wdt-footer-links">
                <li><a href="#">Watch Episodes</a></li>
                <li><a href="#">Download Guides</a></li>
                <li><a href="#">Join Community</a></li>
                <li><a href="#">Request Prayer</a></li>
              </ul>
            </div>
            <div className="wdt-footer-section">
              <h5 className="wdt-footer-heading">About</h5>
              <ul className="wdt-footer-links">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="wdt-footer-section">
              <h5 className="wdt-footer-heading">Connect</h5>
              <ul className="wdt-footer-links">
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Email Us</a></li>
              </ul>
            </div>
          </div>
          <div className="wdt-footer-bottom">
            <p>&copy; {new Date().getFullYear()} PROJECT RECONCILE. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
