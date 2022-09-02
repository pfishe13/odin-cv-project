import React, { Component } from 'react';

class SingleEducation extends Component {
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
              onChange={(e) =>
                this.props.handleEducationChange(e, this.props.id)
              }
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
              onChange={(e) =>
                this.props.handleEducationChange(e, this.props.id)
              }
            ></input>
          </label>
          <label>
            Degree:
            <input
              name="degree"
              type="text"
              value={this.props.education.degree}
              onChange={(e) =>
                this.props.handleEducationChange(e, this.props.id)
              }
            ></input>
          </label>
          <label>
            GPA:
            <input
              name="gpa"
              type="text"
              value={this.props.education.gpa}
              onChange={(e) =>
                this.props.handleEducationChange(e, this.props.id)
              }
            ></input>
          </label>
          <label>
            Year Started:
            <input
              name="yearStarted"
              type="text"
              value={this.props.education.yearStarted}
              onChange={(e) =>
                this.props.handleEducationChange(e, this.props.id)
              }
            ></input>
          </label>
          <label>
            Year Ended:
            <input
              name="yearEnded"
              type="text"
              value={this.props.education.yearEnded}
              onChange={(e) =>
                this.props.handleEducationChange(e, this.props.id)
              }
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default SingleEducation;