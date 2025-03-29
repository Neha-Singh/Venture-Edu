import React, { useState } from "react";
import "../styles/applicationform.css";

const countryCodes = [
  { name: "United States", dial_code: "+1", code: "US" },
  { name: "United Kingdom", dial_code: "+44", code: "GB" },
  { name: "Canada", dial_code: "+1", code: "CA" },
  { name: "Australia", dial_code: "+61", code: "AU" },
  { name: "India", dial_code: "+91", code: "IN" },
  { name: "Germany", dial_code: "+49", code: "DE" },
  { name: "France", dial_code: "+33", code: "FR" },
  { name: "Brazil", dial_code: "+55", code: "BR" },
  { name: "Japan", dial_code: "+81", code: "JP" },
  { name: "South Africa", dial_code: "+27", code: "ZA" },
  // ... add more countries as needed
];

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91", // Default set to +91
    phone: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.countryCode) {
      errors.countryCode = "Country code is required";
    }
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Enter a valid phone number";
    }
    if (!formData.linkedin.trim()) {
      errors.linkedin = "LinkedIn URL is required";
    } else {
      try {
        const url = new URL(formData.linkedin);
        if (!url.hostname.includes("linkedin.com")) {
          errors.linkedin = "Enter a valid LinkedIn URL";
        }
      } catch (e) {
        errors.linkedin = "Enter a valid URL";
      }
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const finalPhone = `+${formData.countryCode} ${formData.phone.trim()}`;

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyVN9jFLejGzYREZh20CFcBNNTq05FJqdzQ9ccNICz2ReO7w9Ppijn_yxnAsLHL3NDt/exec";

    fetch(scriptURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${formData.name}&phone=${finalPhone}&linkedin=${formData.linkedin}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setSuccessMessage("Application successfully sent");
        setFormData({
          name: "",
          phone: "",
          linkedin: "",
          countryCode: "+91",
        });
      })
      .catch((error) => {
        console.error("Error sending data to Google Sheet:", error.message);
      });
  };

  return (
    <div className="form-container" id="application-form">
      <form className="application-form" onSubmit={handleSubmit}>
        <h2>Apply Now</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Phone number</label>
          <div className="horizontal-group">
            <div className="small-field">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.dial_code}>
                    {country.dial_code}
                  </option>
                ))}
              </select>
              {errors.countryCode && (
                <span className="error">{errors.countryCode}</span>
              )}
            </div>
            <div className="large-field">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            placeholder="Enter your LinkedIn profile URL"
            value={formData.linkedin}
            onChange={handleChange}
          />
          {errors.linkedin && <span className="error">{errors.linkedin}</span>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ApplicationForm;
