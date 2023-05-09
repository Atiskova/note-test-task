import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";
import {MdOutlineEditCalendar, MdFormatListBulletedAdd, MdOutlineDeleteForever} from "react-icons/md";
import css from './Buttons.module.css';

export const Buttons = () => {
  const { deleteNote, selectNote, setSelectNote,  addNote, editNote, title, description, date} =
    useContext(NotesContext);

    const handleAddNote = () => {
      addNote(title, description, date);
    }
  
    const handleEditNote = () => {
      editNote(selectNote);
      setSelectNote(null);
    }

  return (
    <ul className={css.control__list} >
      <li><button type="submit" className={css.control__button} onClick={handleAddNote}><MdFormatListBulletedAdd className={css.control__svg}/></button></li>
      <li><button type="submit" className={css.control__button} onClick={() => deleteNote(selectNote.id)}><MdOutlineDeleteForever  className={css.control__svg}/></button></li>
      <li><button type="submit" className={css.control__button} onClick={handleEditNote}><MdOutlineEditCalendar  className={css.control__svg}/></button></li>
    </ul>
  );
};
