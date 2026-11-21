export default function Footer() {
  return (
    <footer className="footer four18-footer">
      <div className="footer-glow"></div>

      <div className="four18-footer-content">

        <h2 className="four18-footer-logo">
          FOUR<span>18</span>
        </h2>

        <p className="four18-footer-tagline">
          Built in silence. Made to matter.
        </p>

        <div className="four18-socials">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/four.418/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          {/* TIKTOK */}
          <a
            href="https://www.tiktok.com/@four1832"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg
              viewBox="0 0 24 24"
              width="21"
              height="21"
              fill="currentColor"
            >
              <path d="M19.5 8.2a7.1 7.1 0 0 1-4.3-1.4v8.1a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.3a2.8 2.8 0 1 0 1.6 2.5V2h3.2a4.9 4.9 0 0 0 4.3 4.3v1.9z" />
            </svg>
          </a>

        </div>

        <div className="four18-footer-line"></div>

        <span className="four18-copyright">
          © {new Date().getFullYear()} FOUR18 DIGITAL STUDIO.
          ALL RIGHTS RESERVED.
        </span>

      </div>
    </footer>
  );
}