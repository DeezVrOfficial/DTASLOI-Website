import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CalcuNotes",
  description:
    "CalcuNotes combines a full calculator with a built-in notepad so you can solve problems and capture ideas without ever switching apps.",
};

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #F7F5F2;
          --ink: #1A1814;
          --muted: #7A7469;
          --accent: #2D5BE3;
          --accent-light: #EEF2FD;
          --rule: #E2DED8;
          --card: #FFFFFF;
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
          background: var(--bg);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .nav-logo {
          font-family: 'DM Serif Display', serif;
          font-size: 1.25rem;
          letter-spacing: -0.02em;
          color: var(--ink);
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
          background: var(--ink);
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 0.9rem 2rem;
          border-radius: 0.5rem;
          transition: background 0.2s, transform 0.15s;
          margin-bottom: 0.85rem;
        }

        .btn-download:hover {
          background: var(--accent);
          transform: translateY(-2px);
        }

        .download-note {
          font-size: 0.75rem;
          color: var(--muted);
          letter-spacing: 0.02em;
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
          border: 1px solid var(--rule);
          border-radius: 0.75rem;
          overflow: hidden;
        }

        .feature-item {
          background: var(--card);
          padding: 2rem;
          transition: background 0.2s;
        }

        .feature-item:hover { background: var(--accent-light); }

        .feature-icon {
          font-size: 1.4rem;
          margin-bottom: 0.9rem;
        }

        .feature-title {
          font-family: 'DM Serif Display', serif;
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
          letter-spacing: -0.01em;
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
          align-items: center;
          font-size: 0.78rem;
          color: var(--muted);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
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
        <a className="nav-logo" href="#">CalcuNotes</a>
        <span className="nav-badge">iOS App</span>
      </nav>

      <section className="hero">
        <span className="hero-eyebrow">Now Available</span>
        <h1>Calculate &amp; <em>note</em><br />all in one.</h1>
        <p className="hero-desc">
          CalcuNotes combines a full calculator with a built-in notepad so you can solve problems
          and capture ideas without ever switching apps.
        </p>
        <div>
          <a className="btn-download" href="/CalcuNotes.ipa" download>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1v9M4.5 6.5 8 10l3.5-3.5M2 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download IPA
          </a>
          <p className="download-note">Requires sideloading via AltStore, Sideloadly, or similar</p>
        </div>
      </section>

      <hr className="divider" />

      <section className="features">
        <p className="features-label">Features</p>
        <div className="features-grid">
          {[
            { icon: "🧮", title: "Full Calculator", body: "Handles everyday arithmetic quickly and reliably — no frills, just fast." },
            { icon: "📝", title: "Built-in Notepad", body: "Jot down results, ideas, or reminders right alongside your calculations." },
            { icon: "✦",  title: "Clean Design",    body: "A distraction-free interface designed for speed and clarity." },
            { icon: "🎒", title: "For Everyone",    body: "Perfect for students, budgeting, shopping lists, homework, and daily tasks." },
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
        <span>© 2026 CalcuNotes</span>
        <span>iOS · Sideload Only</span>
      </footer>
    </>
  );
}
