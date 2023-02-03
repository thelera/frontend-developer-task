import React from "react";
import styles from "./styles.module.css";
import { DropdownItem } from "./DropdownItem";
import { LanguageType } from "../../types/LanguageType";

function Dropdown({
  items,
  isOpened,
  onToggle,
}: {
  items: LanguageType[];
  isOpened: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className={[styles.dropdownWrapper, isOpened && styles.dropdownHidden].join(' ')}>
      {items.map((item) => (
        <DropdownItem item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}

export { Dropdown };
