import React, { useState } from "react";
import "./Query.css";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import logo2 from "../../assets/logo2.png";

const Query = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    involvementType: "individual",
    institutionName: "",
    query: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Query submitted successfully! Check console for details.");
  };

  return (
    <div className="page-wrapper">
      <div className="form-container">
        <div className="header-wrapper">
          <div className="form-header">
            <div className="logo-container">
              <img
                src={logo2}
                alt="Moner Unmesh Logo"
                className="header-logo"
              />
            </div>
            <h1>Moner Unmesh</h1>
            <h2>Query Form</h2>
          </div>

          <div className="desktop-contact-info">
            <ContactInfo />
          </div>
        </div>

        <div className="query-form">
          <div className="mobile-contact-info">
            <ContactInfo />
          </div>
          <div className="form-section">
            <h3>Contact Information</h3>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact *</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Enter your phone number or email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                placeholder="Enter your address"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Type of Involvement</h3>

            <div className="form-group">
              <label>I am reaching out as *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="involvementType"
                    value="individual"
                    checked={formData.involvementType === "individual"}
                    onChange={handleInputChange}
                  />
                  <span>Individual</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="involvementType"
                    value="institution"
                    checked={formData.involvementType === "institution"}
                    onChange={handleInputChange}
                  />
                  <span>Institution</span>
                </label>
              </div>
            </div>

            {formData.involvementType === "institution" && (
              <div className="form-group institutional-details">
                <label htmlFor="institutionName">Institution Name *</label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  placeholder="Enter your institution name"
                />
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>Your Query</h3>

            <div className="form-group">
              <label htmlFor="query">Please describe your query *</label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                rows="6"
                placeholder="Please provide detailed information about your query or concern..."
              />
            </div>
          </div>

          <button onClick={handleSubmit} className="submit-button">
            Submit Query Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Query;
