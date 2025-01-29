import type React from "react";
import styles from "./loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <svg
        className={styles.loader}
        viewBox="0 0 200 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="0" y="70" className={styles.loaderText}>
          <tspan className={styles.r}>R</tspan>
          <tspan className={styles.i}>I</tspan>
          <tspan className={styles.l}>L</tspan>
          <tspan className={styles.o}>O</tspan>
        </text>
        <path
          className={styles.loaderPath}
          d="M 0,50 Q 50,0 100,50 Q 150,100 200,50"
        />
      </svg>
    </div>
  );
};

export default Loader;
