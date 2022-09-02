import React, { Component } from 'react';
import EditProfile from './Form/EditProfile';
import EditEducation from './Form/EditEducation';
import EditExperience from './Form/EditExperience';
import EditSkills from './Form/EditSkills';

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
          handleAddEducation={this.props.handleAddEducation}
        />
        <EditExperience
          experience={this.props.experience}
          handleExperienceChange={this.props.handleExperienceChange}
          handleAddExperience={this.props.handleAddExperience}
        />
        <EditSkills
          skills={this.props.skills}
          handleSkillsChange={this.props.handleSkillsChange}
        />
      </div>
    );
  }
}

export default Edit;
