import React, { useState } from 'react';

function RadioButtons() {
  const [selectedOption, setSelectedOption] = useState('');

  const grades = ['A', 'B+', 'B', 'C+', 'C', 'D', 'F'];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <form>
        {grades.map((grade, index) => (
          <div key={index}>
            <label>
              <input
                id=''
                type="radio"
                value={grade}
                checked={selectedOption === grade}
                onChange={handleOptionChange}
              />
              {grade}
            </label>
          </div>
        ))}
      </form>

      <p>{selectedOption}</p>
    </div>
  );
}

export default RadioButtons;
