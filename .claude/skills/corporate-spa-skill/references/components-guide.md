# Руководство по компонентам

## UI — Button.tsx

```tsx
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      <span className={isLoading ? styles.loadingText : ''}>{children}</span>
    </button>
  );
}
```

```css
/* Button.module.css */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  line-height: 1.25;
  white-space: nowrap;
  border-radius: var(--radius-md);
  transition: background-color var(--transition-base),
              color var(--transition-base),
              border-color var(--transition-base),
              transform var(--transition-fast),
              box-shadow var(--transition-base);
  cursor: pointer;
  border: 2px solid transparent;
  text-decoration: none;
}

.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.button:active:not(:disabled) {
  transform: scale(0.98);
}

/* Размеры */
.sm { padding: 8px 16px; font-size: var(--font-size-sm); }
.md { padding: 12px 24px; font-size: var(--font-size-base); }
.lg { padding: 16px 32px; font-size: var(--font-size-lg); }

/* Варианты */
.primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}
.primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.secondary {
  background-color: var(--color-secondary);
  color: var(--color-white);
}
.secondary:hover:not(:disabled) {
  background-color: var(--color-secondary-dark);
  transform: translateY(-1px);
}

.outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}
.outline:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.ghost {
  background-color: transparent;
  color: var(--color-text);
}
.ghost:hover:not(:disabled) {
  background-color: var(--color-bg-alt);
}

.fullWidth { width: 100%; }

/* Спиннер загрузки */
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loadingText { opacity: 0.7; }
```

---

## UI — Card.tsx

```tsx
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${hover ? styles.hover : ''} ${styles[`padding-${padding}`]} ${className}`}
    >
      {children}
    </div>
  );
}
```

```css
/* Card.module.css */
.card {
  background-color: var(--color-white);
  border-radius: var(--card-border-radius);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.hover {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.padding-sm { padding: 16px; }
.padding-md { padding: var(--card-padding-mobile); }
.padding-lg { padding: 40px; }

@media (min-width: 1024px) {
  .padding-md { padding: var(--card-padding); }
  .padding-lg { padding: 48px; }
}
```

---

## Layout — Header.tsx

```tsx
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/about', label: 'О нас' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Блокируем скролл body при открытом меню
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="На главную">
          <span className={styles.logoPrimary}>Компания</span>
          <span className={styles.logoSecondary}>.pro</span>
        </Link>

        {/* Десктопная навигация */}
        <nav className={styles.desktopNav} aria-label="Основная навигация">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/contacts" className={styles.ctaButton}>
            Связаться
          </Link>

          {/* Кнопка мобильного меню */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-label="Мобильное меню">
          <nav>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.active : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

```css
/* Header.module.css */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  background-color: var(--color-white);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}

.header.scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 72px;
}

/* Логотип */
.logo {
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: var(--font-size-xl);
  font-weight: 700;
  flex-shrink: 0;
  line-height: 1;
}

.logoPrimary { color: var(--color-text); }
.logoSecondary { color: var(--color-primary); }

/* Десктопная навигация */
.desktopNav {
  display: none;
  align-items: center;
  gap: 4px;
}

@media (min-width: 1024px) {
  .desktopNav {
    display: flex;
  }
}

.navLink {
  padding: 8px 16px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast), background-color var(--transition-fast);
  line-height: 1.25;
  white-space: nowrap;
}

.navLink:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
}

.navLink.active {
  color: var(--color-primary);
  font-weight: 600;
}

/* Actions */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.ctaButton {
  display: none;
  padding: 10px 20px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  line-height: 1.25;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
  white-space: nowrap;
}

.ctaButton:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-1px);
}

@media (min-width: 768px) {
  .ctaButton {
    display: inline-flex;
    align-items: center;
  }
}

/* Кнопка меню */
.menuButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-text);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
  flex-shrink: 0;
}

.menuButton:hover {
  background-color: var(--color-bg-alt);
}

@media (min-width: 1024px) {
  .menuButton {
    display: none;
  }
}

/* Мобильное меню */
.mobileMenu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-white);
  padding: 24px 16px;
  overflow-y: auto;
  border-top: 1px solid var(--color-border);
}

.mobileNavLink {
  display: block;
  padding: 16px 20px;
  font-size: var(--font-size-lg);
  font-weight: 500;
  color: var(--color-text-muted);
  border-radius: var(--radius-md);
  transition: color var(--transition-fast), background-color var(--transition-fast);
  line-height: 1.4;
  margin-bottom: 4px;
}

.mobileNavLink:hover,
.mobileNavLink.active {
  color: var(--color-primary);
  background-color: var(--color-primary-light);
}
```

---

## Forms — ContactForm.tsx

```tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { sendEmail, type ContactFormData } from '../../utils/emailService';
import Button from '../UI/Button';
import styles from './ContactForm.module.css';

// Схема валидации
const schema = yup.object({
  name: yup
    .string()
    .min(2, 'Минимум 2 символа')
    .required('Имя обязательно'),
  phone: yup
    .string()
    .matches(
      /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      'Введите корректный номер телефона'
    )
    .required('Телефон обязателен'),
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен'),
  service: yup.string().optional(),
  message: yup.string().optional(),
});

type FormValues = yup.InferType<typeof schema>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting');
    const success = await sendEmail(data as ContactFormData);
    if (success) {
      setStatus('success');
      reset();
      // Сбрасываем статус через 5 секунд
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successMessage} role="alert">
        <h3>Сообщение отправлено!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Имя <span className={styles.required}>*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Иван Иванов"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          {...register('name')}
        />
        {errors.name && (
          <span className={styles.errorText} role="alert">{errors.name.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="phone" className={styles.label}>
          Телефон <span className={styles.required}>*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+7 (999) 123-45-67"
          className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          {...register('phone')}
        />
        {errors.phone && (
          <span className={styles.errorText} role="alert">{errors.phone.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email <span className={styles.required}>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="ivan@example.com"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          {...register('email')}
        />
        {errors.email && (
          <span className={styles.errorText} role="alert">{errors.email.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Сообщение</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Расскажите о вашем проекте..."
          className={styles.input}
          {...register('message')}
        />
      </div>

      {status === 'error' && (
        <div className={styles.errorMessage} role="alert">
          Произошла ошибка при отправке. Попробуйте ещё раз.
        </div>
      )}

      <Button
        type="submit"
        isLoading={status === 'submitting'}
        fullWidth
        size="lg"
      >
        {status === 'submitting' ? 'Отправляем...' : 'Отправить сообщение'}
      </Button>
    </form>
  );
}
```

```css
/* ContactForm.module.css */
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
}

.required {
  color: var(--color-error);
  margin-left: 2px;
}

.input {
  width: 100%;
  padding: 12px 16px;
  font-size: var(--font-size-base);
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-white);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  appearance: none;
}

.input::placeholder {
  color: var(--color-text-light);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.inputError {
  border-color: var(--color-error);
}

.inputError:focus {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
}

textarea.input {
  resize: vertical;
  min-height: 120px;
}

.errorText {
  font-size: var(--font-size-sm);
  color: var(--color-error);
  line-height: 1.4;
}

.errorMessage {
  padding: 12px 16px;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: var(--radius-md);
  color: #dc2626;
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

.successMessage {
  text-align: center;
  padding: 48px 24px;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: var(--radius-lg);
}

.successMessage h3 {
  font-size: var(--font-size-2xl);
  color: var(--color-secondary);
  margin-bottom: 12px;
  line-height: var(--line-height-heading);
}

.successMessage p {
  color: var(--color-text-muted);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}
```

---

## Sections — Hero.tsx (пример)

```tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  highlights?: string[];
}

export default function Hero({ title, subtitle, badge, highlights }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          {badge && (
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {badge}
            </motion.div>
          )}

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {highlights && highlights.length > 0 && (
            <motion.ul
              className={styles.highlights}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {highlights.map((item, i) => (
                <li key={i} className={styles.highlight}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          )}

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contacts" className={styles.ctaPrimary}>
              Получить консультацию
              <ArrowRight size={20} />
            </Link>
            <Link to="/services" className={styles.ctaSecondary}>
              Наши услуги
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

```css
/* Hero.module.css */
.hero {
  padding-top: calc(72px + 80px); /* высота header + отступ */
  padding-bottom: 80px;
  background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-primary-light) 100%);
  text-align: center;
}

@media (min-width: 1024px) {
  .hero {
    padding-top: calc(72px + 100px);
    padding-bottom: 100px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 800px;
  margin: 0 auto;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 600;
  line-height: 1.4;
}

.title {
  /* font-size задан в global.css через clamp */
  color: var(--color-text);
  /* line-height: var(--line-height-tight) задан в global.css */
}

.subtitle {
  font-size: clamp(var(--font-size-base), 2vw, var(--font-size-xl));
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
  max-width: 600px;
}

.highlights {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: stretch;
  max-width: 500px;
}

@media (min-width: 640px) {
  .highlights {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.highlight {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  line-height: 1.4;
}

.checkIcon {
  color: var(--color-secondary);
  flex-shrink: 0;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.ctaPrimary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  line-height: 1.25;
  transition: background-color var(--transition-base), transform var(--transition-fast), box-shadow var(--transition-base);
  white-space: nowrap;
}

.ctaPrimary:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.ctaSecondary {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  line-height: 1.25;
  transition: background-color var(--transition-base), color var(--transition-base);
  white-space: nowrap;
}

.ctaSecondary:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}
```

---

## Sections — Services.tsx (сетка карточек)

```css
/* Правило для grid карточек: всегда align-items: stretch */
.servicesGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap-cards-mobile);
  align-items: stretch; /* Карточки одной высоты */
}

@media (min-width: 640px) {
  .servicesGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .servicesGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-cards);
  }
}

/* Карточка услуги занимает всю высоту ячейки */
.serviceCard {
  display: flex;
  flex-direction: column;
  padding: var(--card-padding-mobile);
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  height: 100%; /* критично для равной высоты */
}

@media (min-width: 1024px) {
  .serviceCard {
    padding: var(--card-padding);
  }
}

.serviceCard:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

/* Отталкиваем кнопку/цену вниз */
.serviceCardBody {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.serviceCardPrice {
  margin-top: auto;
  padding-top: 20px;
}
```

---

## Layout — Footer.tsx

```css
/* Footer: тёмный фон, светлый текст */
.footer {
  background-color: var(--color-bg-dark);
  color: var(--color-text-light);
  padding: 60px 0 32px;
}

.footerGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
}

@media (min-width: 640px) {
  .footerGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footerGrid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footerTitle {
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-white);
  margin-bottom: 16px;
  line-height: 1.4;
}

.footerLink {
  display: block;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
  padding: 4px 0;
  transition: color var(--transition-fast);
}

.footerLink:hover {
  color: var(--color-white);
}

.footerBottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.5;
}
```

---

## LoadingSpinner (Suspense fallback)

```tsx
// src/components/UI/LoadingSpinner.tsx
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={styles.wrapper} role="status" aria-label="Загрузка">
      <div className={styles.spinner} />
    </div>
  );
}
```

```css
/* LoadingSpinner.module.css */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-primary-light);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```
