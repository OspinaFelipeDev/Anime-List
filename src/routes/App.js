import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { EditTodoPage } from './edit/EditTodoPage';
import { HomePage } from './home/HomePage';
import { NewTodoPage } from './new/NewTodoPage';
import notFoundImage from '../img/not.png'


function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewTodoPage />} />
          <Route path="/edit/:id" element={<EditTodoPage />} />
          <Route path="*" element={<img src={notFoundImage} alt="Not Found" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />} /> {/* Muestra la imagen */}
        </Routes>
    </HashRouter>
  );
}

export { App };