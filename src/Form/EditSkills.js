import React, { Component } from 'react';

class EditSkills extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Skills</h1>

        <form>
          <label>
            List of skills (Seperated by comma):
            <textarea
              name="skills"
              type="text"
              onChange={this.props.handleSkillsChange}
            ></textarea>
          </label>
        </form>
      </div>
    );
  }
}

export default EditSkills;
