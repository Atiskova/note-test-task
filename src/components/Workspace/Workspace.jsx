import { useContext, useState } from "react";
import { NotesContext } from "../../HOC/useNoteContext";

export const Workspace = () => {
  const {
    selectNote,
    setSelectNote,
    setTitle,
    setDescription,
    date,
  } = useContext(NotesContext);


  return (
    <>
      {selectNote ? (
        <form>
          <p>{Date.now()}</p>
          <input
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
        <form>
          <p>{date}</p>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
      )}
    </>
  );
};
