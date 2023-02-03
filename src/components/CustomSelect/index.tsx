import React, { useState } from "react";
import styles from "./styles.module.css";
import { Option } from "./Option";
import { Dropdown } from "./Dropdown";
import { LanguageType } from "../../types/LanguageType";
import russianFlagIcon from "../../assets/images/flag-russia.svg";
import britainFlagIcon from "../../assets/images/flag-britain.svg";
import italianFlagIcon from "../../assets/images/flag-italy.svg";
import spainFlagIcon from "../../assets/images/flag-spain.svg";
import polandFlagIcon from "../../assets/images/flag-poland.svg";
import germanFlagIcon from "../../assets/images/flag-germany.svg";

const LANGUAGES: LanguageType[] = [
  {
    id: "1",
    name: "Русский",
    icon: russianFlagIcon,
    isChecked: true,
  },
  {
    id: "2",
    name: "Английский",
    icon: britainFlagIcon,
    isChecked: false,
  },
  {
    id: "3",
    name: "Испанский",
    icon: spainFlagIcon,
    isChecked: false,
  },
  {
    id: "4",
    name: "Немецкий",
    icon: germanFlagIcon,
    isChecked: false,
  },
  {
    id: "5",
    name: "Итальянский",
    icon: italianFlagIcon,
    isChecked: false,
  },
  {
    id: "6",
    name: "Польский",
    icon: polandFlagIcon,
    isChecked: false,
  },
];

const LANGUAGE = 'Язык';

function CustomSelect() {
  const [languages, setLanguages] = useState<LanguageType[]>(LANGUAGES);
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const selectedLanguages = languages.filter((language) => language.isChecked);


  const onOptionToggle = (id: string) => {
    setLanguages((languages) => {
      const item = languages.find(
        (language) => language.id === id
      ) as LanguageType;
      const index = languages.findIndex((language) => language.id === id);
      const updatedLanguages = languages.slice();

      updatedLanguages[index] = { ...item, isChecked: !item.isChecked };

      return updatedLanguages;
    });
  };

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
