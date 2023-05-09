import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";
import { MdAddCircle } from "react-icons/md";
import css from "./Workspace.module.css";

export const Workspace = () => {
  const {
    selectNote,
    setSelectNote,
    setTitle,
    setDescription,
    date,
    title,
    description,
    addNote,
    openAddForm,
  } = useContext(NotesContext);

  const handleSaveNote = () => {
    addNote(title, description, date);
  };

  return (
    <div className={css.workspace__container}>
      {selectNote ? (
        <form className={css.workspace__form}>
          <p className={css.form__date}>
            {selectNote?.values?.boWRNdPwndliNcOexcNSkM}
          </p>
          <input
            className={css.form__title}
            name="aCsxlcI8ngBQaIWORcPSkz"
            type="text"
            value={selectNote?.values?.aCsxlcI8ngBQaIWORcPSkz}
            onChange={(e) =>
              setSelectNote({
                ...selectNote,
                values: {
                  ...selectNote.values,
                  aCsxlcI8ngBQaIWORcPSkz: e.target.value,
                },
              })
            }
            required
          />
          <textarea
            className={css.form__description}
            name="bmCc7cOd9gF47cLSkjWPGo"
            type="text"
            value={selectNote?.values?.bmCc7cOd9gF47cLSkjWPGo}
            onChange={(e) =>
              setSelectNote({
                ...selectNote,
                values: {
                  ...selectNote.values,
                  bmCc7cOd9gF47cLSkjWPGo: e.target.value,
                },
              })
            }
            required
          ></textarea>
        </form>
      ) : null}
      {openAddForm && (
        <form className={css.workspace__form} onSubmit={handleSaveNote}>
          <p className={css.form__date}>{date}</p>
          <input
            className={css.form__title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            className={css.form__description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <button type="submit" className={css.control__button}>
            <MdAddCircle className={css.control__svg} />
          </button>
        </form>
      )}
    </div>
  );
};
