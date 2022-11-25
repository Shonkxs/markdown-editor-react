import React, { useContext } from "react";
import styled from "styled-components";
import { PartContainer, SecondTitle } from "./components-style";
import ReactMarkdown from "react-markdown";
import editorContext from "../editorContext";

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  margin-top: 24px;
`;

export default function MarkdownOutput(props) {
  const { markdownText } = useContext(editorContext);

  return (
    <PartContainer>
      <SecondTitle>Input</SecondTitle>
      <ResultArea>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </ResultArea>
    </PartContainer>
  );
}
