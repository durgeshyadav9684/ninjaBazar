import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import styles from './AuthLayout.module.css';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.leftPane}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <ShoppingBag size={24} strokeWidth={2.5} />
          </div>
          NINJA BAZAAR
        </Link>
        <div className={styles.imageContainer}>
          <Image
            src="/GiftCoins.png"
            alt="Ninja Bazaar Gift Coins"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>
      <div className={styles.rightPane}>
        {children}
      </div>
    </div>
  );
}
