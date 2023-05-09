import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";
import css from "./Sidebar.module.css";

export const Sidebar = () => {
  const { data, setSelectNote } = useContext(NotesContext);

const handleClick = (note) => {
  setSelectNote(note)
}

  return (
    <div className={css.sidebar__container}>
      <ul className={css.sidebar__list}>
        {data.map((element) => {
          return (
            <li  className={css.sidebar__item} key={element.id} onClick={() => handleClick(element)}>
              <p className={css.sidebar__title}>{element.values.bpfgSrW5rdKyoRr03dSmkX}</p>
              <p className={css.sidebar__description}>{element.values.cfW6NcMZnafykXWPNcSSkQ}</p>
              <p className={css.sidebar__date}>{element.values.dcOSojdSnfW6tcGCoUBCkJ}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
