import React, { Component } from 'react';
import Profile from './Preview/Profile';
import Education from './Preview/Education';

class LivePreview extends Component {
  state = {};
  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
        <Education education={this.props.education} />
      </div>
    );
  }
}

export default LivePreview;
