import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <head><style>${css}</style></head>
          <body>
            ${html}
            <script>${js}<\/script>
          </body>
        </html>
      `);
    }, 500); // 0.5s delay for smoother experience

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "10px" }}>
      <Header/>
      <div style={{ display: "flex", gap: "10px", flex: 1 , marginTop:"40px" }}>
        <Editor language="html" value={html} onChange={setHtml} />
        <Editor language="css" value={css} onChange={setCss} />
        <Editor language="javascript" value={js} onChange={setJs} />
      </div>

      <iframe
        srcDoc={srcDoc}
        title="Output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ flex: 1, marginTop: "10px", border: "1px solid #ccc" }}
      />
      <Footer/>
    </div>
  );
}

export default App;