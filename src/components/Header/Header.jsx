import { Buttons } from "../Buttons/Buttons";
import { SearchBox } from "../SearchBox/SearchBox";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header__container}>
      <div className={css.header__wrapper}>
        <Buttons />
        <SearchBox />
      </div>
    </header>
  );
};
