
import './App.css'

import React, { useState } from "react";
import FieldForm from "./components/FieldForm";
import FormPreview from "./components/FormPreview";

const App = () => {
  const [fields, setFields] = useState([]);

  const addField = (field) => {
    setFields([...fields, { ...field, id: Date.now() }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  return (
    <div className="app">
      <h1>🛠 Custom Form Builder</h1>
      <div className="main-grid">
        <FieldForm onAddField={addField} />
        <FormPreview fields={fields} onRemoveField={removeField} />
      </div>
    </div>
  );
};

export default App;

