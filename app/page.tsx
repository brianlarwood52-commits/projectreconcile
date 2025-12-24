'use client'

import { useEffect, useState, useRef } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 4)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  // Scroll reveal with dramatic animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.animate-on-scroll')
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
      image: '🙏'
    },
    {
      number: '02',
      title: 'Self-Reflection & Repentance',
      description: 'Learn to examine your heart honestly and embrace genuine repentance through the Spirit\'s guidance.',
      image: '💭'
    },
    {
      number: '03',
      title: 'Prayer & Divine Guidance',
      description: 'Build your foundation for reconciliation through prayer and seeking the Holy Spirit\'s wisdom.',
      image: '✨'
    },
    {
      number: '04',
      title: 'Humility & Grace',
      description: 'Approach difficult conversations with humility, acknowledging your part while extending love.',
      image: '❤️'
    },
    {
      number: '05',
      title: 'Active Listening',
      description: 'Learn to truly hear others\' pain and perspectives through the Holy Spirit\'s help.',
      image: '👂'
    },
    {
      number: '06',
      title: 'Forgiveness',
      description: 'Receive God\'s forgiveness and extend it to others through the Spirit\'s transformative power.',
      image: '🤝'
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

  return (
    <div className="netlink-homepage">
      {/* Hero Section with Big Image Animation */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`} ref={heroRef}>
        <div className="hero-container">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <div className="hero-badge animate-slide-right">
                <span>PROJECT RECONCILE</span>
              </div>
              <h1 className="hero-title animate-slide-up">
                Reconciliation Connects Hearts Through The Holy Spirit
              </h1>
              <p className="hero-description animate-slide-up-delay">
                Discover practical steps for healing relationships, guided by the transformative power of the Holy Spirit. 
                Learn how to restore trust, find peace, and experience divine reconciliation in your life.
              </p>
              <div className="hero-buttons animate-fade-in">
                <button className="btn btn-primary">Start Your Journey</button>
                <button className="btn btn-secondary">Watch Episodes</button>
              </div>
            </div>
            <div className="hero-image-container animate-slide-left">
              <div className="hero-main-image">
                <div className="image-placeholder">🕊️</div>
              </div>
              <div className="hero-floating-elements">
                <div className="floating-element floating-1">✨</div>
                <div className="floating-element floating-2">💫</div>
                <div className="floating-element floating-3">🌟</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Reconciliation Steps - Big Cards Sliding In */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">Reconciliation Journey</span>
            <h2 className="section-title">Find Your Path To Healing</h2>
            <p className="section-description">
              Each step is guided by the Holy Spirit, leading you toward complete reconciliation and restored relationships.
            </p>
          </div>
          <div className="steps-grid">
            {reconciliationSteps.map((step, index) => (
              <div 
                key={index} 
                className={`step-card animate-on-scroll ${index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}`}
                style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
              >
                <div className="step-image-large">
                  <div className="step-image-content">{step.image}</div>
                </div>
                <div className="step-number-large">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <button className="step-link">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Big Images */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">Stories of Transformation</h2>
          </div>
          <div className="testimonials-showcase animate-on-scroll">
            <div className="testimonial-main">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-large ${activeTestimonial === index ? 'active' : ''}`}
                >
                  <div className="testimonial-image-large">
                    <div className="testimonial-avatar">{testimonial.image}</div>
                  </div>
                  <div className="testimonial-content-large">
                    <p className="testimonial-quote">"{testimonial.text}"</p>
                    <div className="testimonial-author-large">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-thumbnails">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-thumb ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="thumb-avatar">{testimonial.image}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Big Icon Cards */}
      <section className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-badge">What We Do</span>
            <h2 className="section-title">Discover Our Reconciliation Resources</h2>
            <p className="section-description">
              Everything you need to begin and continue your journey toward healing and restoration.
            </p>
          </div>
          <div className="services-grid-large">
            {[
              {
                icon: '📺',
                title: 'Video Episodes',
                description: 'Watch our talk show episodes covering each step of reconciliation in depth.',
                color: 'purple'
              },
              {
                icon: '📚',
                title: 'Guided Resources',
                description: 'Download our comprehensive guides and workbooks for your journey.',
                color: 'pink'
              },
              {
                icon: '💬',
                title: 'Community Support',
                description: 'Join others walking the same path in our supportive online community.',
                color: 'blue'
              },
              {
                icon: '🙏',
                title: 'Prayer Support',
                description: 'Receive prayer and encouragement from our ministry team.',
                color: 'green'
              },
              {
                icon: '📖',
                title: 'Scripture Studies',
                description: 'Deep dive into biblical principles of reconciliation and forgiveness.',
                color: 'orange'
              },
              {
                icon: '🎯',
                title: 'Personal Guidance',
                description: 'Get personalized help navigating your specific reconciliation situation.',
                color: 'teal'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`service-card-large animate-on-scroll ${index % 2 === 0 ? 'slide-from-left' : 'slide-from-right'}`}
                style={{ '--delay': `${index * 0.15}s` } as React.CSSProperties}
                data-color={service.color}
              >
                <div className="service-icon-large">{service.icon}</div>
                <div className="service-content-large">
                  <h3 className="service-title-large">{service.title}</h3>
                  <p className="service-description-large">{service.description}</p>
                  <button className="service-button-large">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content-large animate-on-scroll slide-from-bottom">
            <div className="newsletter-icon-large">📧</div>
            <h2 className="newsletter-title-large">Get Resources Delivered To Your Inbox</h2>
            <p className="newsletter-description-large">
              Stay connected with PROJECT RECONCILE. Receive weekly encouragement, 
              new resources, and updates on our latest episodes.
            </p>
            <form className="newsletter-form-large">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input-large"
              />
              <button type="submit" className="newsletter-button-large">Subscribe Now</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">PROJECT RECONCILE</h3>
              <p className="footer-description">
                Reconciliation through the power of the Holy Spirit. 
                Healing relationships, one step at a time.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><a href="#">Watch Episodes</a></li>
                <li><a href="#">Download Guides</a></li>
                <li><a href="#">Join Community</a></li>
                <li><a href="#">Request Prayer</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">About</h4>
              <ul className="footer-links">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-links">
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Email Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} PROJECT RECONCILE. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
