import React, {useState, useEffect } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from "uuid";


export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [defaultValues] = useState({ difficulty: 1, itemsPerPage: 3 });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id){
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = ! item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily.
    // disable code used to avoid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  let exportedSettings = {
    defaultValues, 
    list, 
    setList, 
    incomplete, 
    setIncomplete,
    handleChange,
    handleSubmit,
    toggleComplete,
    deleteItem
  }

  return (
    <SettingsContext.Provider value={exportedSettings}>
      {props.children}
    </SettingsContext.Provider>
  )

}

export default SettingsProvider;
