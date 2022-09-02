import React, { Component } from 'react';

class Education extends Component {
  state = {};
  render() {
    const education = this.props.education;
    return (
      <div>
        {education.map((item, index) => {
          return (
            <div key={index}>
              <h2>
                {item.school} - {item.location}
              </h2>
              <div>
                <h3>{item.degree}</h3>
                <h3>
                  {item.yearStarted} - {item.yearEnded}
                </h3>
              </div>
              <h3>{item.gpa}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
