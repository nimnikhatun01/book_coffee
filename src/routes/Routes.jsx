import { createBrowserRouter } from "react-router-dom"
// import App from "../App"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Coffees from "../pages/Coffees"
import Dashboard from "../pages/Dashboard"
import CoffeeCards from "../components/CoffeeCards"

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children:[
        {
          path:'/',
          element:<Home />,
          loader: () =>fetch('../categories.json'),
          children:[
            {
              path:'/',
              element:<CoffeeCards />,
              loader: () => fetch('../coffees.json'),
    
            },
            {
              path:'/category/:category',
              element:<CoffeeCards />,
              loader: () => fetch('../coffees.json'),
    
            },
          ],

        },
        {
          path:'/coffees',
          element:<Coffees />,
          loader: () => fetch('../coffees.json'),

        },
        {
          path:'/dashboard',
          element:<Dashboard />,

        },
       
      ],
    },
  ])


  export default routes