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
    };

    this.handleProfileChange = this.handleProfileChange.bind(this);
    // this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleProfileChange = (e) => {
    const attributeToChange = e.target.name;
    const valueToChange = e.target.value;
    // console.log(attributeToChange);
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
    // console.log(attributeToChange);
    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [attributeToChange]: valueToChange,
      },
    }));
  };

  // handleAddressChange(e) {
  //   this.setState((prevState) => ({
  //     profile: {
  //       name: this.state.profile.name,
  //       address: e.target.value,
  //     },
  //   }));
  // }

  // handleCityChange = (e) => {
  //   this.setState((prevState) => ({
  //     profile: {
  //       city: e.target.value,
  //     },
  //   }));
  // };

  // handleStateChange(e) {
  //   this.setState((prevState) => ({
  //     profile: {
  //       state: e.target.value,
  //     },
  //   }));
  // }

  // handleZipChange(e) {
  //   this.setState((prevState) => ({
  //     profile: {
  //       zip: e.target.value,
  //     },
  //   }));
  // }

  render() {
    return (
      <div className="main-container">
        <div className="left">
          <Edit
            profile={this.state.profile}
            education={this.state.education}
            handleProfileChange={this.handleProfileChange}
            handleEducationChange={this.handleEducationChange}
          />
        </div>
        <div className="right">
          <LivePreview
            profile={this.state.profile}
            education={this.state.education}
          />
        </div>
      </div>
    );
  }
}

export default App;
