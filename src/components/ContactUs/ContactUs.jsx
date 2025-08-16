import React from "react";
import "../../styles/ContactUs/contactus.css";

// decorative vectors
import vector1 from "../../assets/about-us-images/vector1.png";
import vector2 from "../../assets/about-us-images/vector2.png";

export default function ContactUs() {
  return (
    <section className="cu">
      {/* edge strokes are drawn via CSS ::before; this wrapper stays above them */}
      <div className="cu-wrap">
        {/* optional: if you have a shared Breadcrumb component, uncomment:
        <Breadcrumb
          links={[
            { label: "Home", url: "/" },
            { label: "Contact Us", url: "/contact" },
          ]}
          currentPath={window.location.pathname}
        />
        */}

        {/* Header */}
        <header className="cu-header">
          <h1 className="cu-title">Contact us</h1>

          {/* decorative vectors */}
          <img
            className="cu-v1"
            src={vector1}
            alt=""
            width="150"
            height="150"
            loading="lazy"
          />
          <img
            className="cu-v2"
            src={vector2}
            alt=""
            width="60"
            height="60"
            loading="lazy"
          />
        </header>

        <div className="cu-divider" />

        {/* Content */}
        <div className="cu-grid">
          {/* LEFT: Address & Email */}
          <aside className="cu-left">
            <h3 className="cu-block-title">Address</h3>
            <address className="cu-address">
              <a
                href="https://maps.google.com/?q=WeWork Two Horizon Centre, Golf Course Road, DLF Two Horizon Centre, DLF Phase 5, Gurugram, HR 122002"
                target="_blank"
                rel="noreferrer"
              >
                WeWork Two Horizon Centre,
              </a>
              <br />
              Golf Course Road, 5th Floor,
              <br />
              DLF Two Horizon Centre, DLF Phase 5,
              <br />
              Gurugram, HR 122002
            </address>

            <h3 className="cu-block-title">Email</h3>
            <p className="cu-email">
              <a href="mailto:Info@VenturEdu.com">Info@VenturEdu.com</a>
            </p>
          </aside>

          {/* RIGHT: Form */}
          <div className="cu-right">
            <h3 className="cu-form-title">Get in touch</h3>
            <p className="cu-form-sub">
              You have questions? Don’t hesitate to contact us
            </p>

            <form className="cu-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cu-row cu-row-2">
                <input type="text" placeholder="Your name*" />
                <input type="email" placeholder="Email*" />
              </div>

              <div className="cu-row cu-row-2">
                <input type="tel" placeholder="Phone" />
                <input type="text" placeholder="Company" />
              </div>

              <div className="cu-row">
                <input type="text" placeholder="Location" />
              </div>

              <div className="cu-row">
                <textarea placeholder="Description" rows={5} />
              </div>

              <div className="cu-actions">
                <button type="submit" className="cu-submit">
                  Submit
                  <span className="cu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
