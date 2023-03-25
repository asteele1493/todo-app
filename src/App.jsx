import React from "react";
import "../src/App.scss";
import SettingsContext from "./Context/Settings/Settings";
import Todo from "./Components/Todo";
import List from "./Components/List";
import Header from "./Components/Header"
import { MantineProvider } from "@mantine/core";
// import { Navbar, Text } from "@mantine/core"
// import {
//   Browser as Router,
//   Link, 
//   Route,
//   Routes
// } from "react-router-dom";


const App = () => {
  return (
    <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
    <SettingsContext>
    {/* <Router> */}
      {/* <Navbar> */}
      {/* <Navbar.Section grow mt="lg"> */}
        {/* <div style={{display:"flex", flexDirection: "column"}}> */}
          {/* <Text component={Link} variant="link" to "/" > */}
            {/* Home  */}
          {/* </Text> */}
          {/* </div> */}
      {/* </Navbar.Section> */}
      {/* </Navbar> */}
      <Header/>
      <Todo />
        <div>Hello!</div>
      <List />
      {/* </Router> */}
    </SettingsContext>
   </MantineProvider>
  );
};

export default App;
