import React, { useCallback, useState } from "react";
import styles from "./styles.module.css";
import { Option } from "./Option";
import { Dropdown } from "./Dropdown";
import { LanguageType } from "../../types/LanguageType";
import { LANGUAGE, Language } from "../../constants";

const defaultLanguages: LanguageType[] = [
  {
    id: "1",
    name: Language.russian.name,
    icon: Language.russian.icon,
    isChecked: true,
  },
  {
    id: "2",
    name: Language.english.name,
    icon: Language.english.icon,
    isChecked: false,
  },
  {
    id: "3",
    name: Language.spain.name,
    icon: Language.spain.icon,
    isChecked: false,
  },
  {
    id: "4",
    name: Language.german.name,
    icon: Language.german.icon,
    isChecked: false,
  },
  {
    id: "5",
    name: Language.italian.name,
    icon: Language.italian.icon,
    isChecked: false,
  },
  {
    id: "6",
    name: Language.poland.name,
    icon: Language.poland.icon,
    isChecked: false,
  },
];

function CustomSelect() {
  const [languages, setLanguages] = useState<LanguageType[]>(defaultLanguages);
  
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const selectedLanguages = languages.filter((language) => language.isChecked);

  const onOptionToggle = useCallback((id: string) => {
    setLanguages((languages) => {
      const item = languages.find(
        (language) => language.id === id
      ) as LanguageType;
      const index = languages.findIndex((language) => language.id === id);
      const updatedLanguages = languages.slice();

      updatedLanguages[index] = { ...item, isChecked: !item.isChecked };

      return updatedLanguages;
    });
  }, []);

  const onDropdownToggle = () => {
    setIsOpened((isOpened) => !isOpened);
  };

  return (
    <div>
      <p className={styles.label}>{LANGUAGE}</p>

      <div className={styles.input}>
        <div className={styles.inner}>
          {selectedLanguages.map((language) => (
            <Option
              id={language.id}
              name={language.name}
              key={language.id}
              onRemove={onOptionToggle}
            />
          ))}
        </div>

        <button
          className={[
            styles.hideDropdownButton,
            isOpened && styles.showDropdownButton,
          ].join(" ")}
          aria-label="Toggle dropdown menu"
          onClick={onDropdownToggle}
        />
      </div>

      <Dropdown
        items={languages}
        isOpened={isOpened}
        onToggle={onOptionToggle}
      />
    </div>
  );
}

export { CustomSelect };
