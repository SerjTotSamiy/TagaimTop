import React, { useEffect, useState } from "react";

import styles from "./AmbientBlock.module.sass";

const AmbientBlock = ({ reverse, text, buttons, img }) => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(false);
  useEffect(() => {
    if (window) setWindowInnerWidth(window.innerWidth);
  }, []);
  // style={{flexDirection:reverse?'row-reverse':'row' }}
  return (
    <div className={styles.ambientBlock}>
      <div>
        {text}
        <img src={img} align="left" width={300} alt="" />
        <span className={styles.ambient_buttons}>{buttons}</span>
      </div>
    </div>
  );
};

export default AmbientBlock;
