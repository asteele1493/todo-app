import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import "../src/App.scss";
import Todo from "./Components/Todo";
import List from "./Components/List";
import useForm from "./hooks/form";
import { v4 as uuid } from "uuid";
import { MantineProvider } from "@mantine/core";

export const Context = createContext('');

const App = () => {
  const [defaultValues] = useState({
    difficulty: 1,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return (
    <MantineProvider
    theme={{
      // Override any other properties from default theme
      fontFamily: 'Open Sans, sans serif',
      spacing: { xs: '1rem', sm: '1.2rem', md: '1.8rem', lg: '2.2rem', xl: '2.8rem' },
    }}
  >
    <Context.Provider
      value={{ defaultValues, list, setList, incomplete, setIncomplete }}
    >
      <Todo handleChange={handleChange} handleSubmit={handleSubmit} />
      <List toggleComplete={toggleComplete} />
    </Context.Provider>
    </MantineProvider>
  );
};

export default App;
