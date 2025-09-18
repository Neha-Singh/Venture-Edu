import React from "react";
import arrowRight from "../../assets/community/community-header.png"; // right-side graphic
import "../../styles/Community/communitylanding.css";
import Breadcrumb from "../../components/Header/BreadCrumbs";

const CommunityLanding = () => {
  return (
    <section className="community-landing" role="banner">
      {/* thin page strokes */}
      <div className="stroke stroke-left" />
      <div className="stroke stroke-right" />
      <div className="stroke stroke-top" />
      <div className="stroke stroke-bottom" />

      <div className="community-wrap">
        {/* Breadcrumbs */}
        <Breadcrumb
          links={[
            { label: "Home", url: "/" },
            { label: "Community", url: "/community" },
          ]}
          currentPath={window.location.pathname}
        />

        <div className="community-grid">
          {/* Left content */}
          <div className="community-copy">
            <h1 className="community-title">Community</h1>

            <p className="community-subtitle">
              Being part of VenturEdu means more than just education—it means
              joining a thriving startup community of ambitious, like-minded
              innovators and disruptors.
            </p>

            <a href="#join" className="cta-btn">
              Join the VenturEdu Members-Only Entrepreneurship Community
            </a>
          </div>

          {/* Right visual */}
          <div className="community-art">
            <img
              src={arrowRight}
              alt="VenturEdu community visual"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityLanding;
