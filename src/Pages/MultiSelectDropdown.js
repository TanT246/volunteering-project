import React, { useState } from 'react';
import './MultiselectDropdown.css';

const MultiSelectDropdown = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((item) => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="multi-select-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Select options'}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${
                selectedOptions.includes(option) ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;