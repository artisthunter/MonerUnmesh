import React from 'react'
import "./ContactInfo.css"
import { useLocation } from 'react-router-dom';

const ContactInfo = () => {
  const location = useLocation();
  
  const contactData = {
    '/query': {
      names: ['Mr. Aloke Kumar Das'],
      numbers: ['+91 8240362550']
    },
    '/collaboration': {
      names: ['Ms. Soma Sarkar', 'Mr. Aloke Kumar Das'],
      numbers: ['+91 9836996411', '+91 8240362550']
    },
    '/admission': {
      names: ['Mr. Sanatan Murmu', 'Mr. Aloke Kumar Das'],
      numbers: ['+91 8348708459', '+91 8240362550']
    },
    '/recruitment': {
      names: ['Mr. Aloke Kumar Das'],
      numbers: ['+91 8240362550']
    },
    '/donation': {
      names: ['Mr. Anuranan Das', 'Mr. Aloke Kumar Das'],
      numbers: ['+91 9123712634', '+91 8240362550']
    }
  };
  
  const currentContacts = contactData[location.pathname];
  
  if (!currentContacts) return null;
  
  return (
    <div className="contact-info-container">
      <h3>Contact Information</h3>
      {currentContacts.names.map((name, index) => (
        <div key={index} className="contact-item">
          <p className="name">{name}</p>
          <p className="mobile">
            <a href={`tel:${currentContacts.numbers[index]}`}>
              {currentContacts.numbers[index]}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;