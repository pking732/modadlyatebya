import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gold?: boolean;
}

export default function Card({ children, className = '', hover = false, gold = false }: CardProps) {
  return (
    <div
      className={[
        styles.card,
        hover ? styles.hover : '',
        gold ? styles.gold : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
