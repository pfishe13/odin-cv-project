import React, { Component } from 'react';

class EditProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Personal Information</h1>
        <form>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.props.profile.name}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
        </form>
        <form>
          <label>
            Address:
            <input
              name="address"
              type="text"
              value={this.props.profile.address}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
          <label>
            City:
            <input
              name="city"
              type="text"
              value={this.props.profile.city}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
          <label>
            State:
            <input
              name="state"
              type="text"
              value={this.props.profile.state}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
          <label>
            Zip:
            <input
              name="zip"
              type="text"
              value={this.props.profile.zip}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.props.profile.email}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
          <label>
            Phone Number:
            <input
              name="phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={this.props.profile.phone}
              onChange={this.props.handleProfileChange}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default EditProfile;
