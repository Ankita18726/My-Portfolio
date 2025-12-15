// src/components/layout/Navbar.jsx
import { motion } from "motion/react";
import styles from "./Navbar.module.css";

const sections = ["home", "projects", "experience", "skills", "education", "certificate"];

export default function Navbar() {
  return (
    <motion.header
      className={styles.navRoot}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
    >
      <div className={`${styles.navInner} ${styles.navBlur}`}>
        <div className={styles.logo}>
          <div className={styles.logoBadge}>MY</div>
          <span className={styles.logoText}>Portfolio</span>
        </div>

        <nav className={styles.links}>
          {sections.map((id) => (
            <button
              key={id}
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
              }
              className={styles.link}
            >
              {id}
            </button>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>
          Let’s talk
        </a>
      </div>
    </motion.header>
  );
}
