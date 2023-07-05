import "./Layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerLayout from "./components/nav/CustomerLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Trending from "./pages/Trending";
import Notification from "./pages/Notification";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CustomerLogin from "./pages/CustomerLogin";
import Offers from "./pages/Offers";
import SellerLogin from "./pages/SellerLogin";

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
          path: "trending",
          element: <Trending />,
        },
        {
          path: "notification",
          element: <Notification />,
        },
        {
          path: "wishlist",
          element: <WishList />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "login",
          element: <CustomerLogin />,
        },
        {
          path: "offers",
          element: <Offers />,
        },
        {
          path: "seller",
          element: <SellerLogin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
