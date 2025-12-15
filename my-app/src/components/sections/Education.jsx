// src/components/sections/Education.jsx
import { motion } from "motion/react";
import styles from "./Education.module.css";
import { education } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Learning Journey</p>
          <h2 className={styles.title}> <span className={styles.highlight}>Education Timeline</span>
          </h2>
        </header>

        <div className={styles.timeline}>
          <div className={styles.line} />

          {education.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className={styles.dot} />
              <div className={styles.card}>
                <p className={styles.period}>{item.period}</p>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.school}>{item.school}</p>
                <p className={styles.detail}>{item.info}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
