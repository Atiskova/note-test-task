import { useContext, useState } from "react";
import { NotesContext } from "../../HOC/useNoteContext";
import css from "./Workspace.module.css";

export const Workspace = () => {
  const { selectNote, setSelectNote, setTitle, setDescription, date } =
    useContext(NotesContext);

  return (
    <div className={css.workspace__container}>
      {selectNote ? (
        <form className={css.workspace__form}>
          <p className={css.form__date}>{Date.now()}</p>
          <input
            className={css.form__title}
            type="text"
            value={selectNote?.values?.bpfgSrW5rdKyoRr03dSmkX || ""}
            onChange={(e) =>
              setSelectNote({
                ...selectNote,
                values: {
                  ...selectNote.values,
                  bpfgSrW5rdKyoRr03dSmkX: e.target.value,
                },
              })
            }
          />
          <textarea
            className={css.form__description}
            type="text"
            value={selectNote?.values?.cfW6NcMZnafykXWPNcSSkQ || ""}
            onChange={(e) =>
              setSelectNote({
                ...selectNote,
                values: {
                  ...selectNote.values,
                  cfW6NcMZnafykXWPNcSSkQ: e.target.value,
                },
              })
            }
          ></textarea>
        </form>
      ) : (
        <form className={css.workspace__form}>
          <p className={css.form__date}>{date}</p>
          <input
            className={css.form__title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            className={css.form__description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </form>
      )}
    </div>
  );
};
