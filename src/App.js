import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import React from 'react';
import Authorization from './pages/Authorization.jsx';
import Registration from './pages/Registration';
import TablePage from './pages/TablePage';
import CreateObject from './pages/CreateObject';

// тут организовываем BrowserRouter и Routes для навигации, Provider для редакса
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='auth' element = {<Authorization />} />
          <Route path='table' element = {<TablePage />} />
          <Route path='*' element = {<Registration />} />
          <Route path='object' element = {<CreateObject />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
