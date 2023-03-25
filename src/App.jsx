import React from "react";
import "../src/App.scss";
import SettingsContext from "./Context/Settings/Settings";
import Todo from "./Components/Todo";
import List from "./Components/List";
import Header from "./Components/Header"
import { MantineProvider } from "@mantine/core";


const App = () => {
  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
    <SettingsContext>
      <Header/>
      <Todo />
        <div>Hello!</div>
      <List />
    </SettingsContext>
   </MantineProvider>
  );
};

export default App;
