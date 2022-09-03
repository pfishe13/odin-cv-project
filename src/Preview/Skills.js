import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const skillArray = this.props.skills;
    return (
      <div className="section-container">
        <hr />
        <h1 className="section-header">Skills</h1>
        <hr />
        <div className="skills-list">
          {skillArray.map((skill, index) => {
            return <span key={index}>{skill}</span>;
          })}
        </div>
      </div>
    );
  }
}

export default Skills;
