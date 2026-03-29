export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Деловой образ',
    category: 'Корпоративный стиль',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4e84?w=600&q=80',
    description: 'Строгий и элегантный деловой образ для топ-менеджера',
  },
  {
    id: '2',
    title: 'Вечерний образ',
    category: 'Праздничный стиль',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
    description: 'Роскошный вечерний выход — от классики до авангарда',
  },
  {
    id: '3',
    title: 'Casual-look',
    category: 'Повседневный стиль',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
    description: 'Стильный casual — как выглядеть идеально каждый день',
  },
  {
    id: '4',
    title: 'Фотосессия',
    category: 'Образ для фото',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    description: 'Образ для профессиональной фотосессии — каждая деталь продумана',
  },
  {
    id: '5',
    title: 'Сезонный капсульный гардероб',
    category: 'Гардероб',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    description: 'Осенняя капсула — 20 вещей, 40 образов',
  },
  {
    id: '6',
    title: 'Трансформация образа',
    category: 'Имидж-консалтинг',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80',
    description: 'Полная трансформация: до и после работы со стилистом',
  },
  {
    id: '7',
    title: 'Авторский образ',
    category: 'Авторский стиль',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    description: 'Уникальный авторский образ с нестандартными решениями',
  },
  {
    id: '8',
    title: 'Романтичный образ',
    category: 'Романтика',
    image: 'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80',
    description: 'Нежный романтичный образ для особенного свидания',
  },
];

export const categories = ['Все', ...new Set(portfolioItems.map(i => i.category))];
