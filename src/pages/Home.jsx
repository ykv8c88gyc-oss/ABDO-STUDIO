import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles
} from "lucide-react";

import { Link } from "react-router-dom";
import HeroScene from "../three/HeroScene";

// =====================================
// SCROLL REVEAL ANIMATION
// =====================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// =====================================
// HOME PAGE
// =====================================

export default function Home() {
  return (
    <main className="home-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={15} />
            <span>INDEPENDENT WEB DEVELOPMENT STUDIO</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            WE BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            EXPERIENCES<span className="purple-dot">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We transform ambitious ideas into extraordinary digital
            experiences through creative design and modern technology.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/projects" className="primary-btn">
              Explore Projects <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="secondary-btn">
              Let's Talk
            </Link>
          </motion.div>

          <div className="hero-bottom-info">
            <span>
              <Code2 size={16} />
              DESIGN × DEVELOPMENT
            </span>

            <span>
              CREATIVE DIGITAL EXPERIENCES — 2026
            </span>
          </div>

        </div>

        {/* 3D SCREEN - UNCHANGED */}

        <div className="hero-visual">
          <HeroScene />
          <div className="visual-caption">
            INTERACTIVE 3D EXPERIENCE
          </div>
        </div>

        <a href="#intro" className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={17} />
        </a>

      </section>

      {/* INTRO SECTION */}

      <motion.section
        className="intro-section"
        id="intro"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <div className="section-label">
          01 / WHAT WE DO
        </div>

        <h2>
          NOT JUST WEBSITES.
          <br />
          <span>WE CREATE EXPERIENCES.</span>
        </h2>

        <p>
          ABDO STUDIO is focused on building modern, memorable and
          high-performance digital experiences.
        </p>

        <Link to="/about" className="text-link">
          Discover Our Story <ArrowUpRight size={18} />
        </Link>

      </motion.section>

      {/* HOME SERVICES */}

      <motion.section
        className="home-services"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <div className="section-label">
          02 / OUR EXPERTISE
        </div>

        <h2>
          WHAT WE CREATE<span className="purple-dot">.</span>
        </h2>

        <div className="home-service-grid">

          {[
            ["01", "Web Development", "Modern websites built for performance."],
            ["02", "Creative Design", "Distinctive interfaces with strong identity."],
            ["03", "3D Experiences", "Interactive digital worlds and motion."],
          ].map(([number, title, description], index) => (

            <motion.div
              className="home-service-card"
              key={number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              <span>{number}</span>

              <h3>{title}</h3>

              <p>{description}</p>

              <ArrowUpRight />

            </motion.div>

          ))}

        </div>

        <Link to="/services" className="text-link">
          View All Services <ArrowUpRight size={18} />
        </Link>

      </motion.section>

      {/* CALL TO ACTION */}

      <motion.section
        className="home-cta"
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        <span>HAVE AN IDEA?</span>

        <h2>
          LET'S BUILD SOMETHING
          <br />
          EXTRAORDINARY.
        </h2>

        <Link to="/contact" className="primary-btn">
          Start a Project <ArrowUpRight size={18} />
        </Link>

      </motion.section>

    </main>
  );
}