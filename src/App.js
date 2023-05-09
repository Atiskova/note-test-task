
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Buttons } from "./components/Buttons/Buttons";
import { Workspace } from "./components/Workspace/Workspace";
import { Header } from "./components/Header/Header";
import css from './App.module.css'


function App() {



  return (
      <div className={css.app__container}>
        <Header />
        <main className={css.main__container}>
          <Sidebar />
          <Workspace />
        </main>
      </div>
  );
}

export default App;
