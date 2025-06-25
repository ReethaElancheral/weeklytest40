import React, { useState } from "react";

const FormPreview = ({ fields, onRemoveField }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="form-preview">
      <h2>Live Form Preview</h2>
      {fields.length === 0 && <p>No fields added.</p>}
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="preview-field">
            <label>{field.label}</label>
            {field.type === "text" && (
              <input
                type="text"
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
            {field.type === "number" && (
              <input
                type="number"
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
            {field.type === "checkbox" && (
              <input
                type="checkbox"
                onChange={(e) => handleChange(field.id, e.target.checked)}
              />
            )}
            {field.type === "select" && (
              <select onChange={(e) => handleChange(field.id, e.target.value)}>
                <option value="">-- select --</option>
                {field.options.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
            <button
              type="button"
              className="remove-btn"
              onClick={() => onRemoveField(field.id)}
            >
              ❌
            </button>
          </div>
        ))}
        {fields.length > 0 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default FormPreview;
