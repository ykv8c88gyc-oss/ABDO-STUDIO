import { motion } from "framer-motion";

import {
  Code2,
  ShoppingBag,
  MonitorSmartphone,
  Palette,
  Server,
  Sparkles,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

import { Link } from "react-router-dom";

// =====================================
// SERVICES DATA
// =====================================

const services = [
  {
    number: "01",
    icon: <Code2 />,
    title: "WEB DEVELOPMENT",
    description:
      "Building modern, responsive and high-performance websites using modern web technologies.",
    tags: ["React", "JavaScript", "HTML & CSS"],
    features: [
      "Modern website architecture",
      "Fast loading performance",
      "Clean and maintainable code"
    ]
  },
  {
    number: "02",
    icon: <Palette />,
    title: "UI / UX DESIGN",
    description:
      "Creating clean, intuitive and visually engaging interfaces with attention to every detail.",
    tags: ["User Interface", "User Experience", "Prototyping"],
    features: [
      "Modern visual identity",
      "User-friendly interfaces",
      "Consistent design systems"
    ]
  },
  {
    number: "03",
    icon: <ShoppingBag />,
    title: "E-COMMERCE",
    description:
      "Developing online stores that make product discovery and shopping simple and enjoyable.",
    tags: ["Online Stores", "Product Pages", "Checkout"],
    features: [
      "Product management interfaces",
      "Shopping cart experience",
      "Checkout flow development"
    ]
  },
  {
    number: "04",
    icon: <Server />,
    title: "BACKEND DEVELOPMENT",
    description:
      "Creating reliable server-side systems, APIs and database solutions for web applications.",
    tags: ["Node.js", "Express", "MongoDB"],
    features: [
      "API development",
      "Database integration",
      "Server-side architecture"
    ]
  },
  {
    number: "05",
    icon: <MonitorSmartphone />,
    title: "RESPONSIVE DESIGN",
    description:
      "Making digital experiences look and work beautifully across desktop, tablet and mobile.",
    tags: ["Responsive Layouts", "Mobile First", "Optimization"],
    features: [
      "Mobile-friendly layouts",
      "Tablet and desktop support",
      "Cross-device consistency"
    ]
  },
  {
    number: "06",
    icon: <Sparkles />,
    title: "INTERACTIVE EXPERIENCES",
    description:
      "Adding meaningful animations and interactive elements that bring websites to life.",
    tags: ["Framer Motion", "Three.js", "Animation"],
    features: [
      "Smooth interface animations",
      "Interactive visual elements",
      "3D web experiences"
    ]
  }
];

// =====================================
// ANIMATION SETTINGS
// =====================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// =====================================
// SERVICES PAGE
// =====================================

export default function Services() {
  return (
    <main className="inner-page services-page">

      {/* PAGE INTRO */}

      <motion.div
        className="page-heading"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >

        <span>02 / WHAT WE DO</span>

        <h1>
          SERVICES THAT
          <br />
          <em>MAKE AN IMPACT.</em>
        </h1>

        <p>
          From the first idea to the final experience,
          we turn digital challenges into creative solutions.
        </p>

      </motion.div>

      {/* SERVICES GRID */}

      <section className="services-grid">

        {services.map((service, index) => (

          <motion.article
            className="service-card"
            key={service.number}

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
              delay: (index % 3) * 0.13,
              ease: [0.22, 1, 0.36, 1]
            }}
          >

            {/* CARD TOP */}

            <div className="service-card-top">

              <span className="service-number">
                {service.number}
              </span>

              <motion.div
                className="service-icon"
                whileHover={{
                  rotate: 8,
                  scale: 1.12
                }}
                transition={{
                  duration: 0.25
                }}
              >
                {service.icon}
              </motion.div>

              <ArrowUpRight className="service-arrow" />

            </div>

            {/* TITLE */}

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            {/* FEATURES */}

            <div className="service-features">

              {service.features.map((feature) => (

                <div key={feature}>

                  <CheckCircle2 size={15} />

                  <span>{feature}</span>

                </div>

              ))}

            </div>

            {/* TAGS */}

            <div className="service-tags">

              {service.tags.map((tag) => (

                <span key={tag}>
                  {tag}
                </span>

              ))}

            </div>

          </motion.article>

        ))}

      </section>

      {/* SERVICES CTA */}

      <motion.section
        className="services-cta"

        variants={reveal}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2
        }}
      >

        <span className="section-label">
          HAVE A PROJECT IN MIND?
        </span>

        <h2>
          LET'S CREATE
          <br />
          SOMETHING <em>GREAT.</em>
        </h2>

        <p>
          Have an idea? Let's turn it into something extraordinary.
        </p>

        <Link
          to="/contact"
          className="services-cta-link"
        >
          START A PROJECT <ArrowUpRight size={18} />
        </Link>

      </motion.section>

    </main>
  );
}