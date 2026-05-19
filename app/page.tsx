import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DTASLOI Loader",
  description:
    "DTASLOI Loader is a clean DLL Loader thats virus free.",
};

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #050A0F;
          --ink: #EAFBFF;
          --muted: #7AA7B5;
          --accent: #00E5FF;
          --accent-light: rgba(0, 229, 255, 0.08);
          --rule: rgba(0, 229, 255, 0.15);
          --card: #0B141B;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 3rem;
          border-bottom: 1px solid var(--rule);
          background: rgba(5, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          color: var(--accent);
          text-decoration: none;
        }

        .nav-badge {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .hero {
          max-width: 760px;
          margin: 0 auto;
          padding: 7rem 2rem 5rem;
          text-align: center;
          animation: fadeUp 0.7s ease both;
        }

        .hero-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-light);
          padding: 0.3rem 0.85rem;
          border-radius: 2rem;
          margin-bottom: 2rem;
        }

        h1 {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(3rem, 8vw, 5.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 1.5rem;
        }

        h1 em {
          font-style: italic;
          color: var(--accent);
        }

        .hero-desc {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--muted);
          max-width: 520px;
          margin: 0 auto 3rem;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          background: var(--accent);
          color: #001014;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.9rem 2rem;
          border-radius: 0.5rem;
          transition: 0.2s;
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.25);
        }

        .btn-download:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(0, 229, 255, 0.4);
        }

        .download-note {
          font-size: 0.75rem;
          color: var(--muted);
          margin-top: 0.5rem;
        }

        .divider {
          border: none;
          border-top: 1px solid var(--rule);
          max-width: 760px;
          margin: 0 auto;
        }

        .features {
          max-width: 760px;
          margin: 0 auto;
          padding: 5rem 2rem;
          animation: fadeUp 0.7s 0.15s ease both;
        }

        .features-label {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--rule);
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .feature-item {
          background: var(--card);
          padding: 2rem;
          transition: 0.2s;
        }

        .feature-item:hover {
          background: rgba(0, 229, 255, 0.05);
        }

        .feature-icon {
          font-size: 1.4rem;
          margin-bottom: 0.9rem;
        }

        .feature-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }

        .feature-body {
          font-size: 0.85rem;
          line-height: 1.65;
          color: var(--muted);
        }

        footer {
          margin-top: auto;
          border-top: 1px solid var(--rule);
          padding: 1.75rem 3rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: var(--muted);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 560px) {
          nav { padding: 1.25rem 1.5rem; }
          .hero { padding: 4rem 1.5rem 3rem; }
          .features { padding: 3rem 1.5rem; }
          .features-grid { grid-template-columns: 1fr; }
          footer { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <nav>
        <a className="nav-logo" href="https://github.com/DeezVrOfficial/DTASLOI-Website">DTASLOI</a>
        <span className="nav-badge">LOADER</span>
      </nav>

      <section className="hero">
        <span className="hero-eyebrow">Loader Online</span>
        <h1>DTASLOI <em>Loader</em></h1>
        <p className="hero-desc">
          Official Loader for DTASLOI
        </p>

        <div>
          <a className="btn-download" href="#">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v9M4.5 6.5 8 10l3.5-3.5M2 13h12"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Loader
          </a>
          <p className="download-note">Safe environment • Undetected</p>
        </div>
      </section>

      <hr className="divider" />

      <section className="features">
        <p className="features-label">Loader Features</p>
        <div className="features-grid">
          {[
            { icon: "🛡️", title: "Virus Free", body: "Virus Free (Unlike Skidurra)." },
            { icon: "📡", title: "No Internet Needed", body: "Loadable dlls without internet." },
            { icon: "🧠", title: "Simple Process", body: "Loads smoothly with a simple method." },
            { icon: "⚡", title: "Instant Load", body: "Instantly loads with no lag, bugs, or crashes." },
          ].map((f) => (
            <div className="feature-item" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-body">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 DTASLOI</span>
        <span>DTASLOI Loader</span>
      </footer>
    </>
  );
}
