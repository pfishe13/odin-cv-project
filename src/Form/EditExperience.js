import React from 'react';
import SingleExperience from './SingleExperience';

const EditExperience = ({
  experience,
  handleExperienceChange,
  handleAddExperience,
}) => {
  const experienceItems = experience.map((item, index) => (
    <SingleExperience
      key={index}
      id={index}
      experience={item}
      handleExperienceChange={handleExperienceChange}
    />
  ));

  return (
    <div>
      <div>{experienceItems}</div>
      <button onClick={handleAddExperience}>Add Experience</button>
    </div>
  );
};

export default EditExperience;