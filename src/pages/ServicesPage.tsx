import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Sections/Hero';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import CallToAction from '../components/Sections/CallToAction';
import { services } from '../data/services';
import styles from './ServicesPage.module.css';

const processSteps = [
  { num: '01', title: 'Знакомство', desc: 'Бесплатная 15-минутная беседа, чтобы понять ваши цели и пожелания.' },
  { num: '02', title: 'Анализ', desc: 'Изучаем ваш стиль жизни, предпочтения и текущий гардероб.' },
  { num: '03', title: 'Разработка', desc: 'Создаём индивидуальную концепцию образа специально для вас.' },
  { num: '04', title: 'Результат', desc: 'Вы получаете готовый образ и план по его развитию.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        mini
        title="Услуги"
        subtitle="Полный спектр услуг по стилю"
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
      />

      {/* Все услуги */}
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
            <h2>Что мы предлагаем</h2>
            <p>От персональной консультации до полного перевоплощения — каждая услуга разработана с заботой о вашем индивидуальном стиле.</p>
          </motion.div>

          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map(service => (
              <motion.div key={service.id} variants={itemVariants}>
                <Card hover className={styles.card}>
                  <span className={styles.icon}>{service.icon}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <ul className={styles.features}>
                    {service.features.map(f => (
                      <li key={f}>
                        <span className={styles.bullet} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {service.price && (
                    <div className={styles.priceRow}>
                      <span className={styles.price}>{service.price}</span>
                      <Link to="/contacts">
                        <Button variant="gold" size="sm">
                          Записаться
                        </Button>
                      </Link>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Процесс работы */}
      <section className={`section ${styles.processSec}`}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-divider" />
            <h2>Как мы работаем</h2>
            <p>Простой и понятный процесс от первого знакомства до готового образа.</p>
          </motion.div>

          <motion.div
            className={styles.process}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step) => (
              <motion.div key={step.num} variants={itemVariants} className={styles.step}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Стоимость — заглушка */}
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
            <h2>Стоимость</h2>
            <p>Индивидуальный расчёт стоимости после первичной консультации.</p>
          </motion.div>

          <motion.div
            className={styles.pricingStub}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.pricingContent}>
              <p className={styles.pricingText}>
                Стоимость услуг рассчитывается индивидуально и зависит от сложности задачи,
                объёма работы и выбранного формата. Свяжитесь с нами для получения
                персонального предложения.
              </p>
              <Link to="/contacts">
                <Button variant="gold" size="lg">
                  Узнать стоимость
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
