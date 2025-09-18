// BootCamp.jsx
import React from "react";
import "../../styles/BootCamp/bootcamp.css";
import Breadcrumb from "../../components/Header/BreadCrumbs";

export default function BootCamp() {
  return (
    <main className="bootcamp">
      <div className="bc-breadcrumb rails-box">
        <Breadcrumb
          links={[
            { label: "Home", url: "/" },
            { label: "BootCamp", url: "/bootcamp" },
          ]}
          currentPath={window.location.pathname}
        />
      </div>
      {/* ===== Program Overview ===== */}
      <section className="bc-section rails-box" id="overview">
        <div className="bc-left">
          <h1 className="bc-title">Program Overview</h1>
        </div>
        <div className="bc-right">
          <p className="bc-body">
            The investor expectations Bootcamp is built for mid-career
            professionals and family business heirs who want to make the leap
            into venture-backed startups but are unsure if they’re ready. Many
            have promising ideas but lack clarity on investor's expectations,
            structure, and credibility. This bootcamp gives you a safe runway to
            test your idea, sharpen your readiness, and leave with
            investor-grade material and confidence
          </p>
          <p className="bc-body">
            Structured to fit around busy careers, the program blends customized
            coaching, project-based learning, and direct exposure to investors
            and operators
          </p>
        </div>
      </section>

      {/* ===== Batch Size ===== */}
      <section className="bc-section rails-box" id="batch">
        <div className="bc-left">
          <h2 className="bc-h2">Batch Size</h2>
        </div>
        <div className="bc-right">
          <div className="bc-badge">30</div>
        </div>
      </section>

      {/* ===== Program Features ===== */}
      <section className="bc-section rails-box" id="features">
        <div className="bc-left">
          <h2 className="bc-h2">Program Features</h2>
        </div>

        <div className="bc-right">
          {/* Feature 1 */}
          <article className="bc-feature">
            <div className="bc-feature__num">1</div>
            <div className="bc-feature__content">
              <h3 className="bc-h3">Investor-Ready Blueprint</h3>
              <ul className="bc-list">
                <li>
                  Build a business plan, financial model, and pitch narrative
                  that speaks VC language
                </li>
                <li>
                  Customized coaching (not one-to-many lectures) for your idea’s
                  unique path
                </li>
                <li>
                  Multiple demo days and 1:1 sessions with VCs, operators, and
                  serial founders
                </li>
              </ul>
              <p className="bc-note">
                Every participant leaves with a <strong>Data Room</strong>:
                pitch deck, financials, and fundraising plan ready to share
              </p>
            </div>
          </article>

          {/* Feature 2 */}
          <article className="bc-feature">
            <div className="bc-feature__num">2</div>
            <div className="bc-feature__content">
              <h3 className="bc-h3">Flexible Format for Professionals</h3>
              <ul className="bc-list">
                <li>
                  4 hour weekend in-person sessions, and 6 hour weekday online
                  live/pre-recorded classes
                </li>
                <li>
                  Balanced with take-home projects that shape your personalized
                  learning path
                </li>
              </ul>
              <p className="bc-note">
                Progression depends on project submissions so every module
                builds exactly where you stand
              </p>
            </div>
          </article>

          {/* Feature 3 */}
          <article className="bc-feature">
            <div className="bc-feature__num">3</div>
            <div className="bc-feature__content">
              <h3 className="bc-h3">Network &amp; Community</h3>
              <ul className="bc-list">
                <li>
                  Lifetime access to Slack community with fellow founders,
                  investors, and exited entrepreneurs
                </li>
                <li>Private networking events and closed-door presentations</li>
                <li>Continuous 24/7 access to peer and mentor guidance</li>
              </ul>
              <p className="bc-note">
                You don’t just finish with knowledge and tools, you finish with
                a community to help you co-create
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
