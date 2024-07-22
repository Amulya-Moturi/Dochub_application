import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Education from './components/education/Education';
import Personal from './components/personal/Personal';
import Confidential from './components/confidential/Confidential';
import Certificates from './components/certificates/Certificates';
import Identity from './components/identity/Identity';
import Others from './components/others/Others';
import Passwords from './components/passwords/Passwords';
import Medical from './components/medical/Medical';
import Vehicle from './components/vehicle/Vehicle';
import Dashhome from './components/dashhome/Dashhome';
import Confidentialhome from './components/confidentialhome/Confidentialhome';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/dashboard",
          element:<Dashboard/>,
          children:[
            {
              index: true,
              element:<Dashhome/>,
            },
            {
              path:"education",
              element:<Education/>,
            },
            {
              path:"confidential",
              element:<Confidential/>,
            },
            {
              path:"identity",
              element:<Identity/>,
            },
            {
              path:"personal",
              element:<Personal/>,
            },
            {
              path:"certificates",
              element:<Certificates/>
            },
            {
              path:"medical",
              element:<Medical/>,
            },
            {
              path:"passwords",
              element:<Passwords/>,
            },
            {
              path:"vehicle",
              element:<Vehicle/>,
            },
            {
              path:"others",
              element:<Others/>,
            },
            {
              path:"confidentialhome",
              element:<Confidentialhome/>,
            }
          ]
        }
      ]
    }
  ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

