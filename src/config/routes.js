import Landingpage from '../pages/Landingpage';
import Reg from '../pages/users/Reg';
import Login from '../pages/users/Login';
import Home from '../pages/users/Home';
import ConductorReg from '../pages/conductors/Reg';
import ConductorLogin from '../pages/conductors/Login';
import ConductorHome from '../pages/conductors/Home';
import AdminLogin from '../pages/admin/Login';
import AdminReg from '../pages/admin/Reg';
import AdminHome from '../pages/admin/Home'
import Pass from '../pages/users/Pass';
import History from '../pages/users/History';
import Profile from '../pages/users/Profile';

export const pathsandelements = [
  
  // User
    {
      path:'/',
      element:<Landingpage/>
    },
    {
      path:'/reg',
      element:<Reg/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/pass',
      element:<Pass/>
    },
    {
      path:'/history',
      element:<History/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },

    // Conductor
    {
      path:'/conductor/reg',
      element: <ConductorReg />
    },
    {
      path:'/conductor/login',
      element: <ConductorLogin />
    },
    {
      path:'/conductor/home',
      element: <ConductorHome />
    },
    // Admin
    {
        path:'/admin/reg',
        element: <AdminReg />
      },
      {
        path:'/admin/login',
        element: <AdminLogin />
      },
      {
        path:'/admin/login',
        element: <AdminHome />
      },
  ]