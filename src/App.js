import React, { Component } from 'react';
import Edit from './Edit';
import LivePreview from './LivePreview';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        name: 'Parker',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: '',
      },
      education: [
        {
          school: '',
          location: '',
          degree: '',
          gpa: '',
          yearStarted: '',
          yearEnded: '',
        },
      ],
      experience: [
        {
          title: 'Sales Assistant',
          company: '',
          startDate: '',
          endDate: '',
          duties: '',
          location: '',
        },
      ],
      skills: [],
    };
  }

  handleProfileChange = (e) => {
    const attributeToChange = e.target.name;
    const valueToChange = e.target.value;
    this.setState((prevState) => ({
      profile: {
        ...prevState.profile,
        [attributeToChange]: valueToChange,
      },
    }));
  };

  handleEducationChange = (e, index) => {
    const attributeToChange = e.target.name;
    const valueToChange = e.target.value;
    this.setState((prevState) => {
      const newEducation = prevState.education.map((item, id) => {
        if (id === index) {
          return { ...item, [attributeToChange]: valueToChange };
        }
        return item;
      });
      return { education: [...newEducation] };
    });
  };

  handleAddEducation = (e) => {
    this.setState((prevState) => ({
      education: [
        ...prevState.education,
        {
          school: '',
          location: '',
          degree: '',
          gpa: '',
          yearStarted: '',
          yearEnded: '',
        },
      ],
    }));
  };

  handleExperienceChange = (e, index) => {
    const attributeToChange = e.target.name;
    const valueToChange = e.target.value;

    this.setState((prevState) => {
      const newExperience = prevState.experience.map((item, id) => {
        if (id === index) {
          return { ...item, [attributeToChange]: valueToChange };
        }
        return item;
      });
      return { experience: [...newExperience] };
    });

    console.log(this.state.experience);
  };

  handleAddExperience = (e) => {
    this.setState((prevState) => ({
      experience: [
        ...prevState.experience,
        {
          title: 'Sales Assistant',
          company: '',
          startDate: '',
          endDate: '',
          duties: '',
          location: '',
        },
      ],
    }));
  };

  handleSkillsChange = (e) => {
    const value = e.target.value;
    const skillsArray = value.split(',');
    this.setState((prevState) => ({
      skills: [...skillsArray],
    }));
  };

  render() {
    return (
      <div className="main-container">
        <div className="left">
          <Edit
            profile={this.state.profile}
            education={this.state.education}
            experience={this.state.experience}
            skills={this.state.skills}
            handleProfileChange={this.handleProfileChange}
            handleEducationChange={this.handleEducationChange}
            handleAddEducation={this.handleAddEducation}
            handleExperienceChange={this.handleExperienceChange}
            handleAddExperience={this.handleAddExperience}
            handleSkillsChange={this.handleSkillsChange}
          />
        </div>
        <div className="right">
          <LivePreview
            profile={this.state.profile}
            education={this.state.education}
            experience={this.state.experience}
            skills={this.state.skills}
          />
        </div>
      </div>
    );
  }
}

export default App;
