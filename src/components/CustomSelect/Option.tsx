import React from "react";
import styles from './styles.module.css';

function Option({
  id,
  name,
  onRemove,
}: {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}) {
  const onClose = () => {
    onRemove(id);
  };

  return (
    <button className={styles.optionWrapper} onClick={onClose} aria-label="Remove item">
      <p className={styles.optionName}>{name}</p>
      <div className={styles.optionCloseButton} ></div>
    </button>
  );
}

export { Option };
