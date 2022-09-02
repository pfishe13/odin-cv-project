import React, { Component } from 'react';
import SingleEducation from './SingleEducation';

const EditEducation = ({
  education,
  handleEducationChange,
  handleAddEducation,
}) => {
  const educationItems = education.map((item, index) => (
    <SingleEducation
      key={index}
      id={index}
      education={item}
      handleEducationChange={handleEducationChange}
    />
  ));

  return (
    <div>
      <h1>Education </h1>
      <div>{educationItems}</div>
      <button onClick={handleAddEducation}>Add education</button>
    </div>
  );
};

export default EditEducation;
