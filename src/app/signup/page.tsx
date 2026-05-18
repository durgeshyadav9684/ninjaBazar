"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Lock, Eye, EyeOff, User } from 'lucide-react';
import AuthLayout from '@/components/AuthLayout';
import styles from '@/components/AuthForm.module.css';

export default function SignupPage() {
  const [authMethod, setAuthMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Create an account</h1>
          <p className={styles.subtitle}>Join Ninja Bazaar today</p>
        </div>

        <div className={styles.toggleContainer}>
          <button
            className={`${styles.toggleBtn} ${authMethod === 'email' ? styles.active : ''}`}
            onClick={() => setAuthMethod('email')}
            type="button"
          >
            Email
          </button>
          <button
            className={`${styles.toggleBtn} ${authMethod === 'phone' ? styles.active : ''}`}
            onClick={() => setAuthMethod('phone')}
            type="button"
          >
            Mobile Number
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Full Name</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={20} />
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className={styles.input}
                required
              />
            </div>
          </div>

          {authMethod === 'email' ? (
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} size={20} />
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          ) : (
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phone">Mobile Number</label>
              <div className={styles.inputWrapper}>
                <Phone className={styles.inputIcon} size={20} />
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          )}

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Password</label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={20} />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className={styles.input}
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} style={{ marginTop: '1.5rem' }}>
            Sign Up
          </button>
        </form>

        <div className={styles.divider}>or register with</div>

        <div className={styles.socialAuth}>
          <button type="button" className={styles.socialBtn}>
            <Image src="/globe.svg" alt="Google" width={20} height={20} />
            Google
          </button>
          <button type="button" className={styles.socialBtn}>
            <Image src="/Facebook.png" alt="Facebook" width={20} height={20} />
            Facebook
          </button>
        </div>

        <div className={styles.footer}>
          Already have an account?{' '}
          <Link href="/login" className={styles.link}>
            Log in here
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
