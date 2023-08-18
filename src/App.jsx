import "./style/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomerLayout from "./pages/customer/common/Layout";
import Home from "./pages/customer/home";
import Category from "./pages/customer/category";
import Trending from "./pages/customer/trending";
import Notification from "./pages/customer/notification";
import WishList from "./pages/customer/wishlist";
import Cart from "./pages/customer/cart";
import Profile from "./pages/customer/profile";
import CustomerLogin from "./pages/customer/login";
import Offers from "./pages/customer/offers";
import SellerLogin from "./pages/seller/login";
import { loader } from "./pages/customer/login";
import CustomerSignIn from "pages/customer/common/signin";

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
          loader,
        },
        {
          path: "offers",
          element: <Offers />,
        },
        {
          path: "seller",
          element: <SellerLogin />,
        },
        {
          path: "signIn",
          element: <CustomerSignIn />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
