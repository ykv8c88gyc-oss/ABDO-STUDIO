import { motion } from "framer-motion";

import {
  Code2,
  Palette,
  Database,
  Layers,
  Box,
  Smartphone,
  ArrowUpRight,
  Check
} from "lucide-react";

// =====================================
// SKILLS DATA
// =====================================

const skillGroups = [
  {
    number: "01",
    icon: <Code2 />,
    title: "FRONTEND DEVELOPMENT",
    description: "Building responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    number: "02",
    icon: <Database />,
    title: "BACKEND DEVELOPMENT",
    description: "Working with server-side technologies and databases.",
    skills: ["Node.js", "Express.js", "MongoDB"]
  },
  {
    number: "03",
    icon: <Palette />,
    title: "DESIGN & EXPERIENCE",
    description: "Creating clean layouts and meaningful user experiences.",
    skills: ["UI Design", "UX Basics", "Responsive Design"]
  },
  {
    number: "04",
    icon: <Layers />,
    title: "TOOLS & WORKFLOW",
    description: "Using modern tools to organize and build projects.",
    skills: ["VS Code", "Git", "GitHub"]
  },
  {
    number: "05",
    icon: <Box />,
    title: "3D & INTERACTION",
    description: "Exploring interactive graphics and motion on the web.",
    skills: ["Three.js", "React Three Fiber", "Framer Motion"]
  },
  {
    number: "06",
    icon: <Smartphone />,
    title: "WEB OPTIMIZATION",
    description: "Building experiences that adapt to different screen sizes.",
    skills: ["Mobile First", "Performance", "Accessibility"]
  }
];

// =====================================
// ANIMATION SETTINGS
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
// SKILLS PAGE
// =====================================

export default function Skills() {
  return (
    <main className="inner-page skills-page">

      {/* PAGE INTRO */}

      <motion.div
        className="page-heading"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >

        <span>04 / MY EXPERTISE</span>

        <h1>
          CODE IS MY
          <br />
          <em>TOOLKIT.</em>
        </h1>

        <p>
          Technologies, tools and creative skills I use while
          exploring and building digital experiences.
        </p>

      </motion.div>

      {/* SKILLS INTRO */}

      <motion.section
        className="skills-intro"

        variants={reveal}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2
        }}
      >

        <div>

          <span className="section-label">
            MY APPROACH
          </span>

          <h2>
            ALWAYS LEARNING.
            <br />
            ALWAYS <em>BUILDING.</em>
          </h2>

        </div>

        <p>
          Technology never stands still. I believe in continuous
          learning, practical experimentation and improving
          with every project.
        </p>

      </motion.section>

      {/* SKILLS GRID */}

      <section className="skills-grid">

        {skillGroups.map((group, index) => (

          <motion.article
            className="skill-card"
            key={group.number}

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
              delay: (index % 3) * 0.13,
              ease: [0.22, 1, 0.36, 1]
            }}
          >

            {/* CARD TOP */}

            <div className="skill-card-top">

              <motion.div
                className="skill-card-icon"

                whileHover={{
                  scale: 1.15,
                  rotate: 8
                }}

                transition={{
                  duration: 0.3
                }}
              >
                {group.icon}
              </motion.div>

              <span className="skill-number">
                {group.number}
              </span>

            </div>

            {/* TITLE */}

            <h3>{group.title}</h3>

            <p>{group.description}</p>

            {/* SKILL TAGS */}

            <div className="skill-tags">

              {group.skills.map((skill) => (

                <span key={skill}>
                  <Check size={12} />
                  {skill}
                </span>

              ))}

            </div>

            <ArrowUpRight
              className="skill-card-arrow"
              size={20}
            />

          </motion.article>

        ))}

      </section>

      {/* SKILLS NOTE */}

      <motion.div
        className="skills-note"

        variants={reveal}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2
        }}
      >

        <span className="skills-note-dot"></span>

        MY JOURNEY IS STILL IN PROGRESS —
        THERE IS ALWAYS MORE TO EXPLORE.

      </motion.div>

    </main>
  );
}