import React from "react";
import TextInput from "../text_Input/TextInput";
import Button from "../button/Button";

const TextInputForm = ({
  inputType,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <TextInput
            type={inputType}
            label="Enter a word or a phrase : "
            placeholder="Enter a word or phrase here ..."
            onChangeHandler={handleTextInputChange}
          />
        </div>

        <div className="flex flow-row ">
          <div>
            <Button
              styleType="warning"
              text={inputType === "password" ? "Show" : "Hide"}
              onClickHandler={handleShowHideClick}
            />
          </div>

          <div>
            <Button type="submit" styleType="primary" text="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TextInputForm;
