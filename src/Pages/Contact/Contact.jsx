import React from "react";
import "./Contact.css";

const Contact = () => {
  const contactData = {
    "Query Related Contacts": {
      names: ["Mr. Aloke Kumar Das"],
      numbers: ["+91 8240362550"],
    },
    "Collaboration Related Contacts": {
      names: ["Ms. Soma Sarkar", "Mr. Aloke Kumar Das"],
      numbers: ["+91 9836996411", "+91 8240362550"],
    },
    "Admission Related Contacts": {
      names: ["Mr. Sanatan Murmu", "Mr. Aloke Kumar Das"],
      numbers: ["+91 8348708459", "+91 8240362550"],
    },
    "Recruitment Related Contacts": {
      names: ["Mr. Aloke Kumar Das"],
      numbers: ["+91 8240362550"],
    },
    "Donation Related Contacts": {
      names: ["Mr. Anuranan Das", "Mr. Aloke Kumar Das"],
      numbers: ["+91 9123712634", "+91 8240362550"],
    },
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Get in touch with us for any queries or assistance
        </p>
      </div>

      <div className="contact-sections">
        {Object.entries(contactData).map(([category, data]) => (
          <div key={category} className="contact-category">
            <h2 className="contact-category-title">{category}</h2>
            <div className="contact-list">
              {data.names.map((name, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-info">
                    <p className="contact-name">{name}</p>
                    <a
                      href={`tel:${data.numbers[index]}`}
                      className="contact-number"
                    >
                      <span>{data.numbers[index]}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
