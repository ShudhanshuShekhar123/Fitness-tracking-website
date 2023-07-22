import {Routes,Route} from "react-router-dom"
import React from 'react'
import Login from "./Login"
import Exercises_categoryPage from "./Exercises_categoryPage"
// import HomePage from "./HomePage"
import Gym from "./Gym"
import NotFoundPage from "./NotFoundPage"
import HomePage from "./Homepage"


const MainRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/categories',
      element: <Exercises_categoryPage/>
    },
    {
      path: '/gym',
      element: <Gym/>
    },
    {
      path: '*',
      element: <NotFoundPage/>
    }
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default MainRoutes