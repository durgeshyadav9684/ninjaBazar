import React from 'react';
import Link from 'next/link';
// import { Facebook, Linkedin,Twitter } from 'lucide-react';
import styles from './Footer.module.css';
import ImageComponent from './ImageComponent';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            Ninja Bazaar
          </Link>
          <div className={styles.tagline}>
            Best Marketplace for Distributors
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <ImageComponent src={'/Facebook.png'} alt="Facebook" width={20} height={20} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <ImageComponent src={'/Linkin.png'} alt="LinkedIn" width={20} height={20} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <ImageComponent src={'/Twitter.png'} alt="Twitter" width={20} height={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className={styles.colTitle}>Get Support</h4>
          <ul className={styles.linkList}>
            <li><Link href="/support/chat" className={styles.linkItem}>Live Chat</Link></li>
            <li><Link href="/support/orders" className={styles.linkItem}>Order Status</Link></li>
            <li><Link href="/support/report" className={styles.linkItem}>Report Abuse</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.colTitle}>Payment & Protection</h4>
          <ul className={styles.linkList}>
            <li><Link href="/protection/money-back" className={styles.linkItem}>Money-back</Link></li>
            <li><Link href="/protection/shipping" className={styles.linkItem}>On-time shipping</Link></li>
            <li><Link href="/protection/payments" className={styles.linkItem}>Safe Payments</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.colTitle}>Get to know us</h4>
          <ul className={styles.linkList}>
            <li><Link href="/about" className={styles.linkItem}>About Us</Link></li>
            <li><Link href="/vendor" className={styles.linkItem}>Become a Vendor</Link></li>
            <li><Link href="/careers" className={styles.linkItem}>Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
        <Link href="/terms" className={styles.bottomLink}>Terms & Conditions</Link>
        <Link href="/conduct" className={styles.bottomLink}>Code of Conduct</Link>
      </div>
    </footer>
  );
};

export default Footer;
