import React, { useState, useContext } from "react";
import { Pagination } from "@mantine/core";
import { SettingsContext } from "../../Context/Settings/Settings";

function List (props) {
  const defaultUser = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);
  const itemsPerPage = defaultUser.defaultValues.itemsPerPage;

  const startIdx = (activePage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedList = defaultUser.list
    defaultUser.list.sort((a, b) => a.difficulty - b.difficulty)
    defaultUser.list.slice(startIdx, endIdx);

  const handlePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="List">
        {displayedList.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.text}</p>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>
              <div onClick={() => props.toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <Pagination size="sm" page={activePage} onChange={handlePage} />;
    </>
  );
};

export default List;
