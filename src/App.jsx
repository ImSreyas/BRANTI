import "./Layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerLayout from "./pages/customer/components/layout/CustomerLayout"
import Home from "./pages/customer/Home";
import Category from "./pages/customer/Category";
import Trending from "./pages/customer/Trending";
import Notification from "./pages/customer/Notification";
import WishList from "./pages/customer/WishList";
import Cart from "./pages/customer/Cart";
import Profile from "./pages/customer/Profile";
import CustomerLogin from "./pages/customer/CustomerLogin";
import Offers from "./pages/customer/Offers";
import SellerLogin from "./pages/seller/SellerLogin";

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
