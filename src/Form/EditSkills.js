import React, { Component } from 'react';

class EditSkills extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <label>
            Skills (Seperated by comma):
            <input
              name="skills"
              type="text"
              onChange={this.props.handleSkillsChange}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default EditSkills;
