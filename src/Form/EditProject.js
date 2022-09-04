import React from 'react';
import SingleProject from './SingleProject';

const EditProjects = ({
  projects,
  handleProjectChange,
  handleAddProject,
  handleDeleteProject,
}) => {
  const projectItems = projects.map((item, index) => (
    <SingleProject
      key={index}
      id={index}
      project={item}
      handleProjectChange={handleProjectChange}
      handleDeleteProject={handleDeleteProject}
    />
  ));
  if (projectItems.length > 2) {
    return (
      <div>
        <h1>Projects</h1>
        <div>{projectItems}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="add-button-container">
          <h1>Projects</h1>
          <button onClick={handleAddProject}>Add</button>
        </div>
        <div>{projectItems}</div>
      </div>
    );
  }
};

export default EditProjects;
