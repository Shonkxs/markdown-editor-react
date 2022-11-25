import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 400;
`;

export const SecondTitle = styled.div`
  font-size: 30px;
  color: white;
  background-color: black;
  padding: 16px 0;
  text-align: center;
`;

export const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const PartContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 16px;
  border: 3px solid black;
`;
