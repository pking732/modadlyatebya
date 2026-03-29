import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../UI/Button';
import { portfolioItems } from '../../data/portfolio';
import styles from './PortfolioPreview.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 4);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider" />
          <h2>Наши работы</h2>
          <p>
            Каждый образ — это отдельная история. Смотрите, как мы трансформируем стиль
            наших клиентов.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {preview.map((item, i) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`${styles.gridItem} ${i === 0 ? styles.featured : ''}`}
            >
              <div className={styles.imageWrap}>
                <img src={item.image} alt={item.title} className={styles.image} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.more}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/portfolio">
            <Button variant="gold" size="lg">
              Смотреть все работы
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
