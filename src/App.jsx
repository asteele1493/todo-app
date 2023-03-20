import React, { createContext } from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import List from './Components/List';
import Footer from './Components/Footer';

const appContext = createContext(null);

export default class App extends React.Component {
  render() {
    return (
      <appContext.Provider>
      <Header />
      <Todo />
      <List />
      <Footer />
      </appContext.Provider>
    );
  }
}