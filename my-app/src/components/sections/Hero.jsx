// src/components/sections/Hero.jsx
import { motion } from "motion/react";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import photo from "../assets/ankita.JPG"

export default function Hero() {
  return (
    <section id="home" className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT CONTENT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        >
          <p className={styles.intro}>Currently Studying</p>

          <h1 className={styles.title}>
            <span className={styles.titleTop}>Computer Engineering</span>
            <span className={styles.titleBottom}>Ankita Gadre</span>
          </h1>

          <p className={styles.subtitle}>
            I am a Computer Engineering student at DBIT with strong skills in
full-stack development, game design, and problem-solving.
Passionate about building impactful applications and contributing
to innovative tech projects. 
          </p>

          <div className={styles.actions}>
            <motion.a
              href="#projects"
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05 }}
            >
              My Project
            </motion.a>

            <motion.a
              href="#experience"
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
            >
              Work Experience
            </motion.a>
          </div>

          {/* <div className={styles.clientStrip}>
            <div className={styles.avatars}>
              <span className={styles.avatar} />
              <span className={styles.avatar} />
              <span className={styles.avatar} />
              <span className={styles.avatarMore}>+4</span>
            </div>
            <div className={styles.clientText}>
              <span className={styles.clientNumber}>10+</span>
              <span className={styles.clientLabel}>Projects shipped</span>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT IMAGE / GLOW */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.1 }}
        >
          <div className={styles.portraitShell}>
            <div className={styles.portraitGlow} />

            {/* Replace src with your own photo in /public */}
            <img
              src={photo}
              alt="Your portrait"
              className={styles.portraitImg}
            />
          </div>

          <ul className={styles.socialColumn}>
  <li>
    <a href="https://github.com/Ankita18726" aria-label="GitHub" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/ankita-gadre-688508331/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
      <FaLinkedinIn />
    </a>
  </li>
  <li>
    <a href="https://leetcode.com/u/ankita_128/" aria-label="LeetCode" target="_blank" rel="noreferrer">
      <SiLeetcode />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>
  </li>
</ul>

        </motion.div>
      </div>

      {/* STATS BAR */}
      <motion.div
        className={styles.statsBar}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.stat}>
          <span className={styles.statValue}>10+</span>
          <span className={styles.statLabel}>Skills</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>7</span>
          <span className={styles.statLabel}>Projects completed</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>5</span>
          <span className={styles.statLabel}>Awards & recognitions</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>3</span>
          <span className={styles.statLabel}>Hackthons participation</span>
        </div>
      </motion.div>
    </section>
  );
}
