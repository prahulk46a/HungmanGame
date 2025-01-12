import getButtonStyling from "./getButtonStyling";
//Custom Button
const Button = ({
  text,
  onClickHandler,
  styleType = "primary",
  type = "button",
}) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`px-4 py-2 rounded-lg ${getButtonStyling(
        styleType
      )}  text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
