import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { monokai } from "@uiw/codemirror-theme-monokai"; // ✅ import the dark theme

const languageExtensions = {
  html: html(),
  css: css(),
  javascript: javascript(),
};

const Editor = ({ language, value, onChange }) => {
  return (
    <div style={{ flex: 1, minWidth: "33%", backgroundColor: "#272822", color: "white" }}>
      <h3 style={{ color: "white", padding: "5px" }}>{language.toUpperCase()}</h3>
      <CodeMirror
        value={value}
        height="200px"
        theme={monokai} // ✅ apply theme
        extensions={[languageExtensions[language]]}
        onChange={(val) => onChange(val)}
      />
    </div>
  );
};

export default Editor;

