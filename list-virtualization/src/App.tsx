import "./App.css";
import { List } from "./components/List";
import { useDictionary } from "./hooks/useDictionary";

export function App() {
  const dictionary = useDictionary();
  return (
    <main>
      <header>
        <h1>So many words!</h1>
      </header>
      <section>
        <List items={dictionary} />
      </section>
    </main>
  );
}
