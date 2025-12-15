// src/components/sections/Experience.jsx
import { motion } from "motion/react";
import styles from "./Experience.module.css";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Career Path</p>
          <h2 className={styles.title}>
            Work <span className={styles.highlight}>Experience</span>
          </h2>
        </header>

        <div className={styles.row}>
          {experience.map((job, index) => (
            <motion.article
              key={job.company + job.role}
              className={`${styles.card} ${
                index % 2 === 1 ? styles.cardRaised : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={styles.badgeRow}>
                <span className={styles.badge}>{job.period}</span>
                <span className={styles.location}>{job.location}</span>
              </div>
              <h3 className={styles.role}>{job.role}</h3>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.summary}>{job.summary}</p>

              <div className={styles.techRow}>
                {job.tech.map((t) => (
                  <span key={t} className={styles.techChip}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
