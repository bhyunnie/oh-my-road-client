import "./CommonButton.css";

const CommonButton = ({
  color,
  size,
  fontSize,
  fontColor,
  radius,
  callback,
  children,
  borderSize,
  borderColor,
}) => {
  return (
    <button
      className="common-button"
      style={{
        backgroundColor: color,
        color: fontColor,
        width: `${64 * (size || 1)}px`,
        height: `${24 * (size || 1)}px`,
        fontSize: fontSize,
        borderRadius: `${radius}px`,
        border: `${borderSize}px solid ${borderColor || "black"}`,
      }}
      onClick={callback || (() => {})}
    >
      {children || ""}
    </button>
  );
};

export default CommonButton;
