import React, { Component } from 'react';
import SingleEducation from './SingleEducation';

const EditEducation = ({
  education,
  handleEducationChange,
  handleAddEducation,
  handleDeleteEducation,
}) => {
  const educationItems = education.map((item, index) => (
    <SingleEducation
      key={index}
      id={index}
      education={item}
      handleEducationChange={handleEducationChange}
      handleDeleteEducation={handleDeleteEducation}
    />
  ));

  if (educationItems.length > 1) {
    return (
      <div>
        <h1>Education </h1>
        <div>{educationItems}</div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="add-button-container">
          <h1>Education </h1>
          <button onClick={handleAddEducation}>Add</button>
        </div>
        <div>{educationItems}</div>
      </div>
    );
  }
};

export default EditEducation;
