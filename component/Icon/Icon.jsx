import { icons } from "./iconsPack";

export const Icon = (props) => {
  const {
    type,
    width = "100%",
    height = "100%",
    className,
    color = "#000",
    style,
  } = props;

  return (
    <svg
      className={className}
      viewBox={icons[type].viewBox}
      width={width}
      height={height}
      fill={color}
      style={style}
      aria-hidden
    >
      {icons[type].path}
    </svg>
  );
};

// Example:
// <Icon type="expandmore" className={styles.question_icon} width="30px" height="30px" />