import React, { Component } from 'react';

class Experience extends Component {
  state = {};
  render() {
    const experience = this.props.experience;
    return (
      <div className="section-container">
        <hr />
        <h1 className="section-header">Experience</h1>
        <hr />
        {experience.map((item, index) => {
          return (
            <div className="section-body" key={index}>
              <div className="education-experience-title">
                <h2>{item.title}</h2>
                <h2>
                  {item.startDate} - {item.endDate}
                </h2>
              </div>
              <div>
                <h3>{item.company}</h3>
                <h3>{item.location}</h3>
              </div>
              <ul>
                <li>{item.duties}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;
