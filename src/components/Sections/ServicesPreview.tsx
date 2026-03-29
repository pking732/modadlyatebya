import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { services } from '../../data/services';
import styles from './ServicesPreview.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServicesPreview() {
  const preview = services.slice(0, 3);

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
          <h2>Наши услуги</h2>
          <p>
            Полный спектр услуг по созданию стиля — от персональной консультации до шопинга
            и разработки авторских дизайнерских решений.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {preview.map(service => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card hover className={styles.card}>
                <span className={styles.icon}>{service.icon}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.features}>
                  {service.features.slice(0, 3).map(f => (
                    <li key={f}>
                      <span className={styles.bullet} />
                      {f}
                    </li>
                  ))}
                </ul>
                {service.price && (
                  <p className={styles.price}>{service.price}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.more}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/services">
            <Button variant="outline" size="lg">
              Все услуги
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
