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

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.reveal-on-scroll')
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
      icon: '✨'
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
      icon: '🙏'
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

  const resources = [
    {
      title: 'Reconciliation Guidebook',
      description: 'Complete step-by-step guide with scripture references',
      price: 'Free Download',
      icon: '📖'
    },
    {
      title: 'Prayer Journal',
      description: 'Structured journal for your reconciliation journey',
      price: 'Free Download',
      icon: '📝'
    },
    {
      title: 'Video Series',
      description: '8-part video series covering each step in detail',
      price: 'Watch Free',
      icon: '🎥'
    },
    {
      title: 'Community Support',
      description: 'Join our online community for encouragement',
      price: 'Join Free',
      icon: '💬'
    }
  ]

  return (
    <div className="netlink-homepage">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge reveal-on-scroll">
              <span>PROJECT RECONCILE</span>
            </div>
            <h1 className="hero-title reveal-on-scroll">
              Reconciliation Connects Hearts Through The Holy Spirit
            </h1>
            <p className="hero-description reveal-on-scroll">
              Discover practical steps for healing relationships, guided by the transformative power of the Holy Spirit. 
              Learn how to restore trust, find peace, and experience divine reconciliation in your life.
            </p>
            <div className="hero-buttons reveal-on-scroll">
              <button className="btn btn-primary">Start Your Journey</button>
              <button className="btn btn-secondary">Watch Episodes</button>
            </div>
            <div className="hero-scroll reveal-on-scroll">
              <span>Scroll Down</span>
              <div className="scroll-arrow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciliation Steps Section */}
      <section className="steps-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
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
                className="step-card reveal-on-scroll"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <button className="step-link">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Testimonials</span>
            <h2 className="section-title">Stories of Transformation</h2>
          </div>
          <div className="testimonials-container reveal-on-scroll">
            <div className="testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-card ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <div className="testimonial-image">{testimonial.image}</div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">What We Do</span>
            <h2 className="section-title">Discover Our Reconciliation Resources</h2>
            <p className="section-description">
              Everything you need to begin and continue your journey toward healing and restoration.
            </p>
          </div>
          <div className="services-grid">
            {[
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
            ].map((service, index) => (
              <div 
                key={index}
                className="service-card reveal-on-scroll"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-link">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Showcase */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <span className="section-badge">Free Resources</span>
            <h2 className="section-title">Hand-Picked Tools For Your Journey</h2>
          </div>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div 
                key={index}
                className="resource-card reveal-on-scroll"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="resource-icon">{resource.icon}</div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-price">{resource.price}</div>
                <button className="resource-button">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content reveal-on-scroll">
            <div className="newsletter-icon">📧</div>
            <h2 className="newsletter-title">Get 10% Off Your First Resource</h2>
            <p className="newsletter-description">
              We're thrilled that you're interested in staying up-to-date with all the latest resources, 
              updates, and encouragement from PROJECT RECONCILE. By subscribing to our newsletter.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
            <p className="newsletter-note">
              Subscribe today and receive wonderful resources for your reconciliation journey.
            </p>
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
