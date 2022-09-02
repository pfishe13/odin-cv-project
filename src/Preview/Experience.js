import React, { Component } from 'react';

class Experience extends Component {
  state = {};
  render() {
    const experience = this.props.experience;
    return (
      <div>
        {experience.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <h3>{item.company}</h3>
              <div>
                <h3>{item.location}</h3>
                <h3>
                  {item.startDate} - {item.endDate}
                </h3>
              </div>
              <h3>{item.duties}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;
