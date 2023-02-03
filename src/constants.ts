import russianFlagIcon from "./assets/images/flag-russia.svg";
import britainFlagIcon from "./assets/images/flag-britain.svg";
import italianFlagIcon from "./assets/images/flag-italy.svg";
import spainFlagIcon from "./assets/images/flag-spain.svg";
import polandFlagIcon from "./assets/images/flag-poland.svg";
import germanFlagIcon from "./assets/images/flag-germany.svg";

const Language: { [key: string]: { name: string; icon: string } } = {
  russian: { name: "Русский", icon: russianFlagIcon },
  english: { name: "Английский", icon: britainFlagIcon },
  spain: { name: "Испанский", icon: spainFlagIcon },
  german: { name: "Немецкий", icon: germanFlagIcon },
  italian: { name: "Итальянский", icon: italianFlagIcon },
  poland: { name: "Польский", icon: polandFlagIcon },
};

const LANGUAGE = "Язык";

const SEARCH = "Поиск";

export { Language, LANGUAGE, SEARCH };
