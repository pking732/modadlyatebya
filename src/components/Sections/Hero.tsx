import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../UI/Button';
import styles from './Hero.module.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  showCta?: boolean;
  mini?: boolean;
}

export default function Hero({
  title = 'ОБРАЗ',
  subtitle = 'Студия индивидуального стиля',
  description = 'Создаём дизайнерские решения под заказ, подбираем неповторимые образы и предлагаем модные вещи для тех, кто ценит стиль и качество.',
  image = 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=85',
  showCta = true,
  mini = false,
}: HeroProps) {
  if (mini) {
    return (
      <section
        className={styles.miniHero}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.overlay} />
        <div className="container">
          <motion.div
            className={styles.miniContent}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className={styles.miniTitle}>{title}</h1>
            {subtitle && <p className={styles.miniSubtitle}>{subtitle}</p>}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles size={14} />
          <span>Студия стиля в Ухте</span>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {title}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {subtitle}
        </motion.p>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {description}
        </motion.p>

        {showCta && (
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <Link to="/contacts">
              <Button variant="gold" size="lg">
                Записаться на консультацию
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className={styles.outlineWhite}>
                Смотреть работы
              </Button>
            </Link>
          </motion.div>
        )}

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className={styles.stat}>
            <span className={styles.statNum}>200+</span>
            <span className={styles.statLabel}>довольных клиентов</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>лет опыта</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>индивидуальный подход</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <motion.div
          className={styles.scrollLine}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </div>
    </section>
  );
}
