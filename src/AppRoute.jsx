import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoutes } from './shared/RoutesList';
import PublicLayout from './layout/publicLayout';
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        {PublicRoutes.map(({ component: Component, path }, index) => (
          <Route
            path={path}
            key={`public-${index}`}
            element={
              <PublicLayout>
                <Component />
              </PublicLayout>
            }
          ></Route>
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoute;
