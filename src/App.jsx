import { Header } from "./components/Header/Header";
import { CORE_CONCEPTS } from "../data";
import { CoreConcept } from "./components/CoreConcepts/CoreConcept";
import { TabButton } from "./components/TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("components");
  const handelOnSelect = (selectedButton) => {
    // selectedButton = "components", "JSX", "props" , "state"
    setSelectedTopic(selectedButton);
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
            <TabButton onSelect={() => handelOnSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handelOnSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handelOnSelect("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => handelOnSelect("state")}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
