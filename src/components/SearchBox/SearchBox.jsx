import { useContext } from 'react';
import css from './SearchBox.module.css'
import { DebounceInput } from 'react-debounce-input';
import { NotesContext } from '../../HOC/useNoteContext';

export const SearchBox = () => {
  const {  searchValue, setSearchValue } =  useContext(NotesContext);

  return (
    <form>
      <DebounceInput 
      minLength={2}
      debounceTimeout={300}
      value={searchValue}
      className={css.search__input}
      placeholder="Search 🔍"
      onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};
