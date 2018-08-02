import React from 'react';

export const NumberInput = ({ name, onChange }) => {
    return (
      <input
        className="grid-border flex-item"
        type="number"
        name={name}
        onChange={onChange}
      />
    );
}

export default NumberInput;
