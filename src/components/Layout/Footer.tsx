import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>ОБРАЗ</span>
            <span className={styles.logoSub}>студия стиля</span>
          </Link>
          <p className={styles.tagline}>
            Ваш стиль — наше искусство.<br />
            Создаём неповторимые образы для особенных людей.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className={styles.nav}>
          <h4 className={styles.colTitle}>Навигация</h4>
          <ul>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className={styles.navLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contacts}>
          <h4 className={styles.colTitle}>Контакты</h4>
          <ul className={styles.contactList}>
            <li>
              <Phone size={16} className={styles.icon} />
              <a href="tel:+79041081536" className={styles.contactLink}>
                +7 (904) 108-15-36
              </a>
            </li>
            <li>
              <MapPin size={16} className={styles.icon} />
              <span>Республика Коми, г. Ухта</span>
            </li>
            <li>
              <Mail size={16} className={styles.icon} />
              <a href="mailto:info@obraz-style.ru" className={styles.contactLink}>
                info@obraz-style.ru
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.legal}>
        <div className="container">
          <p className={styles.legalText}>
            ИП Федоткина Маргарита Олеговна&nbsp;&nbsp;|&nbsp;&nbsp;
            ОГРНИП: 326110000007156&nbsp;&nbsp;|&nbsp;&nbsp;
            ИНН: 110209645627&nbsp;&nbsp;|&nbsp;&nbsp;
            Республика Коми, г. Ухта
          </p>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ОБРАЗ — Студия индивидуального стиля. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
