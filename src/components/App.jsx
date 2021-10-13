import React from "react";
import Entry from "./entry";
import components from "../emojipedia.js";

function createEntry(infos) {
  return (
    <Entry
      key={infos.id}
      emoji={infos.emoji}
      name={infos.name}
      meaning={infos.meaning}
     />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {components.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
