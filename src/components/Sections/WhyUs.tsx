import { motion } from 'framer-motion';
import { Award, Heart, Zap, Users } from 'lucide-react';
import styles from './WhyUs.module.css';

const advantages = [
  {
    icon: <Award size={32} />,
    title: 'Профессиональный подход',
    description:
      'Опыт работы более 5 лет. Знаем всё о трендах, колористике и силуэтах. Каждое решение основано на глубоких знаниях.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Индивидуальность',
    description:
      'Никаких шаблонов. Мы создаём образы, которые отражают вашу уникальную личность и соответствуют вашему образу жизни.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Быстрый результат',
    description:
      'Уже после первой консультации вы получаете конкретный план действий и чёткое понимание своего стиля.',
  },
  {
    icon: <Users size={32} />,
    title: 'Поддержка после',
    description:
      'Мы не исчезаем после консультации. Поддерживаем клиентов, отвечаем на вопросы и помогаем в сложных ситуациях.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function WhyUs() {
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
          <h2>Почему выбирают нас</h2>
          <p>
            Мы вкладываем душу в каждую работу и строим долгосрочные отношения с клиентами,
            основанные на доверии и результате.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {advantages.map((item, i) => (
            <motion.div key={i} variants={itemVariants} className={styles.item}>
              <div className={styles.iconWrap}>
                {item.icon}
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
