import { motion } from "framer-motion";

import {
  Mail,
  Code2,
  Briefcase,
  Camera,
  ArrowUpRight,
  Send,
  MessageCircle
} from "lucide-react";

// =====================================
// CONTACT METHODS
// =====================================

const contactMethods = [
  {
    icon: <Mail />,
    title: "EMAIL",
    value: "hello@yourdomain.com",
    link: "mailto:hello@yourdomain.com"
  },
  {
    icon: <Code2 />,
    title: "GITHUB",
    value: "Your GitHub Profile",
    link: "https://github.com/"
  },
  {
    icon: <Briefcase />,
    title: "LINKEDIN",
    value: "Your LinkedIn Profile",
    link: "https://www.linkedin.com/"
  },
  {
    icon: <Camera />,
    title: "INSTAGRAM",
    value: "Your Instagram Profile",
    link: "https://www.instagram.com/"
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
// CONTACT PAGE
// =====================================

export default function Contact() {
  return (
    <main className="inner-page contact-page">

      {/* PAGE INTRO */}

      <motion.div
        className="page-heading"

        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        <span>05 / GET IN TOUCH</span>

        <h1>
          LET'S MAKE
          <br />
          <em>IT HAPPEN.</em>
        </h1>

        <p>
          Have an idea, a project or just want to connect?
          I'd love to hear from you.
        </p>
      </motion.div>

      {/* CONTACT LAYOUT */}

      <section className="contact-layout">

        {/* LEFT SIDE */}

        <motion.div
          className="contact-message"

          initial={{
            opacity: 0,
            x: -45
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          viewport={{
            once: true,
            amount: 0.2
          }}

          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <span className="section-label">
            START A CONVERSATION
          </span>

          <h2>
            GOOD IDEAS
            <br />
            START WITH
            <br />
            <em>HELLO.</em>
          </h2>

          <p>
            Whether you're looking to build something new,
            collaborate on an idea or simply say hello,
            feel free to reach out.
          </p>

          <motion.a
            href="mailto:hello@yourdomain.com"
            className="contact-main-link"

            whileHover={{
              x: 8
            }}

            transition={{
              duration: 0.25
            }}
          >
            <span>LET'S TALK</span>
            <ArrowUpRight />
          </motion.a>

        </motion.div>

        {/* RIGHT SIDE */}

        <div className="contact-methods">

          {contactMethods.map((method, index) => (

            <motion.a
              href={method.link}

              target={
                method.title === "EMAIL"
                  ? undefined
                  : "_blank"
              }

              rel={
                method.title === "EMAIL"
                  ? undefined
                  : "noopener noreferrer"
              }

              className="contact-method"
              key={method.title}

              initial={{
                opacity: 0,
                x: 40
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              viewport={{
                once: true,
                amount: 0.2
              }}

              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}

              whileHover={{
                x: -8
              }}
            >

              <motion.div
                className="contact-method-icon"

                whileHover={{
                  scale: 1.12,
                  rotate: 8
                }}

                transition={{
                  duration: 0.3
                }}
              >
                {method.icon}
              </motion.div>

              <div className="contact-method-info">
                <span>{method.title}</span>
                <h3>{method.value}</h3>
              </div>

              <ArrowUpRight
                className="contact-method-arrow"
              />

            </motion.a>

          ))}

        </div>

      </section>

      {/* BOTTOM CTA */}

      <motion.section
        className="contact-bottom"

        variants={reveal}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2
        }}

        whileHover={{
          y: -5
        }}

        transition={{
          duration: 0.6
        }}
      >

        <motion.div
          className="contact-bottom-icon"

          animate={{
            y: [0, -5, 0]
          }}

          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle />
        </motion.div>

        <div>
          <span>HAVE SOMETHING IN MIND?</span>
          <h2>LET'S BUILD THE FUTURE.</h2>
        </div>

        <motion.div
          animate={{
            x: [0, 5, 0]
          }}

          transition={{
            duration: 1.8,
            repeat: Infinity
          }}
        >
          <Send />
        </motion.div>

      </motion.section>

    </main>
  );
}