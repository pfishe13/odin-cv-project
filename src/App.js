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
      education: {
        school: '',
        location: '',
        degree: '',
        gpa: '',
        yearStarted: '',
        yearEnded: '',
      },
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

  handleEducationChange = (e) => {
    const attributeToChange = e.target.name;
    const valueToChange = e.target.value;
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [attributeToChange]: valueToChange,
      },
    }));
  };

  handleExperienceChange = (e, index) => {
    console.log(index);
    const attributeToChange = e.target.name;
    const valueToChange = e.target.value;
    this.setState((prevState) => ({
      experience: {
        ...prevState.experience,
        [attributeToChange]: valueToChange,
      },
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
            handleExperienceChange={this.handleExperienceChange}
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
