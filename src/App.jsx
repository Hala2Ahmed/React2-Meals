import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Meals from './pages/Meals/Meals'
import NotFound from './pages/NotFound/NotFound'
import MealDetails from './pages/MealDetails/MealDetails'

function App() {
  const router=createBrowserRouter([
    {path:'',element:<Layout />,children:[
      {index:true,element:<Meals />},
      // {path:'ingredients',element:<Ingredients />},
      // {path:'area',element:<Area />},
      {path:"mealDetails/:id",element:<MealDetails />},
      {path: "*", element:<NotFound />}
    ]}
  ])
    return (
      <>
      <RouterProvider router={router} />
      </>
    )
  }

export default App
