import Landingpage from '../pages/Landingpage';
import Reg from '../pages/users/Reg';
import Login from '../pages/users/Login';
import ConductorReg from '../pages/conductors/Reg';
import ConductorLogin from '../pages/conductors/Login';
import AdminLogin from '../pages/admin/Login';
import AdminReg from '../pages/admin/Reg';

export const pathsandelements = [
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
    // Conductor
    {
      path:'/conductor/reg',
      element: <ConductorReg />
    },
    {
      path:'/conductor/login',
      element: <ConductorLogin />
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
  ]