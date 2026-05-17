import React from 'react';
import Link from 'next/link';
import styles from './BestDeals.module.css';
import ImageComponent from './ImageComponent';

const DEALS = [
  {
    id: 1,
    category: 'Small Appliances',
    discount: 'Up to 40% off',
    styleClass: styles.card1,
    image: '/TopCategoriesIcons/homeAndGarden.png',
  },
  {
    id: 2,
    category: 'Premium Beauty',
    discount: 'Flat 25% off',
    styleClass: styles.card2,
    image: '/TopCategoriesIcons/beautyandKids.png',
  },
  {
    id: 3,
    category: 'Indoor Furniture',
    discount: 'Save up to 30% today',
    styleClass: styles.card3,
    image: '/TopCategoriesIcons/Accessories.png',
  },
  {
    id: 4,
    category: 'Gadget & Device',
    discount: 'Upto 15k off on Tablets',
    styleClass: styles.card4,
    image: '/TopCategoriesIcons/Electronics.png',
  },
];

const BestDeals = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Today's Best Deals</h2>
        <Link href="/deals" className={styles.viewAll}>
          View all
        </Link>
      </div>

      <div className={styles.grid}>
        {DEALS.map((deal) => (
          <div key={deal.id} className={`${styles.dealCard} ${deal.styleClass}`}>
            <div className={styles.dealInfo}>
              <h3 className={styles.dealCategory}>{deal.category}</h3>
              <p className={styles.dealDiscount}>{deal.discount}</p>
            </div>
            <div className={styles.dealImage}>
              {/* <ImageComponent 
                src={deal.image} 
                alt={deal.category} 
                width={150} 
                height={150} 
                className={styles.imageIcon} 
              /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
