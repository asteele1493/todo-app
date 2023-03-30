import React, {useContext} from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';

function Header () {
  const settings = useContext(SettingsContext);

  return (
    <Header className='todo-header' data-testid='todo-header'>
    <header>
      <h1>To-Do List
        <h4>{settings.incomplete}</h4>
      </h1>
    </header>
    </Header>
  );
}

export default Header;