import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, FileText, Hash } from 'lucide-react';
import Hero from '../components/Sections/Hero';
import CallToAction from '../components/Sections/CallToAction';
import styles from './AboutPage.module.css';

const values = [
  {
    icon: '✦',
    title: 'Индивидуальность',
    desc: 'Каждый образ создаётся исключительно под конкретного человека. Никаких шаблонов — только ваш уникальный стиль.',
  },
  {
    icon: '◆',
    title: 'Качество',
    desc: 'Мы рекомендуем только проверенные бренды и вещи, которые прослужат долго и сохранят вид.',
  },
  {
    icon: '◇',
    title: 'Честность',
    desc: 'Говорим правду о том, что вам идёт, а что нет. Наша задача — ваш лучший образ, а не просто продажа.',
  },
  {
    icon: '✧',
    title: 'Результат',
    desc: 'Работа считается завершённой только тогда, когда клиент доволен и чувствует себя уверенно.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        mini
        title="О нас"
        subtitle="Наша история и ценности"
        image="https://images.unsplash.com/photo-1551803091-e20673f15770?w=1920&q=80"
      />

      {/* Основной блок "О студии" */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <motion.div
              className={styles.aboutImage}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4b4e84?w=800&q=80"
                alt="Студия ОБРАЗ"
                className={styles.image}
              />
              <div className={styles.imageBadge}>
                <span className={styles.badgeNum}>5+</span>
                <span className={styles.badgeLabel}>лет в индустрии</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.aboutText}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="section-divider" />
              <h2>Студия «ОБРАЗ»</h2>
              <p>
                Мы — студия индивидуального стиля, которая помогает людям раскрыть свою
                уникальность через моду и дизайн. Наша миссия — не просто одеть человека,
                а создать образ, который говорит о нём больше, чем любые слова.
              </p>
              <p>
                Студия основана в Ухте, Республика Коми. Мы работаем с клиентами со всей
                России — как очно, так и онлайн. За годы работы мы помогли более 200
                клиентам обрести свой стиль и уверенность в себе.
              </p>
              <p>
                Каждый образ — это история. Наша задача — рассказать вашу историю
                максимально красиво.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ценности */}
      <section className={`section ${styles.valuesSec}`}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-divider" />
            <h2>Наши ценности</h2>
            <p>Принципы, которым мы следуем в каждом проекте.</p>
          </motion.div>

          <motion.div
            className={styles.valuesGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map(v => (
              <motion.div key={v.title} variants={itemVariants} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Контакты и реквизиты */}
      <section className={`section ${styles.contactsSec}`}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-divider" />
            <h2>Контакты и реквизиты</h2>
          </motion.div>

          <motion.div
            className={styles.contactsGrid}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Контакты */}
            <div className={styles.contactCard}>
              <h3 className={styles.contactCardTitle}>Как с нами связаться</h3>
              <ul className={styles.contactList}>
                <li>
                  <Phone size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Телефон</span>
                    <a href="tel:+79041081536" className={styles.contactValue}>
                      +7 (904) 108-15-36
                    </a>
                  </div>
                </li>
                <li>
                  <Mail size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <a href="mailto:info@obraz-style.ru" className={styles.contactValue}>
                      info@obraz-style.ru
                    </a>
                  </div>
                </li>
                <li>
                  <MapPin size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Адрес</span>
                    <span className={styles.contactValue}>
                      Республика Коми, г. Ухта
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Реквизиты */}
            <div className={styles.legalCard}>
              <h3 className={styles.contactCardTitle}>Юридические реквизиты</h3>
              <ul className={styles.legalList}>
                <li>
                  <FileText size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Наименование</span>
                    <span className={styles.contactValue}>
                      ИП Федоткина Маргарита Олеговна
                    </span>
                  </div>
                </li>
                <li>
                  <Hash size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>ОГРНИП</span>
                    <span className={styles.contactValue}>326110000007156</span>
                  </div>
                </li>
                <li>
                  <Hash size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>ИНН</span>
                    <span className={styles.contactValue}>110209645627</span>
                  </div>
                </li>
                <li>
                  <MapPin size={20} className={styles.contactIcon} />
                  <div>
                    <span className={styles.contactLabel}>Юридический адрес</span>
                    <span className={styles.contactValue}>
                      Республика Коми, г. Ухта
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
