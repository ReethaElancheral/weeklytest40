import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

const languageExtension = {
  html: html(),
  css: css(),
  javascript: javascript(),
};

const CodeEditor = ({ language, value, onChange, title }) => {
  return (
    <div className="code-editor">
      <div className="editor-title">{title}</div>
      <CodeMirror
        value={value}
        height="200px"
        theme="light"
        extensions={[languageExtension[language]]}
        onChange={(val) => onChange(val)}
      />
    </div>
  );
};

export default CodeEditor;
