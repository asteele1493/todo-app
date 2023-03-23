import React, { useContext } from "react";
import Context from "../../App";
// import useForm from '../../hooks/form';

// import { v4 as uuid } from 'uuid';

const Todo = (props) => {
  const defaultUser = useContext(Context);

  return (
    <>
      <header data-testid="todo-header">
        <h1 data-testid="todo-h1">
          To Do List: {defaultUser.incomplete} items pending
        </h1>
      </header>

      <form onSubmit={props.handleSubmit}>
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input
            onChange={props.handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
        </label>

        <label>
          <span>Assigned To</span>
          <input
            onChange={props.handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </label>

        <label>
          <span>Difficulty</span>
          <input
            onChange={props.handleChange}
            defaultValue={defaultUser.defaultValue.difficulty}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
    </>
  );
};

export default Todo;
