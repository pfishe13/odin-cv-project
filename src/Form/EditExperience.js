import React from 'react';
import SingleExperience from './SingleExperience';

const EditExperience = ({ experience, handleExperienceChange }) => {
  console.log(experience);
  const experienceItems = experience.map((item, index) => (
    <SingleExperience
      key={index}
      id={index}
      experience={item}
      handleExperienceChange={handleExperienceChange}
    />
  ));

  console.log(experienceItems);

  return <div>{experienceItems}</div>;
};

export default EditExperience;
