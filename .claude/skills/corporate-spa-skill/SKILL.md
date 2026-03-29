---
name: corporate-spa
description: >
  Создаёт современный корпоративный SPA-сайт с нуля на стеке React 19+ / TypeScript 5.9+ / Vite 7+.
  Используй этот скилл всегда, когда пользователь просит создать корпоративный сайт, лендинг,
  бизнес-сайт, сайт-визитку, портфолио компании, веб-приложение с роутингом и анимациями,
  или когда упоминает React + Vite + TypeScript проект с несколькими страницами.
  Также триггерируй при словах: «сделай сайт», «создай SPA», «корпоративный сайт»,
  «лендинг на React», «сайт компании», «многостраничник на React».
---

# Corporate SPA Skill

Скилл для создания современных корпоративных SPA-сайтов. Полный цикл: от инициализации
проекта до готового production-ready кода.

## Технологический стек

- **React 19+** + **TypeScript 5.9+** — UI и типизация
- **Vite 7+** — сборка и dev-сервер
- **React Router DOM 7+** — клиентский роутинг
- **Framer Motion 12+** — анимации появления, скролл-анимации
- **React Hook Form 7+** + **Yup 1.7+** + **@hookform/resolvers** — формы и валидация
- **Lucide React** — иконки
- **EmailJS** — отправка форм (опционально)
- **CSS** — стилизация (без CSS-in-JS)

---

## Шаг 1 — Уточни требования

Перед тем как писать код, задай пользователю несколько вопросов (если они не указаны):

1. Какие страницы нужны? (по умолчанию: Home, Services, About, Portfolio, Contacts)
2. Есть ли брендинг? (название компании, цвета, логотип)
3. Нужна ли EmailJS интеграция? (сервис, шаблон, публичный ключ)
4. Какая тематика/отрасль компании?

Если пользователь говорит «делай по умолчанию» или уже всё указал — переходи к шагу 2.

---

## Шаг 2 — Инициализация проекта

Создай все файлы конфигурации. Читай `references/config-files.md` для готовых шаблонов
`package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`,
`eslint.config.js`.

**Структура проекта:**

```
project-root/
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Layout/       ← Header, Footer, Layout
│   │   ├── UI/           ← Button, Card, Input
│   │   ├── Sections/     ← Hero, Services, Advantages, AIRevolution, Reviews
│   │   └── Forms/        ← ContactForm
│   ├── pages/            ← Home, Services, About, Portfolio, Contacts
│   ├── data/             ← services.ts, portfolio.ts
│   ├── styles/
│   │   ├── variables.css
│   │   ├── global.css
│   │   └── animations.css
│   ├── utils/            ← emailService.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

---

## Шаг 3 — Стили (КРИТИЧЕСКИ ВАЖНО)

Читай `references/styles-guide.md` для CSS переменных, глобальных стилей и принципов верстки.

### Ключевые правила верстки — соблюдай строго:

**1. Межстрочный интервал и дыхание**
- `line-height` для параграфов: `1.7–1.8`
- `line-height` для заголовков: `1.2–1.3`
- Между секциями: `padding: 80px 0` на десктопе, `padding: 60px 0` на мобиле
- Между карточками и блоками: `gap: 32px` на десктопе, `gap: 24px` на мобиле
- Никогда не ставь `line-height: 1` или `line-height: 1.2` для основного текста

**2. Центрирование — строго и правильно**
- Центрирование текста: всегда `text-align: center` на родителе + убедись, что width не сломан
- Центрирование блоков: `margin: 0 auto` + фиксированный `max-width`
- Центрирование flex: `display: flex; align-items: center; justify-content: center`
- Центрирование grid: `display: grid; place-items: center`
- Никогда не смешивай `text-align: center` и `float`
- Для Hero-секции: весь контент через flex column + `align-items: center`

**3. Элементы не должны наезжать друг на друга**
- Всегда задавай `box-sizing: border-box` глобально
- Для текстовых блоков: `overflow: hidden` или `overflow-wrap: break-word`
- Карточки: фиксированный `min-height` или `align-items: stretch` в grid
- Изображения: `max-width: 100%; height: auto; display: block`
- Кнопки: `white-space: nowrap` если текст короткий, иначе `flex-wrap: wrap`

**4. Адаптивность (mobile-first)**
```css
/* Mobile первый */
.container { padding: 0 16px; }

/* Tablet */
@media (min-width: 768px) { .container { padding: 0 24px; } }

/* Desktop */
@media (min-width: 1024px) { .container { padding: 0 32px; max-width: 1200px; margin: 0 auto; } }
```

---

## Шаг 4 — App.tsx и роутинг

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Lazy loading для всех страниц
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contacts = lazy(() => import('./pages/Contacts'));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
```

---

## Шаг 5 — Компоненты

Читай `references/components-guide.md` для детальных примеров каждого компонента.

### Порядок создания компонентов:

1. **UI компоненты** (Button, Card, Input) — базовые кирпичи
2. **Layout** (Header, Footer, Layout) — обертка
3. **Sections** (Hero, Services, Advantages, AIRevolution, Reviews) — блоки страниц
4. **Forms** (ContactForm с React Hook Form + Yup)
5. **Pages** (собирают секции)

### Правила компонентов:

- Функциональные компоненты с хуками
- TypeScript интерфейсы для всех props
- Каждый компонент — свой CSS файл
- PascalCase для компонентов, camelCase для функций/переменных
- `export default` для компонентов, именованный export для утилит и типов
- Комментарии на русском языке для бизнес-логики

---

## Шаг 6 — Анимации с Framer Motion

```tsx
import { motion } from 'framer-motion';

// Появление при скролле
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Использование
<motion.div {...fadeInUp}>
  <h2>Заголовок секции</h2>
</motion.div>

// Stagger для карточек
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

<motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>{/* ... */}</motion.div>
  ))}
</motion.div>
```

---

## Шаг 7 — Форма с валидацией

```tsx
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Схема валидации
const schema = yup.object({
  name: yup.string().min(2, 'Минимум 2 символа').required('Имя обязательно'),
  phone: yup.string()
    .matches(/^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, 'Некорректный номер телефона')
    .required('Телефон обязателен'),
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  message: yup.string().optional(),
  service: yup.string().optional(),
});

type FormData = yup.InferType<typeof schema>;

// Состояния формы: 'idle' | 'submitting' | 'success' | 'error'
```

Контакты-страница НЕ использует iframe Яндекс.Карт. Вместо карты — блок с адресом,
телефоном, email и ссылкой «Открыть в Google Maps» (или просто текстовый адрес).

---

## Шаг 8 — Данные (src/data/)

```typescript
// services.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon?: string; // Lucide icon name
}

export const services: Service[] = [
  // Заполни релевантными услугами для тематики компании
];

// portfolio.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  year: number;
}

export const projects: Project[] = [
  // Заполни примерами проектов
];
```

---

## Шаг 9 — EmailJS утилита

```typescript
// src/utils/emailService.ts
import emailjs from '@emailjs/browser';

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
  service?: string;
}

// Отправка через EmailJS
export async function sendEmail(data: ContactFormData): Promise<boolean> {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_phone: data.phone,
        from_email: data.email,
        message: data.message ?? '',
        service: data.service ?? '',
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return true;
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    return false;
  }
}
```

Если EmailJS не нужен — реализуй заглушку, которая логирует данные в консоль и возвращает `true`.

---

## Шаг 10 — SEO файлы

**public/robots.txt:**
```
User-agent: *
Allow: /
Sitemap: https://example.com/sitemap.xml
```

**public/sitemap.xml:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc><priority>1.0</priority></url>
  <url><loc>https://example.com/services</loc><priority>0.8</priority></url>
  <url><loc>https://example.com/about</loc><priority>0.7</priority></url>
  <url><loc>https://example.com/portfolio</loc><priority>0.7</priority></url>
  <url><loc>https://example.com/contacts</loc><priority>0.6</priority></url>
</urlset>
```

---

## Шаг 11 — Финальная проверка

Перед тем как завершить работу, проверь:

- [ ] Все компоненты имеют TypeScript типы, нет `any`
- [ ] Все страницы подключены в роутинге через `React.lazy()`
- [ ] CSS переменные используются вместо хардкоженных цветов
- [ ] `line-height` текста ≥ 1.7, заголовков ≥ 1.2
- [ ] Центрирование через flexbox/grid, не через margin-trick
- [ ] Все карточки одной высоты в grid (используй `align-items: stretch`)
- [ ] Мобильное меню реализовано в Header
- [ ] Форма валидируется и показывает ошибки под полями
- [ ] Нет Яндекс.Карт, нет `<iframe>` с картами
- [ ] `box-sizing: border-box` задан глобально в `global.css`
- [ ] Изображения: `max-width: 100%; height: auto`
- [ ] `npm run build` проходит без ошибок TypeScript

---

## Справочные файлы

- `references/config-files.md` — готовые конфиги (package.json, vite, tsconfig, eslint)
- `references/styles-guide.md` — CSS переменные, глобальные стили, анимации
- `references/components-guide.md` — детальные примеры компонентов (Header, Footer, UI, Forms)

Читай их по мере необходимости, не загружай все сразу.
