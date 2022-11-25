import React from "react";

const defaultContext = {
  markdownText: "",
  setMarkdowntext: () => {},
};

export default React.createContext(defaultContext);
