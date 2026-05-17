import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';
import ImageComponent from './ImageComponent';

const CATEGORIES = [
  { name: 'Home & Garden', image: '/TopCategoriesIcons/homeAndGarden.png' },
  { name: 'Electronics', image: '/TopCategoriesIcons/Electronics.png' },
  { name: 'Apparel & Fashion', image: '/TopCategoriesIcons/apperealAndFashion.png' },
  { name: 'Accessories', image: '/TopCategoriesIcons/Accessories.png' },
  { name: 'Sports & Entertainment', image: '/TopCategoriesIcons/sportsAndEntertainments.png' },
  { name: 'Mother & Kids', image: '/TopCategoriesIcons/MotherAndKids.png' },
  { name: 'Beauty & Health', image: '/TopCategoriesIcons/beautyandKids.png' },
  { name: 'Toys & Games', image: '/TopCategoriesIcons/ToyAndKids.png' },
  { name: 'Automobiles', image: '/TopCategoriesIcons/AutoMobiles.png' },
];

const Hero = () => {
  return (
    <section className={`container ${styles.heroSection}`}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Top Categories</h2>
        <ul className={styles.categoryList}>
          {CATEGORIES.map((category) => (
            <li key={category.name} className={styles.categoryItem}>
              <div className={styles.categoryName}>
                <ImageComponent src={category.image} alt={category.name} width={24} height={24} />
                <span>{category.name}</span>
              </div>
              <ChevronRight size={16} />
            </li>
          ))}
        </ul>
        <Link href="/categories" className={styles.viewAll}>
          View all Categories
        </Link>
      </aside>

      <div className={styles.mainContent}>
        <div className={styles.mainBanner}>
          <h1 className={styles.bannerTitle}>
            Buy & Sell Products
          </h1>
          <h1 className={styles.bannerTitle}>
            Across <span className={styles.bannerTitleBreak}>India</span>
          </h1>
          <p className={styles.bannerSubtitle}>
            Connect with verified suppliers & distributors instantly.
          </p>
          <button className={styles.buyBtn}>Buy Product</button>
          <ImageComponent src="/GiftCoins.png" alt="Banner" width={410} height={273} className={styles.bannerImage} />
        </div>

        <div className={styles.promoGrid}>
          <div className={`${styles.promoCard} ${styles.promo1}`}>
            <div className={styles.promoIcon}>
              <ImageComponent src="/RequestforQuotation.png" alt="Request for Quotation" width={100} height={95} />
            </div>
            <h3>Request for Quotation</h3>
            <span>Get multiple quotes quickly</span>
          </div>
          <div className={`${styles.promoCard} ${styles.promo2}`}>
            <div className={styles.promoIcon}>
              <ImageComponent src="/SellYourProducts.png" alt="Sell Your Products" width={110} height={95} />
            </div>
            <h3>Sell Your Products</h3>
            <span>Reach buyers nationwide</span>
          </div>
          <div className={`${styles.promoCard} ${styles.promo3}`}>
            <div className={styles.promoIcon}>
              <ImageComponent src="/GrowYourBusiness.png" alt="Grow Your Business" width={93} height={93} />
            </div>
            <h3>Grow Your Business</h3>
            <span>Expand your network today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
