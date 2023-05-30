import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './store';
import React from 'react';
import Authorization from './pages/Authorizationjsx';
import Registration from './pages/Registration';
import TablePage from './pages/TablePage';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='auth' element = {<Authorization />} />
          <Route path='table' element = {<TablePage />} />
          <Route path='/' element = {<Registration />} />
        </Routes>
      </Provider>
      
        
      </BrowserRouter>
  );
}

export default App;
