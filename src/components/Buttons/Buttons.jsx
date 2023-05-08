import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";

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
    <div>
      <button type="submit" onClick={handleAddNote}>+</button>
      <button type="submit" onClick={() => deleteNote(selectNote.id)}>X</button>
      <button type="submit" onClick={handleEditNote}>Edit</button>
    </div>
  );
};
