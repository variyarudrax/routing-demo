import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoutesCheck from './components/PrivateRoutes';
import { PrivateRoutes, PublicRoutes } from './routes';
import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutesCheck />}>
            {PrivateRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
          {PublicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
