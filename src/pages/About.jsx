import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Rocket,
  Target,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

// =====================================
// SCROLL ANIMATION
// =====================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// =====================================
// CORE VALUES
// =====================================

const values = [
  {
    icon: <Code2 size={25} />,
    number: "01",
    title: "Clean Development",
    text: "Building modern, scalable and maintainable digital solutions."
  },
  {
    icon: <Layers3 size={25} />,
    number: "02",
    title: "Creative Thinking",
    text: "Combining creativity, technology and visual identity."
  },
  {
    icon: <Rocket size={25} />,
    number: "03",
    title: "Modern Technology",
    text: "Exploring modern tools to create better digital experiences."
  },
  {
    icon: <Target size={25} />,
    number: "04",
    title: "Attention to Detail",
    text: "Every detail matters when creating a memorable product."
  }
];

// =====================================
// ABOUT PAGE
// =====================================

export default function About() {
  return (
    <main className="inner-page about-page">

      {/* PAGE INTRO */}

      <motion.div
        className="page-heading"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        <span>
          <Sparkles size={13} /> 01 / ABOUT THE STUDIO
        </span>

        <h1>
          BEYOND THE
          <br />
          <em>ORDINARY.</em>
        </h1>

        <p>
          We believe every digital experience should have
          a purpose, personality and impact.
        </p>
      </motion.div>

      {/* STUDIO STORY */}

      <section className="about-story">

        {/* STUDIO ORB */}

        <motion.div
          className="about-orb"
          initial={{
            opacity: 0,
            scale: 0.75,
            rotate: -15
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }}
          viewport={{
            once: true,
            amount: 0.2
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="orb-inner">
            AS<span>.</span>
          </div>

          <div className="orb-ring"></div>
        </motion.div>

        {/* ABOUT CONTENT */}

        <motion.div
          className="about-content"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
        >
          <span className="section-label">
            OUR PHILOSOPHY
          </span>

          <h2>
            Technology meets <em>imagination.</em>
          </h2>

          <p>
            ABDO STUDIO is an independent digital development
            studio focused on modern web experiences,
            creative interfaces and interactive digital environments.
          </p>

          <p>
            Our goal is to transform ideas into thoughtful
            digital products through design, development
            and experimentation.
          </p>

          <div className="about-highlight">
            <span>OUR MISSION</span>

            <p>
              Turning ambitious ideas into meaningful
              digital experiences.
            </p>
          </div>

        </motion.div>

      </section>

      {/* CORE VALUES */}

      <section className="values-section">

        {/* SECTION HEADING */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2
          }}
        >
          <span className="section-label">
            WHAT DRIVES US
          </span>

          <h2>
            OUR CORE VALUES<span>.</span>
          </h2>
        </motion.div>

        {/* VALUES CARDS */}

        <div className="values-grid">

          {values.map((value, index) => (

            <motion.article
              className="value-card"
              key={value.title}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.96
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >

              <div className="value-icon">
                {value.icon}
              </div>

              <span className="value-number">
                {value.number}
              </span>

              <h3>{value.title}</h3>

              <p>{value.text}</p>

              <ArrowUpRight
                className="value-arrow"
                size={19}
              />

            </motion.article>

          ))}

        </div>

      </section>

    </main>
  );
}