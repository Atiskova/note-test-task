import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";
import {
  MdOutlineEditCalendar,
  MdFormatListBulletedAdd,
  MdOutlineDeleteForever,
} from "react-icons/md";
import css from "./Buttons.module.css";

export const Buttons = () => {
  const { deleteNote, selectNote, setSelectNote, editNote, handleOpenNote } =
    useContext(NotesContext);

  const handleEditNote = () => {
    editNote(selectNote);
    setSelectNote(null);
  };

  return (
    <ul className={css.control__list}>
      <li>
        <button
          type="submit"
          className={css.control__button}
          onClick={handleOpenNote}
        >
          <MdFormatListBulletedAdd className={css.control__svg} />
        </button>
      </li>
      {selectNote ? (
        <>
          <li>
            <button
              type="submit"
              className={css.control__button}
              onClick={() => deleteNote(selectNote.id)}
            >
              <MdOutlineDeleteForever className={css.control__svg} />
            </button>
          </li>
          <li>
            <button
              type="submit"
              className={css.control__button}
              onClick={handleEditNote}
            >
              <MdOutlineEditCalendar className={css.control__svg} />
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <button
              type="submit"
              className={css.control__button__disabled}
              onClick={() => deleteNote(selectNote.id)}
              disabled
            >
              <MdOutlineDeleteForever className={css.control__svg} />
            </button>
          </li>
          <li>
            <button
              type="submit"
              className={css.control__button__disabled}
              onClick={handleEditNote}
              disabled
            >
              <MdOutlineEditCalendar className={css.control__svg} />
            </button>
          </li>
        </>
      )}
    </ul>
  );
};
