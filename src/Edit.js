import React, { Component } from 'react';
import EditProfile from './Form/EditProfile';
import EditEducation from './Form/EditEducation';

class Edit extends Component {
  //   constructor(props) {
  //     super(props);
  //     // state = {};
  //   }
  render() {
    return (
      <div>
        <EditProfile
          profile={this.props.profile}
          handleProfileChange={this.props.handleProfileChange}
        />
        <EditEducation
          education={this.props.education}
          handleEducationChange={this.props.handleEducationChange}
        />
      </div>
    );
  }
}

export default Edit;
