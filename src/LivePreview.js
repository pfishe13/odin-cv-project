import React, { Component } from 'react';
import Profile from './Preview/Profile';
import Education from './Preview/Education';
import Experience from './Preview/Experience';
import Skills from './Preview/Skills';
import Project from './Preview/Project';

class LivePreview extends Component {
  state = {};
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
        <Education education={this.props.education} />
        <Project projects={this.props.projects} />
        <Experience experience={this.props.experience} />
        <Skills skills={this.props.skills} />
      </div>
    );
  }
}

export default LivePreview;
