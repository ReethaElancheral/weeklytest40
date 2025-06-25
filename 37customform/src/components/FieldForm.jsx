import React, { useState } from "react";

const FieldForm = ({ onAddField }) => {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");
  const [options, setOptions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label) return;

    const field = {
      label,
      type,
      ...(type === "select" && { options: options.split(",").map((o) => o.trim()) }),
    };

    onAddField(field);
    setLabel("");
    setOptions("");
    setType("text");
  };

  return (
    <form onSubmit={handleSubmit} className="field-form">
      <h2>Add Field</h2>
      <input
        type="text"
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="checkbox">Checkbox</option>
        <option value="select">Select</option>
      </select>

      {type === "select" && (
        <input
          type="text"
          placeholder="Comma-separated options"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
          required
        />
      )}

      <button type="submit">Add Field</button>
    </form>
  );
};

export default FieldForm;
