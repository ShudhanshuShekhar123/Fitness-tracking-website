import {Routes,Route} from "react-router-dom"
import React from 'react'
import Login from "./Login"
import Gym from "./Gym"
import NotFoundPage from "./NotFoundPage"
import HomePage from "./Homepage"
// import Exercises_CategoryPage from "./Exercises_categoryPage"
 import Exercises_CategoryPage from "./Exercises_CategoryPage"
import {Adminpage} from "./AdminPages/AdminPage"
import AdminUserList from "./AdminPages/AdminUserList"
import AdminUser from "./AdminPages/AdminUser";
import AdminNewUser from "./AdminPages/AdminNewUser"



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
      element: <Exercises_CategoryPage/>
    },
    {
      path: '/gym',
      element: <Gym/>
    },
    {
      path: '*',
      element: <NotFoundPage/>
    },
    {
      path:'/admin',
      element:<Adminpage/>
    },
    {
      path:'/users',
      element:<AdminUserList/>
    },
    {
      path:'/user:id',
      element:<AdminUser/>
    },
    {
      path:'/newUser',
      element:<AdminNewUser/>
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