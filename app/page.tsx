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

  // Scroll reveal with Netlink-style animations
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

  const reconciliationSteps = [
    {
      number: '01',
      title: 'Understanding the Holy Spirit',
      description: 'Discover how the Holy Spirit prepares our hearts for reconciliation and opens doors to healing.',
      icon: '🙏'
    },
    {
      number: '02',
      title: 'Self-Reflection & Repentance',
      description: 'Learn to examine your heart honestly and embrace genuine repentance through the Spirit\'s guidance.',
      icon: '💭'
    },
    {
      number: '03',
      title: 'Prayer & Divine Guidance',
      description: 'Build your foundation for reconciliation through prayer and seeking the Holy Spirit\'s wisdom.',
      icon: '✨'
    },
    {
      number: '04',
      title: 'Humility & Grace',
      description: 'Approach difficult conversations with humility, acknowledging your part while extending love.',
      icon: '❤️'
    },
    {
      number: '05',
      title: 'Active Listening',
      description: 'Learn to truly hear others\' pain and perspectives through the Holy Spirit\'s help.',
      icon: '👂'
    },
    {
      number: '06',
      title: 'Forgiveness',
      description: 'Receive God\'s forgiveness and extend it to others through the Spirit\'s transformative power.',
      icon: '🤝'
    }
  ]

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
      icon: '📺',
      title: 'Video Episodes',
      description: 'Watch our talk show episodes covering each step of reconciliation in depth.'
    },
    {
      icon: '📚',
      title: 'Guided Resources',
      description: 'Download our comprehensive guides and workbooks for your journey.'
    },
    {
      icon: '💬',
      title: 'Community Support',
      description: 'Join others walking the same path in our supportive online community.'
    },
    {
      icon: '🙏',
      title: 'Prayer Support',
      description: 'Receive prayer and encouragement from our ministry team.'
    },
    {
      icon: '📖',
      title: 'Scripture Studies',
      description: 'Deep dive into biblical principles of reconciliation and forgiveness.'
    },
    {
      icon: '🎯',
      title: 'Personal Guidance',
      description: 'Get personalized help navigating your specific reconciliation situation.'
    }
  ]

  return (
    <div className="netlink-homepage">
      {/* Hero Section - Netlink Style */}
      <section className={`wdt-hero-section ${isVisible ? 'wdt-visible' : ''}`}>
        <div className="wdt-hero-container">
          <div className="wdt-hero-content-wrapper">
            <div className="wdt-hero-text wdt-animate-on-scroll wdt-slide-from-left">
              <div className="wdt-hero-badge">
                <span>PROJECT RECONCILE</span>
              </div>
              <h1 className="wdt-hero-title">
                Reconciliation Connects Hearts Through The Holy Spirit
              </h1>
              <p className="wdt-hero-description">
                Discover practical steps for healing relationships, guided by the transformative power of the Holy Spirit. 
                Learn how to restore trust, find peace, and experience divine reconciliation in your life.
              </p>
              <div className="wdt-hero-buttons">
                <button className="wdt-button wdt-button-primary">Start Your Journey</button>
                <button className="wdt-button wdt-button-secondary">Watch Episodes</button>
              </div>
            </div>
            <div className="wdt-hero-image wdt-animate-on-scroll wdt-slide-from-right">
              <div className="wdt-hero-image-wrapper">
                <div className="wdt-hero-image-placeholder">🕊️</div>
                <div className="wdt-hero-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="wdt-scroll-down">
          <div className="wdt-scroll-indicator">
            <span>Scroll Down</span>
            <div className="wdt-scroll-arrow wdt-bounce-custom"></div>
          </div>
        </div>
      </section>

      {/* Reconciliation Steps - Netlink Icon Box Style */}
      <section className="wdt-steps-section">
        <div className="wdt-container">
          <div className="wdt-section-header wdt-animate-on-scroll">
            <span className="wdt-section-badge">Reconciliation Journey</span>
            <h2 className="wdt-section-title">Find Your Path To Healing</h2>
            <p className="wdt-section-description">
              Each step is guided by the Holy Spirit, leading you toward complete reconciliation and restored relationships.
            </p>
          </div>
          <div className="wdt-steps-grid">
            {reconciliationSteps.map((step, index) => (
              <div 
                key={index} 
                className="wdt-icon-box wdt-animate-on-scroll"
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
              >
                <div className="wdt-icon-box-icon">
                  <span>{step.icon}</span>
                </div>
                <div className="wdt-icon-box-number">{step.number}</div>
                <h3 className="wdt-icon-box-title">{step.title}</h3>
                <p className="wdt-icon-box-description">{step.description}</p>
                <a href="#" className="wdt-icon-box-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Netlink Style */}
      <section className="wdt-testimonials-section">
        <div className="wdt-container">
          <div className="wdt-section-header wdt-animate-on-scroll">
            <span className="wdt-section-badge">Testimonials</span>
            <h2 className="wdt-section-title">Stories of Transformation</h2>
          </div>
          <div className="wdt-testimonials-showcase wdt-animate-on-scroll">
            <div className="wdt-testimonial-main">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`wdt-testimonial-card ${activeTestimonial === index ? 'wdt-active' : ''}`}
                >
                  <div className="wdt-testimonial-image">
                    <div className="wdt-testimonial-avatar">{testimonial.image}</div>
                  </div>
                  <div className="wdt-testimonial-content">
                    <p className="wdt-testimonial-text">"{testimonial.text}"</p>
                    <div className="wdt-testimonial-author">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="wdt-testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`wdt-indicator ${activeTestimonial === index ? 'wdt-active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services - Netlink Style */}
      <section className="wdt-services-section">
        <div className="wdt-container">
          <div className="wdt-section-header wdt-animate-on-scroll">
            <span className="wdt-section-badge">What We Do</span>
            <h2 className="wdt-section-title">Discover Our Reconciliation Resources</h2>
            <p className="wdt-section-description">
              Everything you need to begin and continue your journey toward healing and restoration.
            </p>
          </div>
          <div className="wdt-services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="wdt-service-card wdt-animate-on-scroll"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="wdt-service-icon">{service.icon}</div>
                <h3 className="wdt-service-title">{service.title}</h3>
                <p className="wdt-service-description">{service.description}</p>
                <a href="#" className="wdt-service-link">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Netlink Style */}
      <section className="wdt-newsletter-section">
        <div className="wdt-container">
          <div className="wdt-newsletter-content wdt-animate-on-scroll">
            <div className="wdt-newsletter-icon">📧</div>
            <h2 className="wdt-newsletter-title">Get Resources Delivered To Your Inbox</h2>
            <p className="wdt-newsletter-description">
              Stay connected with PROJECT RECONCILE. Receive weekly encouragement, 
              new resources, and updates on our latest episodes.
            </p>
            <form className="wdt-newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="wdt-newsletter-input"
              />
              <button type="submit" className="wdt-button wdt-button-primary">Subscribe Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="wdt-footer">
        <div className="wdt-container">
          <div className="wdt-footer-content">
            <div className="wdt-footer-section">
              <h3 className="wdt-footer-title">PROJECT RECONCILE</h3>
              <p className="wdt-footer-description">
                Reconciliation through the power of the Holy Spirit. 
                Healing relationships, one step at a time.
              </p>
            </div>
            <div className="wdt-footer-section">
              <h4 className="wdt-footer-heading">Resources</h4>
              <ul className="wdt-footer-links">
                <li><a href="#">Watch Episodes</a></li>
                <li><a href="#">Download Guides</a></li>
                <li><a href="#">Join Community</a></li>
                <li><a href="#">Request Prayer</a></li>
              </ul>
            </div>
            <div className="wdt-footer-section">
              <h4 className="wdt-footer-heading">About</h4>
              <ul className="wdt-footer-links">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="wdt-footer-section">
              <h4 className="wdt-footer-heading">Connect</h4>
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
