import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { DropdownItem } from "./DropdownItem";
import { LanguageType } from "../../types/LanguageType";
import { Search } from "./Search";
import { Language } from "../../constants";

function Dropdown({
  items,
  isOpened,
  onToggle,
}: {
  items: LanguageType[];
  isOpened: boolean;
  onToggle: (id: string) => void;
}) {
  const [foundItems, setFoundItems] = useState<string[] | null>([]);
  const [filteredItems, setFilteredItems] = useState<LanguageType[]>(items);

  useEffect(() => {
    let filteredItems: LanguageType[] = [];

    if(foundItems) {
      filteredItems = foundItems.length === 0 ? items : items.filter((item) => foundItems.includes(item.name.toLowerCase()));
    }

    setFilteredItems(filteredItems);
  }, [foundItems, items]);

  const values = Object.values(Language).map((language) =>
    language.name.toLowerCase()
  );

  const onFilterItems = (words: string[]) => {
    setFoundItems(words.length === 0 ? null : words);
  };

  return (
    <div
      className={[
        styles.dropdownWrapper,
        isOpened && styles.dropdownHidden,
        !foundItems && styles.dropdownWithBottomPadding,
      ].join(" ")}
    >
      <Search values={values} onChange={onFilterItems} />

      {filteredItems.map((item) => (
        <DropdownItem item={item} onToggle={onToggle} />
      ))}
    </div>
  );
}

export { Dropdown };
