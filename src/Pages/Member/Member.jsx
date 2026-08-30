import React from "react";
import "./Member.css";
import member1 from "../../assets/member1.jpeg";
import member2 from "../../assets/member2.jpeg";
import member3 from "../../assets/member3.jpeg";
import member4 from "../../assets/member4.jpeg";
import member5 from "../../assets/member5.jpeg";
import member6 from "../../assets/member6.jpeg";

const Member = () => {
  const members = [
    {
      name: "Aloke Kumar Das",
      role: "Founding Member & Managing Trustee",
      details: [],
      photo: member1,
    },
    {
      name: "Soma Sarkar",
      role: "Trustee Member",
      details: ["M.Sc Assistant Teacher Government Aided School"],
      photo: member2,
    },
    {
      name: "Anuranan Das",
      role: "Trustee Member",
      details: ["IIT M.Tech Software Developer"],
      photo: member3,
    },
    {
      name: "Justice Murari Prasad Srivastava",
      role: "Adviser",
      details: ["High Court"],
      photo: member4,
    },
    {
      name: "Srikant Mahata",
      role: "Adviser",
      details: ["M.I.C West Bengal"],
      photo: member5,
    },
    {
      name: "Jagabandhu Hansda",
      role: "Adviser",
      details: ["Deputy General Manager BSNL"],
      photo: member6,
    },
  ];

  return (
    <div className="members-page">
      <div className="header">
        <h1>Organization Members</h1>
      </div>

      <div className="container">
        <div className="section">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-photo">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <div className="placeholder-photo">No Photo</div>
                )}
              </div>
              <div className="member-info">
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
                {member.details.length > 0 && (
                  <div className="member-details">
                    {member.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className={
                          idx === 0 && detail.includes("M.")
                            ? "qualification"
                            : ""
                        }
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
