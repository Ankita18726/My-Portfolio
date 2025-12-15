// src/components/sections/About.jsx
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>
      <motion.p
        className="max-w-2xl text-slate-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Self‑taught front‑end engineer passionate about crafting expressive, animated interfaces that
        feel alive. Inspired by bold typography and playful motion, always experimenting with new
        interactions and visual styles.
      </motion.p>
    </section>
  );
}
