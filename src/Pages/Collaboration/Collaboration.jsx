import React, { useState } from "react";
import "./Collaboration.css";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import logo2 from "../../assets/logo2.png";

const Collaboration = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    contact: "",
    profession: "",
    educationalQualification: "",
    socialServiceExp: "",
    scopeOfEngagement: [],
    othersDetails: "",
    reasonForService: "",
    involvementType: "individual",
    institutionDetails: "",
    institutionFile: null,
  });

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      institutionFile: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted successfully! Check console for details.");
  };

  const scopeOptions = [
    "Teaching: Online/Offline",
    "Socio-economic Development of Indigenous Village",
    "Cultivation",
    "Livestock Farming",
    "Pisciculture",
    "Home Craft",
    "Adult Education",
    "Health Sector",
    "Donation",
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
            <h2>Collaboration Form</h2>
          </div>

          <div className="desktop-contact-info">
            <ContactInfo />
          </div>
        </div>

        <div className="collaboration-form">
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender *</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
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

            <div className="form-group">
              <label htmlFor="profession">Profession *</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="educationalQualification">
                Educational Qualification *
              </label>
              <input
                type="text"
                id="educationalQualification"
                name="educationalQualification"
                value={formData.educationalQualification}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="socialServiceExp">
                Experience of Social Service (if any)
              </label>
              <textarea
                id="socialServiceExp"
                name="socialServiceExp"
                value={formData.socialServiceExp}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please describe your social service experience"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Scope of Engagement with Moner Unmesh</h3>
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

          <div className="form-section">
            <h3>Additional Information</h3>

            <div className="form-group">
              <label htmlFor="reasonForService">
                Reason Behind Providing Service *
              </label>
              <textarea
                id="reasonForService"
                name="reasonForService"
                value={formData.reasonForService}
                onChange={handleInputChange}
                rows="4"
                placeholder="Please share your motivation for wanting to collaborate with Moner Unmesh"
              />
            </div>

            <div className="form-group">
              <label>Type of Involvement *</label>
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
                <label htmlFor="institutionDetails">
                  Detailed Activity of Your Institution *
                </label>
                <textarea
                  id="institutionDetails"
                  name="institutionDetails"
                  value={formData.institutionDetails}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Please provide detailed information about your institution's activities, mission, and areas of work"
                />

                <label htmlFor="institutionFile" style={{ marginTop: "15px" }}>
                  Upload Institution Document (Optional)
                </label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="institutionFile"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  {formData.institutionFile && (
                    <div className="file-info">
                      Selected: {formData.institutionFile.name}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <button onClick={handleSubmit} className="submit-button">
            Submit Collaboration Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
