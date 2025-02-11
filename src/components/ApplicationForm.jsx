import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/applicationform.css";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Validate fields and return any errors as an object.
  const validate = () => {
    const errors = {};
    // Validate name: non-empty.
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    // Validate phone: basic regex for numbers, plus, spaces, hyphens, or parentheses.
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = "Enter a valid phone number";
    }
    // Validate LinkedIn URL: must be a valid URL and include "linkedin.com".
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

  // Update form state on input change.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // On form submission, validate and send the form via EmailJS.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Use emailjs.send() to send the form data.
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Application successfully sent");
          // Optionally, clear the form after submission.
          setFormData({ name: "", phone: "", linkedin: "" });
        },
        (error) => {
          console.error(error.text);
          // Optionally, set an error message here.
        }
      );
  };

  return (
    <div className="form-container">
      <form className="application-form" onSubmit={handleSubmit}>
        <h2>Apply Now</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn URL</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="Enter your LinkedIn profile URL"
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
