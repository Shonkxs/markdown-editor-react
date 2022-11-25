import "./styles.css";
import {
  AppContainer,
  EditorContainer,
  Title,
} from "./components/components-style";
import MarkdownInput from "./components/markdown-input";
import MarkdownOutput from "./components/markdown-output";
import { useState } from "react";
import EditorContext from "./editorContext";

export default function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <AppContainer>
        <Title>Markdown Editor</Title>
        <p>Schreibe einfach drauf los</p>
        <EditorContainer>
          <MarkdownInput></MarkdownInput>
          <MarkdownOutput></MarkdownOutput>
        </EditorContainer>
      </AppContainer>
    </EditorContext.Provider>
  );
}
