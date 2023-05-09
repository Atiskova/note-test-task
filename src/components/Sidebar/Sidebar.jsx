import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";
import css from "./Sidebar.module.css";

export const Sidebar = () => {
  const { setSelectNote, searchedNote, setOpenAddForm } =
    useContext(NotesContext);

  const handleClick = (note) => {
    setOpenAddForm(false);
    setSelectNote(note);
  };

  return (
    <div className={css.sidebar__container}>
      <ul className={css.sidebar__list}>
        {searchedNote.map((element) => {
          return (
            <li key={element.id}>
              <button
                className={css.sidebar__item}
                type="button"
                onClick={() => handleClick(element)}
              >
                <p className={css.sidebar__title}>
                  {element.values.aCsxlcI8ngBQaIWORcPSkz}
                </p>
                <p className={css.sidebar__description}>
                  {element.values.bmCc7cOd9gF47cLSkjWPGo}
                </p>
                <p className={css.sidebar__date}>
                  {element.values.boWRNdPwndliNcOexcNSkM}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
