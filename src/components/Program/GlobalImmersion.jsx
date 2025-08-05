import React from "react";
import iconDemo from "../../assets/program-images/global-immersion/demo-day.svg";
import iconExpert from "../../assets/program-images/global-immersion/expert-session.svg";
import iconMixer from "../../assets/program-images/global-immersion/investor-mixer.png";
import iconLocal from "../../assets/program-images/global-immersion/local-startup-immersion.svg";
import "../../styles/Program/globalimmersion.css";

const GlobalImmersion = () => (
  <section className="global-immersion">
    <div className="global-immersion__wrapper">
      {/* Left panel: title */}
      <div className="global-immersion__sidebar">
        <h2 className="global-immersion__title">Global Immersion</h2>
      </div>

      {/* Right panel: content */}
      <div className="global-immersion__content">
        {/* Intro */}
        <p className="global-immersion__intro">
          Experience a transformative two-week immersion in Dubai—one of the
          world’s fastest-growing startup ecosystems. Forge global connections,
          learn from international investors, and benchmark your venture against
          global best practices.
        </p>

        {/* Icon row */}
        <div className="global-immersion__icons">
          <div className="global-immersion__icon">
            <img src={iconMixer} alt="Investor Mixer" loading="lazy" />
            <span>Investor Mixer</span>
          </div>
          <div className="global-immersion__icon">
            <img src={iconDemo} alt="Demo Day" loading="lazy" />
            <span>Demo Day</span>
          </div>
          <div className="global-immersion__icon">
            <img src={iconLocal} alt="Local Startup Immersion" loading="lazy" />
            <span>Local Startup Immersion</span>
          </div>
          <div className="global-immersion__icon">
            <img src={iconExpert} alt="Expert Sessions" loading="lazy" />
            <span>Expert Sessions</span>
          </div>
        </div>

        {/* Lead paragraph */}
        <p className="global-immersion__lead">
          Dubai’s strategic geographical location, its forward-thinking economic
          policies, and its vibrant multicultural ecosystem make it an
          unparalleled environment to gain invaluable global insights and forge
          powerful connections.
        </p>

        {/* Detailed bullets */}
        <div className="global-immersion__details">
          <p>
            <strong>Expand Horizons:</strong> Participants gain profound
            exposure to a diverse global entrepreneurial ecosystem, enabling
            them to understand varied market dynamics, cultural nuances, and
            international business practices that are crucial for global
            expansion.
          </p>
          <p>
            <strong>Connect with International Investors:</strong> The program
            facilitates direct engagement opportunities with a curated network
            of international angel investors and prominent Venture Capitalists
            based in Dubai. This opens critical doors to global funding
            opportunities and strategic partnerships for ventures.
          </p>
          <p>
            <strong>Meet Successful Founders &amp; Industry Leaders:</strong>{" "}
            Participants learn directly from, and network extensively with,
            established entrepreneurs and influential thought leaders who have
            successfully built and scaled businesses across diverse
            international markets and continents.
          </p>
          <p>
            <strong>Build a Vital International Network:</strong> The immersion
            fosters enduring connections and strategic alliances that will prove
            invaluable for future collaborations, successful market entry into
            new regions, and the long-term global expansion of ventures.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GlobalImmersion;
