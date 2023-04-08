import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: async () =>
         await fetch(
            "tshirts.json"
          ),
      },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
