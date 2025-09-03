import React, { useState } from "react";
import "../../styles/ContactUs/contactus.css";
import Breadcrumb from "../../components/Header/Breadcrumbs";

import vector1 from "../../assets/about-us-images/vector1.png";
import vector2 from "../../assets/about-us-images/vector2.png";

export default function ContactUs() {
  // match footer structure: firstName, secondName, email, phone
  const [values, setValues] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  // --- validation (same rules as footer) ---
  const validateField = (name, value) => {
    const v = String(value || "").trim();
    switch (name) {
      case "firstName":
        if (!v) return "First name is required.";
        if (!/^[A-Za-z\s'.-]{2,}$/.test(v))
          return "Please enter a valid first name (min 2 letters).";
        return "";
      case "secondName":
        if (!v) return "Second name is required.";
        if (!/^[A-Za-z\s'.-]{2,}$/.test(v))
          return "Please enter a valid second name (min 2 letters).";
        return "";
      case "email":
        if (!v) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
          return "Please enter a valid email.";
        return "";
      case "phone":
        if (!v) return "Phone number is required.";
        const digits = v.replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 15)
          return "Please enter a valid phone number (10–15 digits).";
        return "";
      default:
        return "";
    }
  };

  const validateAll = (vals) => {
    const next = {};
    Object.keys(vals).forEach((k) => (next[k] = validateField(k, vals[k])));
    setErrors(next);
    return Object.values(next).every((msg) => !msg);
  };

  // --- handlers ---
  const onChange = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({ ...prev, [id]: value }));
    setSubmitMsg("");
  };

  const onBlur = (e) => {
    const { id, value } = e.target;
    setErrors((prev) => ({ ...prev, [id]: validateField(id, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMsg("");
    if (!validateAll(values)) return;

    // ===== Same Google Apps Script endpoint & encoding =====
    // (Same base flow as your ApplicationForm and the updated Footer integration)
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw0tEvkNK-cDowY99AOFQUeQjLKGJM2T2PPKAaMkAmtffVm17c_nfKMawFdkgnmcihu/exec";

    const fullName = `${values.firstName} ${values.secondName}`.trim();
    const digits = values.phone.replace(/\D/g, "");
    const finalPhone = digits.length ? digits : values.phone.trim();

    const body = new URLSearchParams({
      name: fullName,
      phone: finalPhone,
      email: values.email.trim(),
      source: "contactus-form",
    });

    try {
      setIsSubmitting(true);
      const res = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      await res.text(); // Apps Script often returns text

      setSubmitMsg("Thanks! Your details were submitted successfully.");
      setValues({ firstName: "", secondName: "", email: "", phone: "" });
      setErrors({ firstName: "", secondName: "", email: "", phone: "" });
    } catch (err) {
      console.error("Error sending data to Google Sheet:", err?.message || err);
      setSubmitMsg("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ariaFor = (field) => ({
    "aria-invalid": errors[field] ? "true" : "false",
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <section className="cu">
      {/* Breadcrumb */}
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

            {/* Simplified form: first name, second name, email, phone */}
            <form className="cu-form" noValidate onSubmit={handleSubmit}>
              <div className="cu-row cu-row-2">
                <div className="cu-input-wrap">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name*"
                    value={values.firstName}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...ariaFor("firstName")}
                  />
                  {errors.firstName && (
                    <small id="firstName-error" className="cu-error">
                      {errors.firstName}
                    </small>
                  )}
                </div>
                <div className="cu-input-wrap">
                  <input
                    id="secondName"
                    type="text"
                    placeholder="Second name*"
                    value={values.secondName}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...ariaFor("secondName")}
                  />
                  {errors.secondName && (
                    <small id="secondName-error" className="cu-error">
                      {errors.secondName}
                    </small>
                  )}
                </div>
              </div>

              <div className="cu-row cu-row-2">
                <div className="cu-input-wrap">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email*"
                    value={values.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...ariaFor("email")}
                  />
                  {errors.email && (
                    <small id="email-error" className="cu-error">
                      {errors.email}
                    </small>
                  )}
                </div>
                <div className="cu-input-wrap">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone*"
                    value={values.phone}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...ariaFor("phone")}
                  />
                  {errors.phone && (
                    <small id="phone-error" className="cu-error">
                      {errors.phone}
                    </small>
                  )}
                </div>
              </div>

              <div className="cu-actions">
                <button
                  type="submit"
                  className="cu-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting…" : "Submit"}{" "}
                  <span className="cu-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              </div>

              {submitMsg && (
                <p
                  className="cu-status"
                  role="status"
                  style={{ marginTop: 10, fontSize: 14 }}
                >
                  {submitMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
