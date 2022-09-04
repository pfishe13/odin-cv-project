import React, { Component } from 'react';

class Project extends Component {
  state = {};
  render() {
    const projects = this.props.projects;

    if (projects.length === 0) return;
    return (
      <div className="section-container">
        <hr />
        <h1 className="section-header">Projects</h1>
        <hr />
        {projects.map((item, index) => {
          return (
            <div className="section-body" key={index}>
              <div className="education-experience-title">
                <h2>{item.name}</h2>
                <h2>{item.date}</h2>
              </div>
              <div>
                <h3>{item.link}</h3>
              </div>
              <ul>
                {item.description.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Project;
