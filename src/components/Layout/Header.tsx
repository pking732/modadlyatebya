import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <span className={styles.logoText}>ОБРАЗ</span>
          <span className={styles.logoSub}>студия стиля</span>
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [styles.navLink, isActive ? styles.active : ''].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a href="tel:+79041081536" className={styles.phone}>
          +7 (904) 108-15-36
        </a>

        <button
          className={styles.burger}
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={[styles.mobileMenu, mobileOpen ? styles.mobileOpen : ''].join(' ')}>
        <nav className={styles.mobileNav}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [styles.mobileLink, isActive ? styles.active : ''].join(' ')
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <a href="tel:+79041081536" className={styles.mobilePhone}>
          +7 (904) 108-15-36
        </a>
      </div>
    </header>
  );
}
