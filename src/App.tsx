import { FC } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import "./App.css";
import { LayoutComponent } from "./layout";
import HomePage from "./modules/home/home";

const App: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/hrms",
      element: <LayoutComponent />,
      children: [
        {
          /* path: "contact",
          element: <Contact />, */
        }
      ],
    },
    {
      path: "/",
      element: <HomePage />
    }
  ]);
  
  return <>
  <RouterProvider router={router} />
  </>;
};

export default App;
