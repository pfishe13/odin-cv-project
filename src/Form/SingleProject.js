import React, { Component } from 'react';

class SingleProject extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <div>
            <label>
              Name of Project:
              <input
                name="name"
                type="text"
                value={this.props.project.name}
                onChange={(e) =>
                  this.props.handleProjectChange(e, this.props.id)
                }
              ></input>
            </label>
            <label>
              Link:
              <input
                name="link"
                type="text"
                value={this.props.project.link}
                onChange={(e) =>
                  this.props.handleProjectChange(e, this.props.id)
                }
              ></input>
            </label>
          </div>
          <div>
            <label>
              Date:
              <input
                name="date"
                type="text"
                value={this.props.project.date}
                onChange={(e) =>
                  this.props.handleProjectChange(e, this.props.id)
                }
              ></input>
            </label>
            <label>
              Description (Put each bullet on a new line):
              <textarea
                name="description"
                type="text"
                value={this.props.project.description.join('\n')}
                onChange={(e) =>
                  this.props.handleProjectChange(e, this.props.id)
                }
              ></textarea>
            </label>
          </div>
        </form>
        <button
          className="delete-button"
          onClick={(e) => this.props.handleDeleteProject(e, this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default SingleProject;
