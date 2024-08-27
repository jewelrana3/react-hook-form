import React from "react";

const NumberInput = ({ value, onChange, ...rest }) => {
  const handleChange = (e) => {
    const value = e.target.valueAsNumber || 0;
    onChange(value);
  };
  return (
    <div>
      <input type="number" onChange={handleChange} {...rest} />
    </div>
  );
};

export default NumberInput;
