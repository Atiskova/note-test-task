import { useContext } from "react";
import { NotesContext } from "../../HOC/useNoteContext";

export const Sidebar = () => {
  const { data, setSelectNote } = useContext(NotesContext);

const handleClick = (note) => {
  setSelectNote(note)
}

  return (
    <ul>
      {data.map((element) => {
        return (
          <li key={element.id} onClick={() => handleClick(element)}>
            <p>Title: {element.values.bpfgSrW5rdKyoRr03dSmkX}</p>
            <p>Desc: {element.values.cfW6NcMZnafykXWPNcSSkQ}</p>
            <p>Time: {element.values.dcOSojdSnfW6tcGCoUBCkJ}</p>
          </li>
        );
      })}
    </ul>
  );
};
