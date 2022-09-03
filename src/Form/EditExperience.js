import React from 'react';
import SingleExperience from './SingleExperience';

const EditExperience = ({
  experience,
  handleExperienceChange,
  handleAddExperience,
  handleDeleteExperience,
}) => {
  const experienceItems = experience.map((item, index) => (
    <SingleExperience
      key={index}
      id={index}
      experience={item}
      handleExperienceChange={handleExperienceChange}
      handleDeleteExperience={handleDeleteExperience}
    />
  ));

  if (experienceItems.length > 2) {
    return (
      <div>
        <h1>Work Experience</h1>
        <div>{experienceItems}</div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Work Experience</h1>
        <div>{experienceItems}</div>
        <button onClick={handleAddExperience}>Add Experience</button>
      </div>
    );
  }
};

export default EditExperience;
