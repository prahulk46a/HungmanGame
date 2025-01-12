import React from "react";

const TextInput = ({
  type = "text",
  label,
  placeholder = "Enter your input here",
  onChangeHandler,
}) => {
  return (
    <div>
      <span className="text-gray-700">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};

export default TextInput;
