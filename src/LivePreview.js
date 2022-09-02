import React, { Component } from 'react';
import Profile from './Preview/Profile';
import Education from './Preview/Education';
import Experience from './Preview/Experience';
import Skills from './Preview/Skills';

class LivePreview extends Component {
  state = {};
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
        <Education education={this.props.education} />
        <Experience experience={this.props.experience} />
        <Skills skills={this.props.skills} />
      </div>
    );
  }
}

export default LivePreview;
