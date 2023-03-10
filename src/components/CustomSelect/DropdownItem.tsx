import React from "react";
import { LanguageType } from "../../types/LanguageType";
import styles from "./styles.module.css";

const DropdownItem = React.memo(
  ({
    item,
    onToggle,
  }: {
    item: LanguageType;
    onToggle: (id: string) => void;
  }) => {
    const onClick = () => {
      onToggle(item.id);
    };

    return (
      <button
        className={styles.dropdownItemWrapper}
        onClick={onClick}
        aria-label="Toggle item"
      >
        <img className={styles.dropdownItemIcon} src={item.icon} alt="Flag" />

        <p className={styles.dropdownItemTitle}>{item.name}</p>

        <div
          className={
            item.isChecked
              ? styles.dropdownItemCheckedCheckbox
              : styles.dropdownItemCheckbox
          }
        ></div>
      </button>
    );
  }
);

export { DropdownItem };
