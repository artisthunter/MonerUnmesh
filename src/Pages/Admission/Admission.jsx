import React, { useState } from "react";
import "./Admission.css";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import logo2 from "../../assets/logo2.png";

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    aadhaarNo: "",
    dob: "",

    fatherName: "",
    fatherMobile: "",
    fatherEmail: "",
    fatherHomeAddress: "",
    fatherWorkAddress: "",
    fatherOccupation: "",
    fatherIncome: "",

    motherName: "",
    motherMobile: "",
    motherEmail: "",
    motherHomeAddress: "",
    motherWorkAddress: "",
    motherOccupation: "",
    motherIncome: "",

    height: "",
    weight: "",
    bloodGroup: "",
    allergicTo: "",
    majorHealthProblem: "",
    chronicHealthProblem: "",
    identificationMarks: "",
    familyHealthCondition: "",

    previousAdmission: "",
    previousAdmissionDetails: "",
    pastSchoolName: "",
    admissionClass: "",
    yearOfAdmission: "",
    yearOfLeaving: "",
    reasonForLeaving: "",

    reasonForChoosingSchool: "",
    specialActivity: "",
    specialBehavior: "",

    guardianName: "",
    declarationDate: "",
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
    alert("Admission form submitted successfully! Check console for details.");
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
            <h2>Admission Form</h2>
          </div>

          <div className="desktop-contact-info">
            <ContactInfo />
          </div>
        </div>

        <div className="admission-form">
          <div className="mobile-contact-info">
            <ContactInfo />
          </div>
          <div className="form-section">
            <h3>1. Student Information</h3>

            <div className="form-group">
              <label htmlFor="studentName">Name of Student *</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="aadhaarNo">Aadhaar Card No *</label>
                <input
                  type="text"
                  id="aadhaarNo"
                  name="aadhaarNo"
                  value={formData.aadhaarNo}
                  onChange={handleInputChange}
                  placeholder="XXXX-XXXX-XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth *</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>2. Father's Information</h3>

            <div className="form-group">
              <label htmlFor="fatherName">Name of Father *</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fatherMobile">Father's Mobile No *</label>
                <input
                  type="tel"
                  id="fatherMobile"
                  name="fatherMobile"
                  value={formData.fatherMobile}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fatherEmail">Email ID</label>
                <input
                  type="email"
                  id="fatherEmail"
                  name="fatherEmail"
                  value={formData.fatherEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fatherHomeAddress">Father's Home Address *</label>
              <textarea
                id="fatherHomeAddress"
                name="fatherHomeAddress"
                value={formData.fatherHomeAddress}
                onChange={handleInputChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fatherWorkAddress">
                Father's Address of Working Place
              </label>
              <textarea
                id="fatherWorkAddress"
                name="fatherWorkAddress"
                value={formData.fatherWorkAddress}
                onChange={handleInputChange}
                rows="2"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fatherOccupation">Father's Occupation *</label>
                <input
                  type="text"
                  id="fatherOccupation"
                  name="fatherOccupation"
                  value={formData.fatherOccupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fatherIncome">Father's Annual Income *</label>
                <input
                  type="text"
                  id="fatherIncome"
                  name="fatherIncome"
                  value={formData.fatherIncome}
                  onChange={handleInputChange}
                  placeholder="₹"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>3. Mother's Information</h3>

            <div className="form-group">
              <label htmlFor="motherName">Mother's Name *</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="motherMobile">Mother's Mobile No *</label>
                <input
                  type="tel"
                  id="motherMobile"
                  name="motherMobile"
                  value={formData.motherMobile}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="motherEmail">Email ID</label>
                <input
                  type="email"
                  id="motherEmail"
                  name="motherEmail"
                  value={formData.motherEmail}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="motherHomeAddress">Mother's Home Address *</label>
              <textarea
                id="motherHomeAddress"
                name="motherHomeAddress"
                value={formData.motherHomeAddress}
                onChange={handleInputChange}
                rows="3"
              />
            </div>

            <div className="form-group">
              <label htmlFor="motherWorkAddress">
                Mother's Address of Working Place
              </label>
              <textarea
                id="motherWorkAddress"
                name="motherWorkAddress"
                value={formData.motherWorkAddress}
                onChange={handleInputChange}
                rows="2"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="motherOccupation">Mother's Occupation *</label>
                <input
                  type="text"
                  id="motherOccupation"
                  name="motherOccupation"
                  value={formData.motherOccupation}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="motherIncome">Mother's Annual Income *</label>
                <input
                  type="text"
                  id="motherIncome"
                  name="motherIncome"
                  value={formData.motherIncome}
                  onChange={handleInputChange}
                  placeholder="₹"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>4. Medical History</h3>

            <div className="form-row medical-row">
              <div className="form-group">
                <label htmlFor="height">Height</label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="cm"
                />
              </div>

              <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="kg"
                />
              </div>

              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="allergicTo">Allergic To</label>
              <input
                type="text"
                id="allergicTo"
                name="allergicTo"
                value={formData.allergicTo}
                onChange={handleInputChange}
                placeholder="List any allergies"
              />
            </div>

            <div className="form-group">
              <label htmlFor="majorHealthProblem">Major Health Problem</label>
              <textarea
                id="majorHealthProblem"
                name="majorHealthProblem"
                value={formData.majorHealthProblem}
                onChange={handleInputChange}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="chronicHealthProblem">
                Chronic Health Problem
              </label>
              <textarea
                id="chronicHealthProblem"
                name="chronicHealthProblem"
                value={formData.chronicHealthProblem}
                onChange={handleInputChange}
                rows="2"
              />
            </div>

            <div className="form-group">
              <label htmlFor="identificationMarks">Identification Marks</label>
              <input
                type="text"
                id="identificationMarks"
                name="identificationMarks"
                value={formData.identificationMarks}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="familyHealthCondition">
                Health Condition of Mother/Father/Brother/Sister
              </label>
              <textarea
                id="familyHealthCondition"
                name="familyHealthCondition"
                value={formData.familyHealthCondition}
                onChange={handleInputChange}
                rows="3"
                placeholder="Please describe any relevant family health conditions"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>5. Academic History</h3>

            <div className="form-group">
              <label>Did You Get Admission Before in Any Institution? *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="previousAdmission"
                    value="yes"
                    checked={formData.previousAdmission === "yes"}
                    onChange={handleInputChange}
                  />
                  <span>Yes</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="previousAdmission"
                    value="no"
                    checked={formData.previousAdmission === "no"}
                    onChange={handleInputChange}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            {formData.previousAdmission === "yes" && (
              <div className="conditional-section">
                <div className="form-group">
                  <label htmlFor="previousAdmissionDetails">
                    Provide History in Details
                  </label>
                  <textarea
                    id="previousAdmissionDetails"
                    name="previousAdmissionDetails"
                    value={formData.previousAdmissionDetails}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pastSchoolName">Past School Name</label>
                  <input
                    type="text"
                    id="pastSchoolName"
                    name="pastSchoolName"
                    value={formData.pastSchoolName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="admissionClass">
                    In Which Class Student Got Admission
                  </label>
                  <input
                    type="text"
                    id="admissionClass"
                    name="admissionClass"
                    value={formData.admissionClass}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="yearOfAdmission">Year of Admission</label>
                    <input
                      type="text"
                      id="yearOfAdmission"
                      name="yearOfAdmission"
                      value={formData.yearOfAdmission}
                      onChange={handleInputChange}
                      placeholder="YYYY"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="yearOfLeaving">
                      Year of Leaving School
                    </label>
                    <input
                      type="text"
                      id="yearOfLeaving"
                      name="yearOfLeaving"
                      value={formData.yearOfLeaving}
                      onChange={handleInputChange}
                      placeholder="YYYY"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reasonForLeaving">
                    Causes of School Leaving (Submit School Leaving Certificate)
                  </label>
                  <textarea
                    id="reasonForLeaving"
                    name="reasonForLeaving"
                    value={formData.reasonForLeaving}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="form-section">
            <h3>6. Causes of Choosing This School</h3>

            <div className="form-group">
              <label htmlFor="reasonForChoosingSchool">
                Causes of Choosing This School for Admission *
              </label>
              <textarea
                id="reasonForChoosingSchool"
                name="reasonForChoosingSchool"
                value={formData.reasonForChoosingSchool}
                onChange={handleInputChange}
                rows="4"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>7. Special Activities</h3>

            <div className="form-group">
              <label htmlFor="specialActivity">
                Inclined to Any Special Activity
              </label>
              <textarea
                id="specialActivity"
                name="specialActivity"
                value={formData.specialActivity}
                onChange={handleInputChange}
                rows="3"
                placeholder="e.g., Sports, Music, Art, Dance, etc."
              />
            </div>
          </div>

          <div className="form-section">
            <h3>8. Behavioral Information</h3>

            <div className="form-group">
              <label htmlFor="specialBehavior">Any Special Behavior</label>
              <textarea
                id="specialBehavior"
                name="specialBehavior"
                value={formData.specialBehavior}
                onChange={handleInputChange}
                rows="3"
              />
            </div>
          </div>

          <div className="declaration-section">
            <p className="declaration-text">
              <strong>
                Above all informations are true to the best of my knowledge.
              </strong>
            </p>

            <div className="form-rows">
              <div className="form-group">
                <label htmlFor="guardianName">
                  Name of the Parents/Guardian *
                </label>
                <input
                  type="text"
                  id="guardianName"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="declarationDate">Date *</label>
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

          <div className="approval-section">
            <h3>For Office Use Only</h3>
            <div className="form-rows">
              <div className="approval-box">
                <p>
                  <strong>Approved By:</strong>
                </p>
                <p>Managing Trustee/Principal</p>
                <div className="signature-line"></div>
                <p className="small-text">Signature with Seal and Date</p>
              </div>

              <div className="approval-box">
                <p>
                  <strong>Name of the Mentor:</strong>
                </p>
                <div className="signature-line"></div>
                <p className="small-text">Signature</p>
              </div>
            </div>
          </div>

          <button onClick={handleSubmit} className="submit-button">
            Submit Admission Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admission;
