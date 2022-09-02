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

        <ul>
          {skillArray.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
