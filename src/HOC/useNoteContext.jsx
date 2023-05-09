import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "../services/formatDate";

export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectNote, setSelectNote] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const date = formatDate;
  const [searchValue, setSearchValue] = useState("");
  const [openAddForm, setOpenAddForm] = useState(false);
  const API_KEY = "dcKCkIWP9dJl0cW49ksmom";
  const BASE_URL = "https://quintadb.com/apps/dcISkVW7bdPioiWPRdHtDV/dtypes";
  const ENTITY_ID = "ddPc47WOzmCikwW7RcP8kL";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/entity/${ENTITY_ID}.json?&rest_api_key=${API_KEY}&per_page=199`
      );
      setData(data.records);
    };
    fetchData();
  }, []);

  const deleteNote = async (id) => {
    await axios.delete(`${BASE_URL}/${id}.json?rest_api_key=${API_KEY}`);
    setData(data.filter((element) => element.id !== id));
    setSelectNote(null);
  };

  const addNote = async (title, description, date) => {
    const response = await axios({
      url: `${BASE_URL}.json?rest_api_key=${API_KEY}`,
      method: "POST",
      data: {
        values: {
          aCsxlcI8ngBQaIWORcPSkz: title,
          bmCc7cOd9gF47cLSkjWPGo: description,
          boWRNdPwndliNcOexcNSkM: date,
        },
        entity_id: `${ENTITY_ID}`,
      },
    });
    const element = response.data.record;
    setData([...data, element]);
    setTitle("");
    setDescription("");
    setSelectNote(null);
  };

  const editNote = async (updateNote) => {
    const response = await axios({
      url: `${BASE_URL}/${updateNote.id}.json?rest_api_key=${API_KEY}`,
      method: "PUT",
      data: {
        values: { ...updateNote.values },
        entity_id: `${ENTITY_ID}`,
      },
    });
    setSelectNote(response.data);
    setData(
      data.map((element) =>
        updateNote.id === element.id ? updateNote : element
      )
    );
    setSelectNote(null);
  };

  const searchedNote = data.filter(
    (element) =>
      element?.values?.aCsxlcI8ngBQaIWORcPSkz
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      element?.values?.bmCc7cOd9gF47cLSkjWPGo
        .toLowerCase()
        .includes(searchValue.toLowerCase())
  );

  const handleOpenNote = () => {
    setOpenAddForm(!openAddForm);
    setSelectNote(null);
  };

  return (
    <NotesContext.Provider
      value={{
        data,
        selectNote,
        setSearchValue,
        setSelectNote,
        title,
        setTitle,
        description,
        setDescription,
        date,
        deleteNote,
        addNote,
        editNote,
        searchedNote,
        handleOpenNote,
        setOpenAddForm,
        openAddForm,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
