import css from './SearchBox.module.css'

export const SearchBox = () => {
  return (
    <form>
      <input 
      className={css.search__input}
      placeholder="Search 🔍"
      onChange={() => {}}
      />
    </form>
  );
};
