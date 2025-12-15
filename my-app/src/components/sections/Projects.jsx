// src/components/sections/Projects.jsx
import { motion } from "motion/react";
import styles from "./Projects.module.css";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>Selected Work</p>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
        </div>

        <div className={styles.list}>
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                className={`${styles.project} ${isReversed ? styles.reverse : ""}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                {/* Image block */}
                <motion.div
                  className={styles.imageShell}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                >
                  <div className={styles.imageFrame}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.imageGlow} />
                </motion.div>

                {/* Text bubble overlay */}
                <motion.div
                  className={styles.content}
                  initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  <p className={styles.tag}>{project.tag}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.metaRow}>
                    <div className={styles.techRow}>
                      {project.tech.map((t) => (
                        <span key={t} className={styles.techChip}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.githubBtn}
                    >
                      <span>View on GitHub</span>
                      <span className={styles.githubIcon}>↗</span>
                    </a>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
