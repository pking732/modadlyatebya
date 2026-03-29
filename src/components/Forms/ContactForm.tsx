import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import Button from '../UI/Button';
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().min(2, 'Минимум 2 символа').required('Введите ваше имя'),
  phone: yup
    .string()
    .matches(/^[\d\s\+\-\(\)]{7,}$/, 'Введите корректный номер')
    .required('Введите номер телефона'),
  email: yup.string().email('Некорректный email').required('Введите email'),
  service: yup.string().required('Выберите услугу'),
  message: yup.string().default(''),
});

const serviceOptions = [
  'Персональный имидж-консалтинг',
  'Аудит гардероба',
  'Шопинг-сопровождение',
  'Дизайнерские решения под заказ',
  'Продажа модных вещей',
  'Онлайн-консультация',
  'Другое',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    // Заглушка: имитация отправки
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className={styles.success}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle size={56} className={styles.successIcon} />
            <h3 className={styles.successTitle}>Заявка отправлена!</h3>
            <p className={styles.successText}>
              Спасибо! Мы свяжемся с вами в течение одного часа.
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={() => setSubmitted(false)}
            >
              Отправить ещё раз
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            noValidate
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">
                  Имя <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  className={[styles.input, errors.name ? styles.inputError : ''].join(' ')}
                  placeholder="Ваше имя"
                  {...register('name')}
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">
                  Телефон <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={[styles.input, errors.phone ? styles.inputError : ''].join(' ')}
                  placeholder="+7 (___) ___-__-__"
                  {...register('phone')}
                />
                {errors.phone && (
                  <span className={styles.error}>{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={[styles.input, errors.email ? styles.inputError : ''].join(' ')}
                  placeholder="your@email.ru"
                  {...register('email')}
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="service">
                  Услуга <span className={styles.required}>*</span>
                </label>
                <select
                  id="service"
                  className={[styles.input, styles.select, errors.service ? styles.inputError : ''].join(' ')}
                  {...register('service')}
                  defaultValue=""
                >
                  <option value="" disabled>Выберите услугу</option>
                  {serviceOptions.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <span className={styles.error}>{errors.service.message}</span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Сообщение
              </label>
              <textarea
                id="message"
                className={[styles.input, styles.textarea].join(' ')}
                placeholder="Расскажите немного о себе или задайте вопрос..."
                rows={4}
                {...register('message')}
              />
            </div>

            <div className={styles.stub}>
              <span>* Форма в режиме демонстрации — данные не отправляются</span>
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              fullWidth
              isLoading={isSubmitting}
            >
              <Send size={18} />
              Отправить заявку
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
