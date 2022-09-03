import React, { Component } from 'react';
import Edit from './Edit';
import LivePreview from './LivePreview';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        name: 'Parker Fisher',
        address: '951 Newport Rd.',
        city: 'Akron',
        state: 'OH',
        zip: '44303',
        email: 'pfishe@kent.edu',
        phone: '3308424030',
      },
      education: [
        {
          school: 'Kent State University',
          location: 'Kent, OH',
          degree: '',
          gpa: '',
          yearStarted: '',
          yearEnded: '',
        },
      ],
      experience: [
        {
          title: 'Sales Assistant',
          company: 'Fat Ts',
          startDate: 'May 2020',
          endDate: 'Present',
          duties: [
            'Test, i do some cool stuff fjfjjfjfjfjfjfjjffjfjfjfjfjfjfjfjfjfjfjfffhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhfhhfhfhfhhfhfbfbfbfbfbfbbfbffbfffbfbfbbfbfbf',
          ],
          location: 'Akron, OH',
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
    let valueToChange = e.target.value;
    let dutiesArray;
    if (attributeToChange === 'duties') {
      dutiesArray = valueToChange.split('\n');
      valueToChange = [...dutiesArray];
    }

    console.log(dutiesArray);

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
          duties: [''],
          location: '',
        },
      ],
    }));
  };

  handleDeleteExperience = (e, index) => {
    console.log(e);
    console.log('In delete');
    this.setState((prevState) => {
      const newExperience = prevState.experience.filter((item, id) => {
        return id !== index;
      });
      return { experience: [...newExperience] };
    });

    console.log(this.state.experience);
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
            handleDeleteExperience={this.handleDeleteExperience}
            handleAddExperience={this.handleAddExperience}
            handleSkillsChange={this.handleSkillsChange}
          />
        </div>
        <div className="right">
          <div className="resume">
            <LivePreview
              profile={this.state.profile}
              education={this.state.education}
              experience={this.state.experience}
              skills={this.state.skills}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
