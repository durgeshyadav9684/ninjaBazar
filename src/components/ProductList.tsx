import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import styles from './ProductList.module.css';

interface Product {
  id: string;
  title: string;
  price: string;
  minOrder: string;
}

interface ProductListProps {
  title: string;
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <Link href={`/category/${title.toLowerCase().replace(' ', '-')}`} className={styles.viewAll}>
          View all
        </Link>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <button className={styles.cartBtn} aria-label="Add to cart">
                <ShoppingCart size={16} />
              </button>
              {/* Placeholder for product image */}
              <span style={{ color: '#9ca3af' }}>Image</span>
            </div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.minOrder}>Min. Order - {product.minOrder}</div>
            <button className={`btn-primary ${styles.inquiryBtn}`}>
              Send Inquiry
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
