import React, { useContext } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
// import useForm from '../../hooks/form';

// import { v4 as uuid } from 'uuid';

function Todo (props) {

  //components can read context by passing it to a useContext hook.
  let defaultUser = useContext(SettingsContext);

  return (
    <div className='Todo'>
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
            defaultValue={defaultUser.defaultValues.difficulty}
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
    </div>
  );
};

export default Todo;
