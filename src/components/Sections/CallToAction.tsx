import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '../UI/Button';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&q=80)',
      }}
    >
      <div className={styles.overlay} />
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className={styles.eyebrow}>Готовы к переменам?</p>
          <h2 className={styles.title}>
            Начните свою историю стиля сегодня
          </h2>
          <p className={styles.desc}>
            Запишитесь на бесплатную 15-минутную вводную консультацию и узнайте,
            как мы можем помочь именно вам.
          </p>
          <div className={styles.actions}>
            <Link to="/contacts">
              <Button variant="gold" size="lg">
                Записаться на консультацию
                <ArrowRight size={18} />
              </Button>
            </Link>
            <a href="tel:+79041081536">
              <Button variant="outline" size="lg" className={styles.phoneBtn}>
                <Phone size={18} />
                +7 (904) 108-15-36
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
