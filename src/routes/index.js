import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signIn";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
