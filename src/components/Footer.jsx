
import { Link } from "react-router-dom";

import {
  Code2,
  Globe,
  Mail,
  ArrowUpRight,
  ArrowUp,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      {/* FOOTER TOP */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            ABDO STUDIO<span>.</span>
          </Link>

          <p>
            Building digital experiences through creativity,
            technology and imagination.
          </p>

          <div className="footer-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={19} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Globe size={19} />
            </a>

            <a
              href="mailto:hello@yourdomain.com"
              aria-label="Email"
            >
              <Mail size={19} />
            </a>

          </div>

        </div>

        {/* NAVIGATION */}
        <div className="footer-links">

          <span className="footer-heading">
            EXPLORE
          </span>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* CONTACT */}
        <div className="footer-contact">

          <span className="footer-heading">
            GET IN TOUCH
          </span>

          <div className="footer-status">
            <span></span>
            AVAILABLE FOR PROJECTS
          </div>

          <h3>
            HAVE AN IDEA?
            <br />
            LET'S BUILD IT.
          </h3>

          <a
            href="mailto:hello@yourdomain.com"
            className="footer-email"
          >
            hello@yourdomain.com
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>

      {/* FOOTER MESSAGE */}
      <div className="footer-message">

        <div>
          <Sparkles size={17} />
          <span>THINK. CREATE. BUILD.</span>
        </div>

        <h2>
          LET'S CREATE
          <br />
          <em>SOMETHING EXTRAORDINARY.</em>
        </h2>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} ABDO STUDIO.
          ALL RIGHTS RESERVED.
        </span>

        <span className="footer-made">
          DESIGNED WITH PASSION.
        </span>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
        >
          BACK TO TOP
          <ArrowUp size={15} />
        </button>

      </div>

    </footer>
  );
}
