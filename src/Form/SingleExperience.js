import React, { Component } from 'react';

class SingleExperience extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>
            Title:
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
              Company:
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
              Start Date:
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
              End Date:
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
              Duties (Put each duty on a new line):
              <textarea
                name="duties"
                type="text"
                value={this.props.experience.duties.join('\n')}
                onChange={(e) =>
                  this.props.handleExperienceChange(e, this.props.id)
                }
              ></textarea>
            </label>
          </div>
        </form>
        <button
          onClick={(e) => this.props.handleDeleteExperience(e, this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default SingleExperience;
