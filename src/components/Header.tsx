import React from 'react';
import Link from 'next/link';
import { Search, MapPin, Grid, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logo}>
          Ninja Bazaar
        </Link>
        
        <div className={styles.location}>
          <MapPin size={18} className={styles.locationIcon} />
          <span>All Cities</span>
          <ChevronDown size={14} />
        </div>

        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search Event, Industry Or Location" 
            className={styles.searchInput}
          />
          <button className={styles.searchBtn} aria-label="Search">
            <Search size={16} />
          </button>
        </div>

        <div className={styles.actions}>
          <button className={styles.menuBtn} aria-label="Menu">
            <Grid size={24} />
          </button>
          <Link href="/login" className={styles.loginBtn}>
            Login/Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
