import React, { Component } from 'react';

class Education extends Component {
  state = {};
  render() {
    const education = this.props.education;
    return (
      <div className="section-container">
        <hr />
        <h1 className="section-header">Education</h1>
        <hr />

        {education.map((item, index) => {
          return (
            <div className="section-body" key={index}>
              <div className="education-experience-title">
                <h2>{item.school}</h2>
                <h2>
                  {item.yearStarted} - {item.yearEnded}
                </h2>
              </div>
              <div>
                <h3>{item.degree}</h3>
                <h3>{item.location}</h3>
              </div>
              <ul>
                <li>GPA: {item.gpa}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
