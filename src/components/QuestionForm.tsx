"use client";

import React from 'react';
import Image from 'next/image';
import styles from './QuestionForm.module.css';

const QuestionForm = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.wrapper}>
        <div className={styles.leftPane}>
          <div className={styles.imageBackground}></div>
          <div className={styles.imageWrapper}>
            <Image
              src="/HaveAQuestionBanner.png"
              alt="Delivery Boy with Box"
              fill
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.rightPane}>
          <h2 className={styles.title}>Have a Question?</h2>
          <p className={styles.subtitle}>
            If you need help or have any questions, feel free to fill out this form. Our team will get back to you shortly.
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="q-name">Your Name *</label>
              <input type="text" id="q-name" placeholder="John Doe" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="q-phone">Phone Number *</label>
              <input type="tel" id="q-phone" placeholder="+1 (555) 000-0000" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="q-query">Query *</label>
              <textarea id="q-query" placeholder="Type your query here..." rows={4} required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuestionForm;
