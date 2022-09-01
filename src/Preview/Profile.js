import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.profile.name}</h1>
        <h3>
          {this.props.profile.address} {this.props.profile.city},
          {this.props.profile.state} {this.props.profile.zip}
        </h3>
        <h3>
          {this.props.profile.email}
          {this.props.profile.phone}
        </h3>
      </div>
    );
  }
}

export default Profile;
