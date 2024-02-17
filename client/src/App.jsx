import { RouterProvider, createBrowserRouter } from "react-router-dom"
import {HomeLayout,Register,Login,Error, Dashboard, Contact, About} from './pages'
import HomePage from "./pages/HomePage.jsx"
import { action as registerAction } from "./pages/Register.jsx"
import { action as loginAction } from "./pages/Login.jsx"

const router =createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<HomePage/>

      },
      {
        path:'home',
        element:<HomePage/>,
      },
      {
        path:'login',
        element:<Login/>,
        action: loginAction,
      },
      {
        path:'register',
        element:<Register/>,
        action: registerAction,
      },
      {
        path:'dashboard',
        element:<Dashboard/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'about',
        element:<About/>
      },


    ]
  },

])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App