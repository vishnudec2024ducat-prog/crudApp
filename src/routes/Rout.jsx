import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Admin from "../CrudApp/Admin";
import NotPageFound from "../CrudApp/NotPageFound";

export const router = createBrowserRouter([
  { path: "/", element: <App />,children:[
    {path:"/Admin", element:<Admin/>}
  ] },
  { path: "/*", element: <NotPageFound /> },
]);