import React, { Component } from 'react';

class SingleExperience extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>
            title:
            <input
              name="title"
              type="text"
              value={this.props.experience.title}
              onChange={(e) =>
                this.props.handleExperienceChange(e, this.props.id)
              }
            ></input>
          </label>
          <div>
            <label>
              company:
              <input
                name="company"
                type="text"
                value={this.props.experience.company}
                onChange={(e) =>
                  this.props.handleExperienceChange(e, this.props.id)
                }
              ></input>
            </label>
            <label>
              Location:
              <input
                name="location"
                type="text"
                value={this.props.experience.location}
                onChange={(e) =>
                  this.props.handleExperienceChange(e, this.props.id)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              startDate:
              <input
                name="startDate"
                type="text"
                value={this.props.experience.startDate}
                onChange={(e) =>
                  this.props.handleExperienceChange(e, this.props.id)
                }
              ></input>
            </label>
            <label>
              endDate:
              <input
                name="endDate"
                type="text"
                value={this.props.experience.endDate}
                onChange={(e) =>
                  this.props.handleExperienceChange(e, this.props.id)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              Duties:
              <textarea
                name="duties"
                type="text"
                value={this.props.experience.duties}
                onChange={(e) =>
                  this.props.handleExperienceChange(e, this.props.id)
                }
              ></textarea>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SingleExperience;
