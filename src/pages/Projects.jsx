import { motion } from "framer-motion";

import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
  Sparkles
} from "lucide-react";

import { Link } from "react-router-dom";

// =====================================
// PROJECTS DATA
// =====================================

const projects = [
  {
    slug: "digital-store",
    number: "01",
    category: "E-COMMERCE",
    title: "DIGITAL STORE",
    description:
      "A modern shopping experience focused on product presentation and smooth navigation.",
    technologies: ["React", "JavaScript", "CSS"],
    style: "project-visual-one",
    label: "COMMERCE",
    icon: <Layers3 size={55} strokeWidth={1} />
  },
  {
    slug: "creative-space",
    number: "02",
    category: "CREATIVE PORTFOLIO",
    title: "CREATIVE SPACE",
    description:
      "A creative digital portfolio concept with bold typography and a minimal visual identity.",
    technologies: ["React", "Framer Motion", "CSS"],
    style: "project-visual-two",
    label: "CREATIVE",
    icon: <Sparkles size={55} strokeWidth={1} />
  },
  {
    slug: "beyond-space",
    number: "03",
    category: "3D EXPERIENCE",
    title: "BEYOND SPACE",
    description:
      "An experimental web experience exploring interactive elements and 3D visuals.",
    technologies: ["Three.js", "React", "WebGL"],
    style: "project-visual-three",
    label: "EXPERIMENTAL",
    icon: <Code2 size={55} strokeWidth={1} />
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
// PROJECTS PAGE
// =====================================

export default function Projects() {
  return (
    <main className="inner-page projects-page">

      {/* PAGE INTRO */}

      <motion.div
        className="page-heading"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        <span>03 / SELECTED WORK</span>

        <h1>
          IDEAS INTO
          <br />
          <em>REALITY.</em>
        </h1>

        <p>
          A collection of digital concepts and projects exploring
          design, technology and creative development.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}

      <section className="projects-grid">

        {projects.map((project, index) => (

          <motion.article
            className="project-card"
            key={project.slug}

            initial={{
              opacity: 0,
              y: 50,
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

            whileHover={{
              y: -8,
              transition: {
                duration: 0.3
              }
            }}
          >

            {/* PROJECT VISUAL */}

            <div className={`project-visual ${project.style}`}>

              <div className="project-visual-top">
                <span>ABDO STUDIO</span>
                <span>PROJECT / {project.number}</span>
              </div>

              <span className="project-visual-label">
                {project.label}
              </span>

              <motion.div
                className="project-visual-center"

                whileHover={{
                  scale: 1.15,
                  rotate: 8
                }}

                transition={{
                  duration: 0.35,
                  ease: "easeOut"
                }}
              >
                {project.icon}
              </motion.div>

              <span className="project-visual-number">
                / {project.number}
              </span>

              <div className="project-visual-bottom">
                DIGITAL DESIGN — 2026
              </div>

            </div>

            {/* PROJECT INFORMATION */}

            <div className="project-info">

              <div className="project-category">
                {project.category}
                <span>{project.number}</span>
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              {/* TECHNOLOGIES */}

              <div className="project-technologies">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

              {/* PROJECT LINK */}

              <Link
                to={`/projects/${project.slug}`}
                className="project-link"
              >
                <span>EXPLORE PROJECT</span>
                <ArrowUpRight size={20} />
              </Link>

            </div>

          </motion.article>

        ))}

      </section>

      {/* BOTTOM CTA */}

      <motion.section
        className="projects-bottom"

        variants={reveal}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2
        }}
      >

        <span>HAVE AN IDEA?</span>

        <h2>
          YOUR PROJECT
          <br />
          COULD BE <em>NEXT.</em>
        </h2>

        <p>
          Let's turn your next big idea into a digital experience.
        </p>

        <Link to="/contact">
          LET'S TALK <ExternalLink size={17} />
        </Link>

      </motion.section>

    </main>
  );
}