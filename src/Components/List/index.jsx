import React, { useState } from 'react';
import {Context} from '../../App';
import { Pagination } from '@mantine/core';


const List = (props) => {

// const defaultUser = useContext(Context);
const [activePage, setPage] = useState(1);


return (
  <>
  <div className = "List">
  {props.list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
  </div>
  <Pagination page={activePage} onChange={setPage} />;
  </>
)


}



export default List;