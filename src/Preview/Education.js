import React, { Component } from 'react';

class Education extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>
          {this.props.education.school} - {this.props.education.location}
        </h2>
        <div>
          <h3>{this.props.education.degree}</h3>
          <h3>
            {this.props.education.yearStarted} -{' '}
            {this.props.education.yearEnded}
          </h3>
        </div>
        <h3>{this.props.education.gpa}</h3>
      </div>
    );
  }
}

export default Education;
