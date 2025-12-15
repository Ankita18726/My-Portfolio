// src/components/sections/Contact.jsx
import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_m6ozn09",   // from EmailJS dashboard
        "template_byecprf",  // your Contact Us template
        formRef.current,
        "QD03J9x_aPe9ZPO2g"    // EmailJS public key
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        {/* LEFT COPY */}
        <div>
          <motion.h2
            className={styles.leftTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let’s <span className={styles.leftHighlight}>Connect</span>
          </motion.h2>

          <p className={styles.leftSubtitle}>
            Open to internships, freelance work, and full‑time opportunities. Drop a message and
            let’s build something memorable.
          </p>

          <div className={styles.leftMeta}>
            <span>
              Email: <a href="mailto:you@example.com">agadre412@gmail.com</a>
            </span>
            <span>Location: Mumbai, India</span>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.formTitle}>Send a message</h3>
          <p className={styles.formSubtitle}>
            
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"              // must match EmailJS template variable
                placeholder="Your name"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"               // commonly used for user email in EmailJS
                placeholder="you@example.com"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>Message</label>
              <textarea
                rows="4"
                name="title"               // message variable in template
                placeholder="Write your message here"
                required
                className={styles.textarea}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: status === "sending" ? 1 : 1.03 }}
              disabled={status === "sending"}
              className={styles.button}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

            {status === "success" && (
              <p className={styles.successText}>Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className={styles.errorText}>Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
