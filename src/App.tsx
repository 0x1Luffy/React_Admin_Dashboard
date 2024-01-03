import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Product from "./pages/product/Product";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Home/>,
    },
    {
      path: "users",
      element: <Users/>,
    },
    {
      path: "product",
      element: <Product/>,
    },
  ]);

  return (
   <RouterProvider router={router}/>
  )
}

export default App
