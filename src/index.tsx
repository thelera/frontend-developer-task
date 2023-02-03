import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.css";
import { CustomSelect } from "./components/CustomSelect";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className={styles.container}>
    <CustomSelect />
  </div>
);
