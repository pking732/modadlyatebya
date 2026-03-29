import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Sections/Hero';
import CallToAction from '../components/Sections/CallToAction';
import { portfolioItems, categories } from '../data/portfolio';
import styles from './PortfolioPage.module.css';

export default function PortfolioPage() {
  const [active, setActive] = useState('Все');

  const filtered = active === 'Все'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === active);

  return (
    <>
      <Hero
        mini
        title="Портфолио"
        subtitle="Наши лучшие работы"
        image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-divider" />
            <h2>Галерея работ</h2>
            <p>
              Каждый образ создаётся с уникальным подходом. Посмотрите, как мы меняем жизни
              наших клиентов через стиль.
            </p>
          </motion.div>

          {/* Фильтры */}
          <motion.div
            className={styles.filters}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                className={[styles.filter, active === cat ? styles.filterActive : ''].join(' ')}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Сетка */}
          <motion.div className={styles.grid} layout>
            <AnimatePresence>
              {filtered.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.45 }}
                  className={styles.item}
                >
                  <div className={styles.imageWrap}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                      loading="lazy"
                    />
                    <div className={styles.overlay}>
                      <span className={styles.category}>{item.category}</span>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <p className={styles.itemDesc}>{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
