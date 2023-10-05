import React, { useState } from 'react';

function RadioButtons({ onGradeChange, selectedGrade }) {
  const grades = ['A', 'B+', 'B', 'C+', 'C', 'D', 'F'];

  const handleOptionChange = (event) => {
    onGradeChange(event.target.value);
  };

  return (
    <div>
      <form>
        {grades.map((grade, index) => (
          <div key={index}>
            <label>
              <input
                id=""
                type="radio"
                value={grade}
                checked={selectedGrade === grade}
                onChange={handleOptionChange}
              />
              {grade}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default RadioButtons;