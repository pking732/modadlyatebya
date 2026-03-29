# Руководство по стилям

## src/styles/variables.css

```css
:root {
  /* === Цвета === */
  --color-primary: #2563eb;          /* Основной синий */
  --color-primary-dark: #1d4ed8;     /* Тёмный вариант */
  --color-primary-light: #dbeafe;    /* Светлый фон */

  --color-secondary: #10b981;        /* Акцентный зелёный */
  --color-secondary-dark: #059669;

  --color-text: #111827;             /* Основной текст */
  --color-text-muted: #6b7280;       /* Вторичный текст */
  --color-text-light: #9ca3af;       /* Третичный текст */

  --color-bg: #ffffff;               /* Фон страницы */
  --color-bg-alt: #f9fafb;           /* Альтернативный фон секций */
  --color-bg-dark: #111827;          /* Тёмный фон (footer) */

  --color-border: #e5e7eb;           /* Цвет границ */
  --color-border-focus: #2563eb;     /* Цвет границы в фокусе */

  --color-white: #ffffff;
  --color-black: #000000;

  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;

  /* === Типографика === */
  --font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-family-heading: 'Inter', 'Segoe UI', system-ui, sans-serif;

  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */

  /* === Межстрочный интервал === */
  --line-height-tight: 1.25;  /* Только для больших заголовков */
  --line-height-heading: 1.3; /* Заголовки h2-h3 */
  --line-height-normal: 1.6;  /* Подзаголовки, кнопки */
  --line-height-relaxed: 1.75; /* Параграфы, описания */
  --line-height-loose: 1.9;   /* Длинные тексты */

  /* === Отступы === */
  --spacing-1: 0.25rem;   /* 4px */
  --spacing-2: 0.5rem;    /* 8px */
  --spacing-3: 0.75rem;   /* 12px */
  --spacing-4: 1rem;      /* 16px */
  --spacing-5: 1.25rem;   /* 20px */
  --spacing-6: 1.5rem;    /* 24px */
  --spacing-8: 2rem;      /* 32px */
  --spacing-10: 2.5rem;   /* 40px */
  --spacing-12: 3rem;     /* 48px */
  --spacing-16: 4rem;     /* 64px */
  --spacing-20: 5rem;     /* 80px */
  --spacing-24: 6rem;     /* 96px */

  /* === Секции === */
  --section-padding-y: 80px;
  --section-padding-y-mobile: 60px;
  --container-max-width: 1200px;
  --container-padding: 32px;
  --container-padding-mobile: 16px;
  --container-padding-tablet: 24px;

  /* === Карточки и gap === */
  --gap-cards: 32px;
  --gap-cards-mobile: 20px;
  --card-padding: 32px;
  --card-padding-mobile: 24px;
  --card-border-radius: 12px;

  /* === Скругления === */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* === Тени === */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.14);

  /* === Переходы === */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;

  /* === Z-индексы === */
  --z-header: 100;
  --z-dropdown: 200;
  --z-modal: 300;
  --z-tooltip: 400;

  /* === Breakpoints (для документации — в CSS используй media-queries напрямую) === */
  /* Mobile:  < 768px  */
  /* Tablet:  768px - 1023px */
  /* Desktop: >= 1024px */
}
```

---

## src/styles/global.css

```css
/* === Глобальный сброс === */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* === Базовые стили HTML === */
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* === Изображения === */
img,
video,
svg {
  max-width: 100%;
  height: auto;
  display: block;
}

/* === Ссылки === */
a {
  color: inherit;
  text-decoration: none;
}

/* === Кнопки === */
button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
  font-size: inherit;
}

/* === Списки === */
ul,
ol {
  list-style: none;
}

/* === Инпуты === */
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
}

/* === Типографика === */
h1 {
  font-size: clamp(var(--font-size-3xl), 5vw, var(--font-size-6xl));
  font-weight: 700;
  line-height: var(--line-height-tight);
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(var(--font-size-2xl), 3.5vw, var(--font-size-4xl));
  font-weight: 700;
  line-height: var(--line-height-heading);
  letter-spacing: -0.01em;
}

h3 {
  font-size: clamp(var(--font-size-xl), 2.5vw, var(--font-size-2xl));
  font-weight: 600;
  line-height: var(--line-height-heading);
}

h4, h5, h6 {
  font-weight: 600;
  line-height: var(--line-height-normal);
}

p {
  line-height: var(--line-height-relaxed);
  overflow-wrap: break-word;
  word-break: break-word;
}

/* === Контейнер === */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding-left: var(--container-padding-mobile);
  padding-right: var(--container-padding-mobile);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--container-padding-tablet);
    padding-right: var(--container-padding-tablet);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--container-padding);
    padding-right: var(--container-padding);
  }
}

/* === Секция === */
.section {
  padding: var(--section-padding-y-mobile) 0;
}

@media (min-width: 1024px) {
  .section {
    padding: var(--section-padding-y) 0;
  }
}

/* === Заголовок секции === */
.section-header {
  text-align: center;
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  margin-bottom: 16px;
}

.section-header p {
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height-relaxed);
}

/* === Утилиты === */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* === Скроллбар === */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg-alt); }
::-webkit-scrollbar-thumb { background: var(--color-border); border-radius: var(--radius-full); }
::-webkit-scrollbar-thumb:hover { background: var(--color-text-light); }
```

---

## src/styles/animations.css

```css
/* === Базовые анимации === */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* === Утилитарные классы анимаций === */
.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease forwards;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* === Loading Skeleton === */
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-alt) 25%,
    var(--color-border) 50%,
    var(--color-bg-alt) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

/* === Hover-эффекты для карточек === */
.card-hover {
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

/* === Уважение к настройкам анимации пользователя === */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
