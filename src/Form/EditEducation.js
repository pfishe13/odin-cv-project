import React, { Component } from 'react';

class EditEducation extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>
            School:
            <input
              name="school"
              type="text"
              value={this.props.education.school}
              onChange={this.props.handleEducationChange}
            ></input>
          </label>
        </form>
        <form>
          <label>
            Location:
            <input
              name="location"
              type="text"
              value={this.props.education.location}
              onChange={this.props.handleEducationChange}
            ></input>
          </label>
          <label>
            Degree:
            <input
              name="degree"
              type="text"
              value={this.props.education.degree}
              onChange={this.props.handleEducationChange}
            ></input>
          </label>
          <label>
            GPA:
            <input
              name="gpa"
              type="text"
              value={this.props.education.gpa}
              onChange={this.props.handleEducationChange}
            ></input>
          </label>
          <label>
            Year Started:
            <input
              name="yearStarted"
              type="text"
              value={this.props.education.yearStarted}
              onChange={this.props.handleEducationChange}
            ></input>
          </label>
          <label>
            Year Ended:
            <input
              name="yearEnded"
              type="text"
              value={this.props.education.yearEnded}
              onChange={this.props.handleEducationChange}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default EditEducation;
