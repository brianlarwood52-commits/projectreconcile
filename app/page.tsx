'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="astrax-page">
      {/* Navigation */}
      <nav className="astrax-nav">
        <div className="astrax-nav-container">
          <div className="astrax-logo">
            <div className="astrax-logo-icon">
              <div className="diamond-center"></div>
              <div className="diamond-top"></div>
              <div className="diamond-right"></div>
              <div className="diamond-bottom"></div>
              <div className="diamond-left"></div>
            </div>
            <span className="astrax-logo-text">Astrax</span>
          </div>
          <div className="astrax-nav-menu">
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark Green */}
      <section className="astrax-hero">
        <div className="astrax-hero-container">
          <div className="astrax-hero-content">
            <div className="astrax-hero-text">
              <h1 className="astrax-hero-title">Learning wherever & whenever</h1>
              <div className="astrax-search-container">
                <input 
                  type="text" 
                  placeholder="Search for courses..." 
                  className="astrax-search-input"
                />
                <button className="astrax-search-button">Search</button>
              </div>
            </div>
            <div className="astrax-hero-image">
              <div className="astrax-hero-image-wrapper">
                <div className="astrax-hero-circle"></div>
                <div className="astrax-hero-person">
                  <div className="placeholder-person">
                    <div className="person-head">
                      <div className="graduation-cap">🎓</div>
                    </div>
                    <div className="person-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Banner */}
      <section className="astrax-banner">
        <div className="astrax-banner-container">
          <h2 className="astrax-banner-text">COURSES FROM THE WORLD'S LEADING EXPERTS</h2>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="astrax-content">
        <div className="astrax-content-container">
          <div className="astrax-content-grid">
            {/* Left Column */}
            <div className="astrax-content-left">
              <h2 className="astrax-content-title">Online courses from the world's leading experts.</h2>
              <div className="astrax-instructors">
                <div className="astrax-instructor-item">
                  <div className="astrax-instructor-avatar placeholder-avatar"></div>
                  <span className="astrax-instructor-name">Neelia K. Hamilton</span>
                </div>
                <div className="astrax-instructor-item">
                  <div className="astrax-instructor-avatar placeholder-avatar"></div>
                  <span className="astrax-instructor-name">Isabella F. Monroe</span>
                </div>
                <div className="astrax-instructor-item">
                  <div className="astrax-instructor-avatar placeholder-avatar"></div>
                  <span className="astrax-instructor-name">Gabriella S. Adams</span>
                </div>
                <div className="astrax-instructor-item">
                  <div className="astrax-instructor-avatar placeholder-avatar"></div>
                  <span className="astrax-instructor-name">Expert Instructor</span>
                </div>
                <div className="astrax-instructor-item">
                  <div className="astrax-instructor-avatar placeholder-avatar"></div>
                  <span className="astrax-instructor-name">Expert Instructor</span>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="astrax-content-right">
              <div className="astrax-feature">
                <div className="astrax-feature-icon">🌐</div>
                <div className="astrax-feature-content">
                  <h3 className="astrax-feature-title">Flexible schedule</h3>
                  <p className="astrax-feature-description">Learn at your own pace</p>
                </div>
              </div>
              <div className="astrax-feature">
                <div className="astrax-feature-icon">🎓</div>
                <div className="astrax-feature-content">
                  <h3 className="astrax-feature-title">Expert instructor</h3>
                  <p className="astrax-feature-description">Learn from industry leaders</p>
                </div>
              </div>
              <div className="astrax-feature">
                <div className="astrax-feature-icon">💰</div>
                <div className="astrax-feature-content">
                  <h3 className="astrax-feature-title">Pocket friendly</h3>
                  <p className="astrax-feature-description">Affordable pricing for everyone</p>
                </div>
              </div>
              <div className="astrax-feature">
                <div className="astrax-feature-icon">🎧</div>
                <div className="astrax-feature-content">
                  <h3 className="astrax-feature-title">24/7 online support</h3>
                  <p className="astrax-feature-description">Get help whenever you need it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Card Section */}
      <section className="astrax-instructors-section">
        <div className="astrax-instructors-card">
          <div className="astrax-instructor-profile">
            <div className="astrax-instructor-photo placeholder-avatar-large"></div>
            <span className="astrax-instructor-name-large">Neelia K. Hamilton</span>
          </div>
          <div className="astrax-instructor-profile">
            <div className="astrax-instructor-photo placeholder-avatar-large"></div>
            <span className="astrax-instructor-name-large">Isabella F. Monroe</span>
          </div>
          <div className="astrax-instructor-profile">
            <div className="astrax-instructor-photo placeholder-avatar-large"></div>
            <span className="astrax-instructor-name-large">Gabriella S. Adams</span>
          </div>
          <div className="astrax-instructor-profile">
            <div className="astrax-instructor-photo placeholder-avatar-large"></div>
            <span className="astrax-instructor-name-large">Expert Instructor</span>
          </div>
          <div className="astrax-instructor-profile">
            <div className="astrax-instructor-photo placeholder-avatar-large"></div>
            <span className="astrax-instructor-name-large">Expert Instructor</span>
          </div>
        </div>
      </section>
    </div>
  )
}
