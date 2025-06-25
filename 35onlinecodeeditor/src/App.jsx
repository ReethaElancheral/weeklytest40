
import './App.css'

import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";

const App = () => {
  const [html, setHtml] = useState("<h1>Hello World</h1>");
  const [css, setCss] = useState("h1 { color: teal; }");
  const [js, setJs] = useState("console.log('Welcome');");

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}<\/script>
      </body>
    </html>
  `;

  return (
    <div className="editor-container">
      <div className="pane top-pane">
        <CodeEditor language="html" value={html} onChange={setHtml} title="HTML" />
        <CodeEditor language="css" value={css} onChange={setCss} title="CSS" />
        <CodeEditor language="javascript" value={js} onChange={setJs} title="JS" />
      </div>
      <div className="pane preview-pane">
        <iframe
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;

