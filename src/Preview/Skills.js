import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const skillArray = this.props.skills;
    return (
      <ul>
        {skillArray.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    );
  }
}

export default Skills;
