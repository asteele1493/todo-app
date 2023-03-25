import React, {useContext} from 'react';

import { SettingsContext } from '../../Context/Settings/Settings';

function Header () {
  const settings = useContext(SettingsContext);

  return (
    <header data-testid="todo-header">
        <h1 data-testid="todo-h1">
          To Do List: {settings.incomplete} items pending
        </h1>
      </header>
  );
}

export default Header;