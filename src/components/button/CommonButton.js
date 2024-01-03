import "./CommonButton.css";

const CommonButton = ({
  color,
  width,
  height,
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
        width: width || "64px",
        height: height || "24px",
        fontSize: fontSize,
        borderRadius: radius || "0",
        border: `${borderSize} solid ${borderColor || "black"}`,
      }}
      onClick={callback || (() => {})}
    >
      {children || ""}
    </button>
  );
};

export default CommonButton;
