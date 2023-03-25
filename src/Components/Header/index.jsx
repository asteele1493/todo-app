import React, {useContext} from 'react';

import { SettingsContext } from '../../Context/Settings/Settings';

function Header () {
  const settings = useContext(SettingsContext);

  return (
    <header>
      <h1>To-Do List</h1>
    </header>
  );
}

export default Header;