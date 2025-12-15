// src/components/sections/CertificationsAchievements.jsx
import { motion } from "motion/react";
import styles from "./CertificationsAcheivements.module.css";
import { certifications, achievements } from "../../data/certifications";

export default function CertificationsAchievements() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Proof of work</p>
          <h2 className={styles.title}>
            Certifications <span className={styles.highlight}>& Achievements</span>
          </h2>
        </header>

        {/* ticket style certification strip */}
        <div className={styles.ticketRow}>
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              className={styles.ticket}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, rotate: -0.5, scale: 1.01 }}
            >
              <div className={styles.ticketLeft}>
                <p className={styles.ticketLabel}>Certificate</p>
                <h3 className={styles.ticketTitle}>{cert.title}</h3>
                <p className={styles.ticketIssuer}>{cert.issuer}</p>
              </div>

              <div className={styles.ticketRip} />

              <div className={styles.ticketRight}>
                <p className={styles.ticketYear}>{cert.year}</p>
                <p className={styles.ticketId}>{cert.id}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.ticketLink}
                >
                  View credential ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* badge style achievements */}
        <div className={styles.badgeRow}>
          {achievements.map((a, index) => (
            <motion.div
              key={a.title}
              className={styles.badgeCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
            >
              <div className={styles.badgeCircle}>
                <span className={styles.badgeYear}>{a.year}</span>
              </div>
              <div className={styles.badgeContent}>
                <h3 className={styles.badgeTitle}>{a.title}</h3>
                <p className={styles.badgeOrg}>{a.org}</p>
                <p className={styles.badgeNote}>{a.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
