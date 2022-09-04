import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    if (this.props.profile.address === '')
      return (
        <div className="profile-container">
          <h1>{this.props.profile.name}</h1>
          <h4>
            {this.props.profile.email} • {this.props.profile.phone}
          </h4>
        </div>
      );
    return (
      <div className="profile-container">
        <h1>{this.props.profile.name}</h1>
        <h4>
          {this.props.profile.address} {this.props.profile.city},{' '}
          {this.props.profile.state} {this.props.profile.zip} •{' '}
          {this.props.profile.email} • {this.props.profile.phone}
        </h4>
      </div>
    );
  }
}

export default Profile;
