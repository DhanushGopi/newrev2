import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { pathsandelements } from './config/routes';

function App() {

  const navs = createBrowserRouter(pathsandelements);

  return (
    <div className='App'>
    <RouterProvider router={navs}/>
    </div>
  );
}

export default App;
