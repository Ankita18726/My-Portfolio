// src/components/sections/Skills.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Skills.module.css";
import { skillsRadial } from "../../data/skills";

export default function Skills() {
  const [open, setOpen] = useState(false);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Toolbox</p>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Skills Orbit</span>
          </h2>
          <p className={styles.subtitle}>
            Hover or tap the core circle to reveal all the technologies used most often.
          </p>
        </header>

        <div className={styles.orbitWrapper}>
          {/* main circle */}
          <motion.button
            className={styles.core}
            onClick={() => setOpen((v) => !v)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            whileHover={{ scale: 1.05 }}
          >
            <span className={styles.coreTop}>Skills</span>
            <span className={styles.coreBottom}>
              {open ? "Tap to hide" : "Tap / hover to reveal"}
            </span>
          </motion.button>

          {/* horizontal skills row */}
          <AnimatePresence>
            {open && (
              <motion.div
                className={styles.extraRow}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              >
                {skillsRadial.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    className={styles.skillPill}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{ scale: 1.06 }}
                  >
                    <span className={styles.skillLabel}>{skill.label}</span>
                    <span className={styles.skillGroup}>{skill.group}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
