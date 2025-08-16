import React from "react";
import "../../styles/Community/communityevents.css";
import arrowRight from "../../assets/community/podcast.png";

const EVENTS = [
  {
    title: "Global Immersion",
    desc: "Designed for aspiring entrepreneurs ready to expand their horizons.",
  },
  {
    title: "Global Immersion",
    desc: "Designed for aspiring entrepreneurs ready to expand their horizons.",
  },
  {
    title: "Global Immersion",
    desc: "Designed for aspiring entrepreneurs ready to expand their horizons.",
  },
];

export default function CommunityEvents() {
  return (
    <section className="ce">
      {/* content between edge strokes */}
      <div className="ce-wrap">
        {/* LEFT: Upcoming events */}
        <div className="ce-left">
          <h2 className="ce-title">Upcoming Event</h2>

          <ul className="ce-list">
            {EVENTS.map((e, idx) => (
              <li className="ce-item" key={idx}>
                <h4 className="ce-item-title">{e.title}</h4>
                <p className="ce-item-desc">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Podcast promo */}
        <div className="ce-right">
          <h3 className="ce-promo-title">
            Ideas worth sharing.
            <br />
            Voices worth hearing.
          </h3>
          <p className="ce-promo-copy">
            Tune in to conversations that inspire, inform, and connect our
            campus community.
          </p>

          <div className="ce-podcast">
            <img
              className="ce-podcast-img"
              src={arrowRight}
              alt="Podcast"
              loading="lazy"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
