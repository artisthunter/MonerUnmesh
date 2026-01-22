import React, { useState } from "react";
import "./Donation.css";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import logo2 from "../../assets/logo2.png";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    scopeOfEngagement: [],
    whateverYouWantDetails: "",
    othersDetails: "",
  });

  const bankDetails = [
    {
      accountName: "Mind Formation",
      accountNumber: "925020050065505",
      ifsc: "UTIB0004023",
      bankName: "Axis Bank",
      branch: "Kalindi WB, Kolkata-700089",
    },
    {
      accountName: "Mind Formation",
      accountNumber: "50200072897554",
      ifsc: "HDFC0001929",
      bankName: "HDFC Bank",
      branch: "Dum Dum Road WB, Kolkata-700074",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      scopeOfEngagement: checked
        ? [...prev.scopeOfEngagement, value]
        : prev.scopeOfEngagement.filter((item) => item !== value),
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted successfully! Check console for details.");
  };

  const scopeOptions = [
    "Donate funds",
    "Old-new clothes",
    "Educational stationery",
    "Raw food materials, grains, etc",
    "Whatever you want related to our activity",
    "Donate your time",
    "Stay with us and exchange your experience",
    "Provide service to uplift indiginous people",
    "Others",
  ];

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
            <h2>Donation Form</h2>
          </div>

          <div className="desktop-contact-info">
            <ContactInfo />
          </div>
        </div>

        <div className="donation-form">
          <div className="mobile-contact-info">
            <ContactInfo />
          </div>
          <div className="form-section">
            <h3>Personal Information</h3>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
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
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact *</label>
              <input
                type="number"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-section">
              <h3>Scope of Donation with Moner Unmesh</h3>
              <p className="section-description">
                Please select all areas where you would like to contribute:
              </p>

              <div className="checkbox-group">
                {scopeOptions.map((option, index) => (
                  <div key={index}>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        value={option}
                        checked={formData.scopeOfEngagement.includes(option)}
                        onChange={handleCheckboxChange}
                      />
                      <span>{option}</span>
                    </label>

                    {option === "Donate funds" &&
                      formData.scopeOfEngagement.includes("Donate funds") && (
                        <div className="bank-details-container">
                          <h4>Bank Details for Donation</h4>
                          {bankDetails.map((bank, index) => (
                            <div key={index} className="bank-account">
                              <div className="bank-account-title">
                                Account {index + 1}
                              </div>
                              <div className="bank-info">
                                <div className="bank-info-item">
                                  <span className="bank-info-label">
                                    Account Name:
                                  </span>
                                  <span className="bank-info-value">
                                    {bank.accountName}
                                  </span>
                                </div>
                                <div className="bank-info-item">
                                  <span className="bank-info-label">
                                    Account Number:
                                  </span>
                                  <span className="bank-info-value">
                                    {bank.accountNumber}
                                  </span>
                                </div>
                                <div className="bank-info-item">
                                  <span className="bank-info-label">IFSC:</span>
                                  <span className="bank-info-value">
                                    {bank.ifsc}
                                  </span>
                                </div>
                                <div className="bank-info-item">
                                  <span className="bank-info-label">
                                    Bank Name:
                                  </span>
                                  <span className="bank-info-value">
                                    {bank.bankName}
                                  </span>
                                </div>
                                <div className="bank-info-item">
                                  <span className="bank-info-label">
                                    Branch:
                                  </span>
                                  <span className="bank-info-value">
                                    {bank.branch}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                    {option === "Whatever you want related to our activity" &&
                      formData.scopeOfEngagement.includes(
                        "Whatever you want related to our activity"
                      ) && (
                        <div className="others-details">
                          <textarea
                            name="whateverYouWantDetails"
                            value={formData.whateverYouWantDetails}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Please describe what you would like to contribute..."
                          />
                        </div>
                      )}

                    {option === "Others" &&
                      formData.scopeOfEngagement.includes("Others") && (
                        <div className="others-details">
                          <textarea
                            name="othersDetails"
                            value={formData.othersDetails}
                            onChange={handleInputChange}
                            rows="3"
                            placeholder="Please specify other areas of engagement..."
                          />
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleSubmit} className="submit-button">
              Submit Donation Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
