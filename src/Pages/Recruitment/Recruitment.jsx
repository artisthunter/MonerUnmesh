import React, { useState } from "react";
import "./Recruitment.css";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import logo2 from "../../assets/logo2.png";

const Recruitment = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    presentAddress: "",
    permanentAddress: "",
    age: "",
    sex: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    qualification: "",
    reference: "",
    otherActivities: "",
    fullNameCapital: "",
    declarationDate: "",

    addressProof: null,
    ageProof: null,
    madhyamikCert: null,
    higherSecondaryCert: null,
    degreeCert: null,
    masterDegreeCert: null,
    otherQualificationCert: null,
    casteCertificate: null,
    referenceCertificate: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert(
      "Recruitment form submitted successfully! Check console for details."
    );
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
            <h2>Recruitment Form</h2>
          </div>

          <div className="desktop-contact-info">
            <ContactInfo />
          </div>
        </div>

        <div className="recruitment-form">
          <div className="mobile-contact-info">
            <ContactInfo />
          </div>
          <div className="form-section">
            <h3>Personal Information</h3>

            <div className="form-group">
              <label htmlFor="name">1. Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fatherName">2. Father's Name *</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="presentAddress">3. Address (Present) *</label>
              <textarea
                id="presentAddress"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleInputChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="permanentAddress">4. Address (Permanent) *</label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleInputChange}
                rows="3"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">5. Age (Years) *</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Years"
                />
              </div>

              <div className="form-group">
                <label htmlFor="sex">6. Sex *</label>
                <select
                  id="sex"
                  name="sex"
                  value={formData.sex}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>7. Date of Birth *</label>
              <div className="dob-row">
                <div className="dob-field">
                  <label htmlFor="dobDay" className="small-label">
                    Day
                  </label>
                  <input
                    type="number"
                    id="dobDay"
                    name="dobDay"
                    value={formData.dobDay}
                    onChange={handleInputChange}
                    placeholder="DD"
                    min="1"
                    max="31"
                  />
                </div>
                <div className="dob-field">
                  <label htmlFor="dobMonth" className="small-label">
                    Month
                  </label>
                  <select
                    id="dobMonth"
                    name="dobMonth"
                    value={formData.dobMonth}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Month</option>
                    {months.map((month, index) => (
                      <option key={index} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="dob-field">
                  <label htmlFor="dobYear" className="small-label">
                    Year
                  </label>
                  <input
                    type="number"
                    id="dobYear"
                    name="dobYear"
                    value={formData.dobYear}
                    onChange={handleInputChange}
                    placeholder="YYYY"
                    min="1900"
                    max="2025"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="qualification">8. Qualification *</label>
              <textarea
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please list your educational qualifications"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reference">9. Reference *</label>
              <textarea
                id="reference"
                name="reference"
                value={formData.reference}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please provide reference details"
              />
            </div>

            <div className="form-group">
              <label htmlFor="otherActivities">
                10. Associate with Any Other Activity or Profession
              </label>
              <textarea
                id="otherActivities"
                name="otherActivities"
                value={formData.otherActivities}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please describe any other activities or professions"
              />
            </div>
          </div>

          <div className="testimonials-section">
            <h3>Testimonials to be Submitted</h3>
            <p className="section-note">
              Please upload Xerox (photocopy) of all required documents
            </p>

            <div className="form-group">
              <label htmlFor="addressProof">A. Address Proof *</label>
              <input
                type="file"
                id="addressProof"
                name="addressProof"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="file-input"
              />
              {formData.addressProof && (
                <div className="file-info">
                  Selected: {formData.addressProof.name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="ageProof">B. Age Proof *</label>
              <input
                type="file"
                id="ageProof"
                name="ageProof"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="file-input"
              />
              {formData.ageProof && (
                <div className="file-info">
                  Selected: {formData.ageProof.name}
                </div>
              )}
            </div>

            <div className="marks-certificates">
              <h4>C. Mark Sheet & Admit Card (Xerox Copy Only)</h4>

              <div className="form-group">
                <label htmlFor="madhyamikCert">1. Madhyamik *</label>
                <input
                  type="file"
                  id="madhyamikCert"
                  name="madhyamikCert"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="file-input"
                />
                {formData.madhyamikCert && (
                  <div className="file-info">
                    Selected: {formData.madhyamikCert.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="higherSecondaryCert">
                  2. Higher Secondary *
                </label>
                <input
                  type="file"
                  id="higherSecondaryCert"
                  name="higherSecondaryCert"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="file-input"
                />
                {formData.higherSecondaryCert && (
                  <div className="file-info">
                    Selected: {formData.higherSecondaryCert.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="degreeCert">3. Degree Course</label>
                <input
                  type="file"
                  id="degreeCert"
                  name="degreeCert"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="file-input"
                />
                {formData.degreeCert && (
                  <div className="file-info">
                    Selected: {formData.degreeCert.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="masterDegreeCert">4. Master Degree</label>
                <input
                  type="file"
                  id="masterDegreeCert"
                  name="masterDegreeCert"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="file-input"
                />
                {formData.masterDegreeCert && (
                  <div className="file-info">
                    Selected: {formData.masterDegreeCert.name}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="otherQualificationCert">
                  5. Other Qualification & Activities (If Any)
                </label>
                <input
                  type="file"
                  id="otherQualificationCert"
                  name="otherQualificationCert"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="file-input"
                />
                {formData.otherQualificationCert && (
                  <div className="file-info">
                    Selected: {formData.otherQualificationCert.name}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="casteCertificate">D. Caste Certificate</label>
              <input
                type="file"
                id="casteCertificate"
                name="casteCertificate"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="file-input"
              />
              {formData.casteCertificate && (
                <div className="file-info">
                  Selected: {formData.casteCertificate.name}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="referenceCertificate">
                E. Reference Certificate *
              </label>
              <input
                type="file"
                id="referenceCertificate"
                name="referenceCertificate"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="file-input"
              />
              {formData.referenceCertificate && (
                <div className="file-info">
                  Selected: {formData.referenceCertificate.name}
                </div>
              )}
            </div>
          </div>

          <div className="declaration-section">
            <p className="declaration-text">
              <strong>Above all information are true in my knowledge.</strong>
            </p>
            <p className="declaration-text">
              <strong>YOURS FAITHFULLY</strong>
            </p>

            <div className="form-group">
              <label htmlFor="fullNameCapital">
                Full Name (IN CAPITAL LETTERS) *
              </label>
              <input
                type="text"
                id="fullNameCapital"
                name="fullNameCapital"
                value={formData.fullNameCapital}
                onChange={handleInputChange}
                placeholder="ENTER YOUR NAME IN CAPITAL LETTERS"
                className="capital-input"
              />
            </div>

            <div className="signature-section">
              <div className="form-group">
                <label htmlFor="declarationDate">Date</label>
                <input
                  type="date"
                  id="declarationDate"
                  name="declarationDate"
                  value={formData.declarationDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} className="submit-button">
            Submit Recruitment Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
