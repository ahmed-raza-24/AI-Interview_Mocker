import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #e8ecf0;
          --shadow-dark: #c5cad1;
          --shadow-light: #ffffff;
          --text-primary: #1a1f2e;
          --text-secondary: #7a8499;
          --accent: #4f46e5;
        }

        .auth-root {
          min-height: 100vh;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          padding: 32px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── LEFT PANEL ── */
        .left-panel {
          width: 58%;
          max-width: 760px;
          min-height: 88vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 56px;
          position: relative;
          overflow: hidden;
          border-radius: 36px;
          background: var(--bg);
          box-shadow:
          14px 14px 34px var(--shadow-dark),
          -14px -14px 34px var(--shadow-light);
        }

        /* decorative circles */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          background: var(--bg);
        }
        .deco-circle-1 {
          width: 340px; height: 340px;
          top: -100px; right: -100px;
          box-shadow: 14px 14px 32px var(--shadow-dark), -14px -14px 32px var(--shadow-light);
        }
        .deco-circle-2 {
          width: 200px; height: 200px;
          bottom: -60px; left: -60px;
          box-shadow: 10px 10px 24px var(--shadow-dark), -10px -10px 24px var(--shadow-light);
        }
        .deco-circle-3 {
          width: 100px; height: 100px;
          bottom: 120px; right: 60px;
          box-shadow: 6px 6px 16px var(--shadow-dark), -6px -6px 16px var(--shadow-light);
        }

        /* logo */
        .logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 56px;
          position: relative; z-index: 2;
        }
        .logo-box {
          width: 44px; height: 44px;
          border-radius: 13px;
          background: var(--bg);
          box-shadow: 5px 5px 12px var(--shadow-dark), -5px -5px 12px var(--shadow-light);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .logo-label {
          font-size: 15px; font-weight: 800;
          color: var(--text-primary); letter-spacing: -0.01em;
        }
        .logo-label span {
          display: block; font-size: 11px;
          font-weight: 500; color: var(--text-secondary);
        }

        /* main copy */
        .left-content { position: relative; z-index: 2; }

        .tag-pill {
          display: inline-flex; align-items: center; gap: 7px;
          background: var(--bg);
          border-radius: 100px;
          padding: 6px 16px 6px 10px;
          box-shadow: 4px 4px 10px var(--shadow-dark), -4px -4px 10px var(--shadow-light);
          margin-bottom: 28px;
        }
        .tag-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--accent);
          animation: tagPulse 2s ease-in-out infinite;
        }
        @keyframes tagPulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
        .tag-text {
          font-size: 11px; font-weight: 700;
          color: var(--text-secondary); letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .left-heading {
          font-size: 38px; font-weight: 800;
          color: var(--text-primary); letter-spacing: -0.03em;
          line-height: 1.15; margin-bottom: 16px;
        }
        .left-heading em {
          font-style: normal;
          color: var(--accent);
        }
        .left-sub {
          font-size: 14px; font-weight: 500;
          color: var(--text-secondary); line-height: 1.7;
          max-width: 360px; margin-bottom: 44px;
        }

        /* feature cards */
        .feature-list {
          display: flex; flex-direction: column; gap: 14px;
          margin-bottom: 48px;
        }
        .feature-card {
          display: flex; align-items: center; gap: 14px;
          background: var(--bg);
          border-radius: 16px;
          padding: 14px 18px;
          box-shadow: 5px 5px 12px var(--shadow-dark), -5px -5px 12px var(--shadow-light);
          max-width: 380px;
        }
        .feature-icon {
          width: 38px; height: 38px; flex-shrink: 0;
          border-radius: 11px;
          background: var(--bg);
          box-shadow: 3px 3px 8px var(--shadow-dark), -3px -3px 8px var(--shadow-light);
          display: flex; align-items: center; justify-content: center;
          font-size: 17px;
        }
        .feature-title {
          font-size: 13px; font-weight: 700;
          color: var(--text-primary); margin-bottom: 2px;
        }
        .feature-desc {
          font-size: 11px; font-weight: 500;
          color: var(--text-secondary);
        }

        /* stats row */
        .stats-row {
          display: flex; gap: 16px;
        }
        .stat-card {
          background: var(--bg);
          border-radius: 16px;
          padding: 16px 22px;
          box-shadow: 5px 5px 12px var(--shadow-dark), -5px -5px 12px var(--shadow-light);
          text-align: center;
        }
        .stat-num {
          font-size: 22px; font-weight: 800;
          color: var(--accent); letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 11px; font-weight: 600;
          color: var(--text-secondary); margin-top: 2px;
        }

        /* ── RIGHT PANEL ── */
        .right-panel {
          width: 420px;
          min-height: 760px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
          border-radius: 36px;
          background: var(--bg);
          box-shadow:
            12px 12px 28px var(--shadow-dark),
            -12px -12px 28px var(--shadow-light);
        }

        .right-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
        }

        .right-heading {
          font-size: 20px; font-weight: 800;
          color: var(--text-primary); letter-spacing: -0.02em;
          text-align: left;
        }
        .right-sub {
          font-size: 13px; font-weight: 500;
          color: var(--text-secondary); text-align: left;
          margin-top: -16px;
        }

        /* Mobile: stack vertically */
        @media (max-width: 900px) {
          .auth-root {
            flex-direction: column;
            padding: 20px;
          }

          .left-panel {
            width: 100%;
            min-height: auto;
            padding: 40px 28px;
          }

          .right-panel {
            width: 100%;
            min-height: auto;
            padding: 28px 20px 40px;
          }

          .left-heading {
            font-size: 30px;
          }

          .stats-row {
            flex-wrap: wrap;
          }

          .deco-circle-1 {
            width: 200px;
            height: 200px;
          }
        }
      `}</style>

      <div className="auth-root">

        {/* ── LEFT PANEL ── */}
        <div className="left-panel">
          {/* decorative shapes */}
          <div className="deco-circle deco-circle-1" />
          <div className="deco-circle deco-circle-2" />
          <div className="deco-circle deco-circle-3" />

          {/* logo */}
          <div className="logo-row">
            <div className="logo-box">🎤</div>
            <div className="logo-label">
              InterviewAI
              <span>Mock Interview Platform</span>
            </div>
          </div>

          <div className="left-content">
            <div className="tag-pill">
              <div className="tag-dot" />
              <span className="tag-text">AI Powered Interviews</span>
            </div>

            <h1 className="left-heading">
              Ace Your Next<br />
              Interview with <em>AI</em>
            </h1>

            <p className="left-sub">
              Practice real interview questions, get instant AI feedback,
              and track your progress — all in one place. Used by 10,000+
              candidates to land their dream jobs.
            </p>

            <div className="feature-list">
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <div>
                  <div className="feature-title">AI-Generated Questions</div>
                  <div className="feature-desc">Role-specific questions tailored to your job description</div>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <div>
                  <div className="feature-title">Instant Feedback & Scoring</div>
                  <div className="feature-desc">Know exactly where you stand after every answer</div>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <div>
                  <div className="feature-title">Track Your Progress</div>
                  <div className="feature-desc">Review past sessions and improve over time</div>
                </div>
              </div>
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-num">10K+</div>
                <div className="stat-label">Users</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">500+</div>
                <div className="stat-label">Questions</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — Clerk ── */}
        <div className="right-panel">
          <div className="right-inner">
            <p className="right-heading">Welcome Back</p>
            <p className="right-sub">Please sign in to continue</p>
            <SignIn />
          </div>
        </div>

      </div>
    </>
  );
}