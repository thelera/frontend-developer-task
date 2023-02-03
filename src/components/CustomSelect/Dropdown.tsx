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
}: 
{
  items: LanguageType[];
  isOpened: boolean;
  onToggle: (id: string) => void;
}) {
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<LanguageType[]>(items);

  useEffect(() => {
    const filteredItems = foundItems.length > 0
      ? items.filter((item) => foundItems.includes(item.name.toLowerCase()))
      : items;

    setFilteredItems(filteredItems);
  }, [foundItems, items]);

  const values = Object.values(Language).map((language) =>
    language.name.toLowerCase()
  );

  const onFilterItems = (words: string[]) => {
    setFoundItems(words);
  };

  return (
    <div
      className={[
        styles.dropdownWrapper,
        isOpened && styles.dropdownHidden,
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
