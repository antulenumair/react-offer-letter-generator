import React from 'react';
import './FieldsList.css';

const FieldsList = ({ onFieldClick }) => {
  const fields = [
    'First Name',
    'Last Name',
    'Position',
    'Start Date',
    'Salary',
    'Department',
    'Company Name',
    'Company Logo'
  ];

  return (
    <div className="fields-list-container">
      <ul className="fields-list">
        {fields.map((field) => (
          <li key={field} onClick={() => onFieldClick(field)} className="field-item">
            {field}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FieldsList;
