import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Addtask from "../../Pages/Addtask/Addtask";
import Completedtask from "../../Pages/Completedtask/Completedtask";
import Home from "../../Pages/Home/Base/Home";
import Mytasks from "../../Pages/Mytask/Mytasks";
import Signin from "../../Pages/Shared/Signin/Signin";
import Signup from "../../Pages/Shared/Signup/Signup";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addtask",
        element: (
          <PrivetRoute>
            <Addtask></Addtask>
          </PrivetRoute>
        ),
      },
      {
        path: "/completedtask",
        element: (
          <PrivetRoute>
            <Completedtask></Completedtask>
          </PrivetRoute>
        ),
      },
      {
        path: "/mytask",
        element: (
          <PrivetRoute>
            <Mytasks></Mytasks>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
export default router;
