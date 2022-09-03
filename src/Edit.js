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
        <div className="directions">
          <h1>Build your Resume</h1>
          <h4>
            Enter your information below. The data will automatically populate
            the resume on the right.
          </h4>
        </div>
        <div className="edit-containers">
          <EditProfile
            profile={this.props.profile}
            handleProfileChange={this.props.handleProfileChange}
          />
          <EditEducation
            education={this.props.education}
            handleEducationChange={this.props.handleEducationChange}
            handleAddEducation={this.props.handleAddEducation}
            handleDeleteEducation={this.props.handleDeleteEducation}
          />
          <EditExperience
            experience={this.props.experience}
            handleExperienceChange={this.props.handleExperienceChange}
            handleAddExperience={this.props.handleAddExperience}
            handleDeleteExperience={this.props.handleDeleteExperience}
          />
          <EditSkills
            skills={this.props.skills}
            handleSkillsChange={this.props.handleSkillsChange}
          />
        </div>
      </div>
    );
  }
}

export default Edit;
