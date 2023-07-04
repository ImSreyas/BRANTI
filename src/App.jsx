import "./Layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import CustomerLayout from "./components/CustomerLayout";
import Offers from "./pages/Offers";
import WishList from "./pages/WishList"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CustomerLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "category",
          element: <Category />,
        },
        {
          path: "offers",
          element: <Offers />,
        },
        {
          path: "wishlist",
          element: <WishList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
