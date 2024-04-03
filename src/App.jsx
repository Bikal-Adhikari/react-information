import { Header } from "./components/Header/Header";
import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./components/CoreConcepts/CoreConcept";
import { TabButton } from "./components/TabButton/TabButton";

function App() {
  const handelOnSelect = (selectedButton) => {
    // selectedButton = "components", "JSX", "props" , "state"
    console.log(selectedButton);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handelOnSelect("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handelOnSelect("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handelOnSelect("props")}>Props</TabButton>
            <TabButton onClick={() => handelOnSelect("state")}>State</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
