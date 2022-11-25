import React, { useContext } from "react";
import styled from "styled-components";
import editorContext from "../editorContext";
import { PartContainer, SecondTitle } from "./components-style";

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  border: none;
  margin-top: 24px;
`;

export default function MarkdownInput(props) {
  const { setMarkdownText } = useContext(editorContext);

  const onInputChange = (e) => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <PartContainer>
      <SecondTitle>Input</SecondTitle>
      <TextArea onChange={onInputChange}></TextArea>
    </PartContainer>
  );
}
