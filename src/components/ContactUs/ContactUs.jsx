import React, { useState } from "react";
import "../../styles/ContactUs/contactus.css";
import Breadcrumb from "../../components/Header/Breadcrumbs";

import vector1 from "../../assets/about-us-images/vector1.png";
import vector2 from "../../assets/about-us-images/vector2.png";

export default function ContactUs() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // ---------------- Validation ----------------
  const validateField = (field, value) => {
    const v = value.trim();
    if (field === "name") {
      if (!v) return "Name is required.";
      if (!/^[A-Za-z\s'.-]{2,}$/.test(v)) return "Please enter a valid name.";
    }
    if (field === "email") {
      if (!v) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        return "Please enter a valid email.";
    }
    return "";
  };

  const validateAll = () => {
    const newErrors = {
      name: validateField("name", values.name),
      email: validateField("email", values.email),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => !msg);
  };

  const handleChange = (e) => {
    const { type, value, placeholder } = e.target;
    let key = "";
    if (placeholder.includes("name")) key = "name";
    else if (type === "email") key = "email";
    else if (type === "tel") key = "phone";
    else if (placeholder === "Company") key = "company";
    else if (placeholder === "Location") key = "location";
    else if (placeholder === "Description") key = "description";

    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleBlur = (e) => {
    const { type, value, placeholder } = e.target;
    let key = "";
    if (placeholder.includes("name")) key = "name";
    else if (type === "email") key = "email";

    if (key) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      console.log("Form submitted:", values);
      alert("Thanks! We’ll get back to you soon.");
      setValues({
        name: "",
        email: "",
        phone: "",
        company: "",
        location: "",
        description: "",
      });
      setErrors({ name: "", email: "" });
    }
  };

  return (
    <section className="cu">
      {/* Breadcrumb at the very top */}
      <div className="cu-crumb">
        <Breadcrumb
          links={[
            { label: "Home", url: "/" },
            { label: "ContactUs", url: "/contactus" },
          ]}
          currentPath={window.location.pathname}
        />
      </div>

      <div className="cu-wrap">
        <header className="cu-header">
          <h1 className="cu-title">Contact us</h1>

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

        <div className="cu-grid">
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

          <div className="cu-right">
            <h3 className="cu-form-title">Get in touch</h3>
            <p className="cu-form-sub">
              You have questions? Don’t hesitate to contact us
            </p>

            <form className="cu-form" noValidate onSubmit={handleSubmit}>
              <div className="cu-row cu-row-2">
                <div className="cu-input-wrap">
                  <input
                    type="text"
                    placeholder="Your name*"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && (
                    <small className="cu-error">{errors.name}</small>
                  )}
                </div>
                <div className="cu-input-wrap">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <small className="cu-error">{errors.email}</small>
                  )}
                </div>
              </div>

              <div className="cu-row cu-row-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={values.company}
                  onChange={handleChange}
                />
              </div>

              <div className="cu-row">
                <input
                  type="text"
                  placeholder="Location"
                  value={values.location}
                  onChange={handleChange}
                />
              </div>

              <div className="cu-row">
                <textarea
                  placeholder="Description"
                  rows={5}
                  value={values.description}
                  onChange={handleChange}
                />
              </div>

              <div className="cu-actions">
                <button type="submit" className="cu-submit">
                  Submit{" "}
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
