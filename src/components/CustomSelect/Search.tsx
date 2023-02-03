import React from "react";
import { findItems } from "../../utils";
import styles from "./styles.module.css";
import { SEARCH } from "../../constants";

function Search({
  values,
  onChange,
}: {
  values: string[];
  onChange: (items: string[]) => void;
}) {
  const onTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(findItems(evt.target.value, values));
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        className={styles.search}
        placeholder={SEARCH}
        onChange={onTextChange}
      />
    </div>
  );
}

export { Search };
