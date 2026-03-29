import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import Hero from '../components/Sections/Hero';
import ContactForm from '../components/Forms/ContactForm';
import styles from './ContactsPage.module.css';

const contactInfo = [
  {
    icon: <Phone size={24} />,
    label: 'Телефон',
    value: '+7 (904) 108-15-36',
    href: 'tel:+79041081536',
  },
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'info@obraz-style.ru',
    href: 'mailto:info@obraz-style.ru',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Адрес',
    value: 'Республика Коми, г. Ухта',
    href: null,
  },
  {
    icon: <Clock size={24} />,
    label: 'Время работы',
    value: 'Пн–Сб: 9:00 – 20:00',
    href: null,
  },
];

export default function ContactsPage() {
  return (
    <>
      <Hero
        mini
        title="Контакты"
        subtitle="Свяжитесь с нами"
        image="https://images.unsplash.com/photo-1566206091558-7f218b696731?w=1920&q=80"
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Левая колонка — информация */}
            <motion.div
              className={styles.info}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-divider" />
              <h2 className={styles.infoTitle}>Давайте знакомиться</h2>
              <p className={styles.infoDesc}>
                Готовы к трансформации своего стиля? Напишите нам или позвоните —
                мы ответим в течение одного рабочего дня и расскажем, как начать.
              </p>

              <ul className={styles.contactList}>
                {contactInfo.map(item => (
                  <li key={item.label} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <div>
                      <span className={styles.contactLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.contactValue}>
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.contactValue}>{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Заглушка карты */}
              <div className={styles.mapStub}>
                <MapPin size={32} className={styles.mapIcon} />
                <p className={styles.mapText}>
                  Республика Коми, г. Ухта
                </p>
                <span className={styles.mapNote}>Карта будет добавлена</span>
              </div>
            </motion.div>

            {/* Правая колонка — форма */}
            <motion.div
              className={styles.formWrap}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Оставьте заявку</h3>
                <p className={styles.formSubtitle}>
                  Заполните форму и мы свяжемся с вами в течение часа
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
