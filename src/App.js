import React, { Component } from 'react';
import Edit from './Edit';
import LivePreview from './LivePreview';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        name: 'First Last',
        address: '123 ABC St.',
        city: 'City',
        state: 'State',
        zip: '12345',
        email: 'email@email.com',
        phone: '123-456-7890',
      },
      education: [
        {
          school: 'My University',
          location: 'City, State',
          degree: 'Degree',
          gpa: 'G.PA',
          yearStarted: 'XXXX',
          yearEnded: 'XXXX',
        },
      ],
      experience: [
        {
          title: 'My Position Title',
          company: 'My Company',
          startDate: 'XXXX',
          endDate: 'XXXX',
          duties: ['What do I do?'],
          location: 'City, State',
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

  handleDeleteEducation = (e, index) => {
    this.setState((prevState) => {
      const newEducation = prevState.education.filter((item, id) => {
        return id !== index;
      });
      return { education: [...newEducation] };
    });

    console.log(this.state.education);
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
            handleDeleteEducation={this.handleDeleteEducation}
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
