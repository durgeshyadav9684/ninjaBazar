import React from 'react';
import Image from 'next/image';
import styles from './TrendingCategories.module.css';

const CATEGORIES = [
  { id: '1', title: 'Electronics', image: '/TopCategoriesIcons/Electronics.png' },
  { id: '2', title: 'Apparel & Fashion', image: '/TopCategoriesIcons/apperealAndFashion.png' },
  { id: '3', title: 'Accessories', image: '/TopCategoriesIcons/Accessories.png' },
  { id: '4', title: 'Sports & Entertainment', image: '/TopCategoriesIcons/sportsAndEntertainments.png' },
];

const TrendingCategories = () => {
  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}>Trending Categories</h2>
      <div className={styles.grid}>
        {CATEGORIES.map((category) => (
          <div key={category.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <div className={styles.arcBackground}></div>
              <Image 
                src={category.image} 
                alt={category.title} 
                fill 
                className={styles.image} 
              />
            </div>
            <p className={styles.categoryTitle}>{category.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
