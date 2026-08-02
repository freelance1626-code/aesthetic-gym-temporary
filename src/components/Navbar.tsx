import { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frameId: number | null = null

    const update = () => {
      frameId = null
      setScrolled(window.scrollY > 24)
    }

    const onScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(update)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <svg
            className="navbar-logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Dumbbell icon */}
            <path d="M6.5 6.5v11" />
            <path d="M17.5 6.5v11" />
            <path d="M3 12h3" />
            <path d="M18 12h3" />
            <path d="M9.5 9.5v5" />
            <path d="M14.5 9.5v5" />
            <path d="M2 9v6" />
            <path d="M22 9v6" />
          </svg>
          <span className="navbar-logo-text">
            Aesthetic <strong>Gym</strong>
          </span>
        </a>

        {/* Hamburger toggle (mobile only) */}
        <button
          type="button"
          className={`navbar-toggle${menuOpen ? ' is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>

        {/* Nav links */}
        <ul className={`navbar-links${menuOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar