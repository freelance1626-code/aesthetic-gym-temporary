import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <section
          id="home"
          className="hero"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80)',
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Transform Your Body at <span>Aesthetic Gym</span></h1>
            <p className="hero-tagline">
              Train hard. Stay consistent. Become the strongest version of yourself.
            </p>
            <div className="hero-actions">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc66EEWYl8YZCUBm9AAN-N447pmwXBUnjlRwtFS3MGg88FKRA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book Free Trial
              </a>
              <a href="#membership" className="btn btn-outline">
                View Memberships
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="section features-section reveal">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <article className="feature-card">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Badge / medal */}
                <circle cx="12" cy="8" r="5" />
                <path d="M8.2 12.5 7 21l5-3 5 3-1.2-8.5" />
              </svg>
              <h3>Certified Trainers</h3>
              <p>
                Learn from experienced, nationally certified coaches who
                understand your unique goals.
              </p>
            </article>

            <article className="feature-card">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Dumbbell */}
                <path d="M6.5 6.5v11" />
                <path d="M17.5 6.5v11" />
                <path d="M3 12h3" />
                <path d="M18 12h3" />
                <path d="M9.5 9.5v5" />
                <path d="M14.5 9.5v5" />
                <path d="M2 9v6" />
                <path d="M22 9v6" />
              </svg>
              <h3>Modern Equipment</h3>
              <p>
                Train with the latest machines, free weights, and functional
                training gear in a spacious facility.
              </p>
            </article>

            <article className="feature-card">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Person with target */}
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                <circle cx="18" cy="5" r="2" />
              </svg>
              <h3>Personalized Training</h3>
              <p>
                Get custom workout plans and nutrition guidance tailored
                specifically to your body and goals.
              </p>
            </article>

            <article className="feature-card">
              <svg
                className="feature-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Card / flexible plan */}
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
                <path d="M6 15h4" />
              </svg>
              <h3>Flexible Memberships</h3>
              <p>
                Choose from monthly, quarterly, or yearly plans with no hidden
                fees and easy pause options.
              </p>
            </article>
          </div>
        </section>

        <section id="membership" className="section membership-section reveal">
          <h2 className="section-title">Membership Plans</h2>
          <p className="section-subtitle">
            Flexible plans for every goal. Upgrade or pause anytime.
          </p>

          <div
            className="membership-grid"
            {...(isMobile
              ? {
                  role: 'region' as const,
                  'aria-label': 'Membership plans – swipe to browse',
                  tabIndex: 0,
                }
              : {})}
          >
            <article className="membership-card">
              <h3>Basic</h3>
              <p className="membership-price">
                <span className="currency">$</span>29
                <span className="period">/month</span>
              </p>
              <ul className="membership-features">
                <li>Gym floor access</li>
                <li>Locker room access</li>
                <li>1 group class / week</li>
                <li>Fitness assessment</li>
              </ul>
              <a
                href="https://wa.me/917029482083?text=Hi%20Aesthetic%20Gym!%20I'm%20interested%20in%20joining%20your%20gym.%20Could%20you%20please%20share%20the%20membership%20plans%20and%20fees?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Join Now
              </a>
            </article>

            <article className="membership-card popular">
              <span className="popular-badge">Most Popular</span>
              <h3>Standard</h3>
              <p className="membership-price">
                <span className="currency">$</span>49
                <span className="period">/month</span>
              </p>
              <ul className="membership-features">
                <li>All Basic features</li>
                <li>Unlimited group classes</li>
                <li>Sauna & recovery area</li>
                <li>1 personal session / month</li>
              </ul>
              <a
                href="https://wa.me/917029482083?text=Hi%20Aesthetic%20Gym!%20I'm%20interested%20in%20joining%20your%20gym.%20Could%20you%20please%20share%20the%20membership%20plans%20and%20fees?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Join Now
              </a>
            </article>

            <article className="membership-card">
              <h3>Premium</h3>
              <p className="membership-price">
                <span className="currency">$</span>79
                <span className="period">/month</span>
              </p>
              <ul className="membership-features">
                <li>All Standard features</li>
                <li>Unlimited personal training</li>
                <li>Nutrition coaching</li>
                <li>Guest passes (2 per month)</li>
              </ul>
              <a
                href="https://wa.me/917029482083?text=Hi%20Aesthetic%20Gym!%20I'm%20interested%20in%20joining%20your%20gym.%20Could%20you%20please%20share%20the%20membership%20plans%20and%20fees?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                Join Now
              </a>
            </article>
          </div>
        </section>

        <section id="trainers" className="section trainers-section reveal">
          <h2 className="section-title">Meet Our Trainers</h2>
          <p className="section-subtitle">
            Certified experts dedicated to helping you reach your goals.
          </p>

          <div className="trainers-grid">
            <article className="trainer-card">
              <div className="trainer-photo">
                <img
                  src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=300&q=80 300w, https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80 600w"
                  sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 280px"
                  alt="Marcus Reed – strength and conditioning coach at Aesthetic Gym Siliguri"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="trainer-info">
                <h3>Marcus Reed</h3>
                <p className="trainer-specialty">Strength & Conditioning</p>
                <p className="trainer-bio">
                  Former powerlifter with 10+ years coaching athletes to build
                  raw strength safely.
                </p>
              </div>
            </article>

            <article className="trainer-card">
              <div className="trainer-photo">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&q=80 300w, https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80 600w"
                  sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 280px"
                  alt="Sofia Alvarez – HIIT and functional training coach at Aesthetic Gym Siliguri"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="trainer-info">
                <h3>Sofia Alvarez</h3>
                <p className="trainer-specialty">HIIT & Functional Training</p>
                <p className="trainer-bio">
                  High-energy coach specializing in fat loss, mobility, and
                  functional fitness programs.
                </p>
              </div>
            </article>

            <article className="trainer-card">
              <div className="trainer-photo">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=300&q=80 300w, https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80 600w"
                  sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 280px"
                  alt="David Chen – bodybuilding and nutrition coach at Aesthetic Gym Siliguri"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="trainer-info">
                <h3>David Chen</h3>
                <p className="trainer-specialty">Bodybuilding & Nutrition</p>
                <p className="trainer-bio">
                  Certified bodybuilding coach focused on hypertrophy,
                  contest prep, and meal planning.
                </p>
              </div>
            </article>

            <article className="trainer-card">
              <div className="trainer-photo">
                <img
                  src="https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?auto=format&fit=crop&w=600&q=80"
                  srcSet="https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?auto=format&fit=crop&w=300&q=80 300w, https://images.unsplash.com/photo-1541698444083-023c97d3f4b6?auto=format&fit=crop&w=600&q=80 600w"
                  sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1200px) 30vw, 280px"
                  alt="Amara Okafor – mobility and recovery specialist at Aesthetic Gym Siliguri"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="trainer-info">
                <h3>Amara Okafor</h3>
                <p className="trainer-specialty">Mobility & Recovery</p>
                <p className="trainer-bio">
                  Yoga and mobility specialist helping members move better,
                  recover faster, and prevent injury.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="testimonials" className="section testimonials-section reveal">
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-subtitle">
            Real results from real people who train with us.
          </p>

          <div className="testimonials-grid">
            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars" role="img">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.9 6.26 6.85.86-5.06 4.7 1.32 6.77L12 17.27l-5.01 3.32 1.32-6.77-5.06-4.7 6.85-.86z" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "Joining Aesthetic Gym changed my life. In six months I lost 20
                pounds and gained real confidence. The trainers truly care
                about your progress."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JR</div>
                <div>
                  <p className="testimonial-name">James Rodriguez</p>
                  <p className="testimonial-role">Member for 8 months</p>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 out of 5 stars" role="img">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="star-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.9 6.26 6.85.86-5.06 4.7 1.32 6.77L12 17.27l-5.01 3.32 1.32-6.77-5.06-4.7 6.85-.86z" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "The personalized training program is unmatched. My coach
                adjusted every workout to my progress. I've never been this
                strong before."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SK</div>
                <div>
                  <p className="testimonial-name">Sarah Kim</p>
                  <p className="testimonial-role">Member for 1 year</p>
                </div>
              </div>
            </article>

            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="4 out of 5 stars" role="img">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`star-icon${i === 4 ? ' empty' : ''}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.9 6.26 6.85.86-5.06 4.7 1.32 6.77L12 17.27l-5.01 3.32 1.32-6.77-5.06-4.7 6.85-.86z" />
                  </svg>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "Great equipment, great atmosphere, and the weekend classes are
                a blast. I look forward to every session at the gym."
              </blockquote>
              <div className="testimonial-author">
                <div className="testimonial-avatar">MT</div>
                <div>
                  <p className="testimonial-name">Michael Thomas</p>
                  <p className="testimonial-role">Member for 6 months</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="gallery" className="section gallery-section reveal">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Inside the Aesthetic Gym — take a look around.
          </p>

          <div className="gallery-grid">
            <a
              href="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item gallery-item-tall"
            >
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
                alt="Strength training zone with free weights"
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-caption">Strength Zone</span>
            </a>

            <a
              href="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
                alt="Rows of gym equipment"
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-caption">Cardio Floor</span>
            </a>

            <a
              href="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
                alt="Woman training with dumbbells"
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-caption">Personal Training</span>
            </a>

            <a
              href="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
                alt="Woman stretching on exercise mat"
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-caption">Mobility & Recovery</span>
            </a>

            <a
              href="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                srcSet="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80 1200w"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
                alt="Man lifting dumbbells in gym"
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-caption">Functional Training</span>
            </a>

            <a
              href="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item gallery-item-tall"
            >
                  <img
                    src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80"
                    srcSet="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80 1200w"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 320px"
                    alt="Athlete doing battle rope workout"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-caption">Group Classes</span>
                </a>

                <a
                  href="/images/gallery-portrait.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-item gallery-item-tall"
                >
                  <img
                    src="/images/gallery-portrait.jpg"
                    alt="Local portrait near an auto-rickshaw"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-caption">Local Portrait</span>
                </a>

                <a
                  href="/images/gallery-flower.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-item"
                >
                  <img
                    src="/images/gallery-flower.jpg"
                    alt="Brass plate decorated with flower petals"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-caption">Flower Ritual</span>
                </a>

                <a
                  href="/images/gallery-newspaper.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gallery-item"
                >
                  <img
                    src="/images/gallery-newspaper.jpg"
                    alt="Man carrying newspapers past a colorful wall"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="gallery-caption">Street Scene</span>
                </a>
              </div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <h2 className="section-title">Visit Us</h2>
          <p className="section-subtitle">
            Drop by for a tour or reach out — we'd love to hear from you.
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h3>Address</h3>
                  <p>Ward no 41, Bottle Company, 2nd mile, Ramkrishna Road, Jyoti Nagar, Siliguri, West Bengal 734001</p>
                </div>
              </div>

              <div className="contact-item">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+917029482083">+91 70294 82083</a>
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917029482083"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <svg
                  className="whatsapp-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.21-3.6.94.96-3.51-.23-.36a9.47 9.47 0 0 1-1.45-5.05c0-5.24 4.27-9.5 9.53-9.5a9.47 9.47 0 0 1 9.52 9.53c0 5.24-4.28 9.49-9.53 9.49zm8.02-17.54A11.31 11.31 0 0 0 12.04.7C5.82.7.76 5.76.76 11.98c0 1.99.52 3.93 1.51 5.64L.58 23.42l5.94-1.56a11.3 11.3 0 0 0 5.52 1.4h.01c6.22 0 11.28-5.05 11.28-11.27 0-3.01-1.17-5.84-3.27-7.96z" />
                </svg>
                Chat on WhatsApp
              </a>

              <div className="contact-hours">
                <h3>Business Hours</h3>
                <ul>
                  <li>
                    <span>Monday – Friday</span>
                    <span>5:00 AM – 11:00 PM</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>6:00 AM – 10:00 PM</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>7:00 AM – 8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Aesthetic Gym Siliguri location map"
                src="https://www.google.com/maps?q=26.7388,88.4467119&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg
                className="footer-logo-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6.5 6.5v11" />
                <path d="M17.5 6.5v11" />
                <path d="M3 12h3" />
                <path d="M18 12h3" />
                <path d="M9.5 9.5v5" />
                <path d="M14.5 9.5v5" />
                <path d="M2 9v6" />
                <path d="M22 9v6" />
              </svg>
              <span>
                Aesthetic <strong>Gym</strong>
              </span>
            </div>
            <p className="footer-tagline">
              Train hard. Stay consistent. Become the strongest version of
              yourself.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7h2.4l.36-2.8H13.5V9.4c0-.81.22-1.36 1.38-1.36h1.48V5.55c-.26-.03-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.7v2.06H8.2V14h2.4v7h2.9z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM19.85 5.59a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.55 15.57V8.43L15.82 12z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>
            <ul className="footer-contact">
              <li>
                <svg
                  className="footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href="https://www.google.com/maps/place/Aesthetic+Gym/@26.7388,88.4467119,17z/data=!3m1!4b1!4m6!3m5!1s0x39e441d6b59443db:0xa0b60f8975e60597!8m2!3d26.7388!4d88.4467119!16s%2Fg%2F11rz3jm3f0?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ward no 41, Bottle Company, 2nd mile, Ramkrishna Road, Jyoti Nagar, Siliguri, West Bengal 734001
                </a>
              </li>
              <li>
                <svg
                  className="footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+917029482083">+91 70294 82083</a>
              </li>
              <li>
                <svg
                  className="footer-contact-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                <a href="mailto:hello@aestheticgym.com">hello@aestheticgym.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Hours</h3>
            <ul className="footer-hours">
              <li><span>Mon – Fri</span><span>5 AM – 11 PM</span></li>
              <li><span>Saturday</span><span>6 AM – 10 PM</span></li>
              <li><span>Sunday</span><span>7 AM – 8 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Aesthetic Gym. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App