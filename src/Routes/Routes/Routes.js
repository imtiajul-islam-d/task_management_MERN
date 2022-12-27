import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Addtask from "../../Pages/Addtask/Addtask";
import Completedtask from "../../Pages/Completedtask/Completedtask";
import Home from "../../Pages/Home/Base/Home";
import Mytasks from "../../Pages/Mytask/Mytasks";
import Signin from "../../Pages/Shared/Signin/Signin";
import Signup from "../../Pages/Shared/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <Addtask></Addtask>
            },
            {
                path: '/completedtask',
                element: <Completedtask></Completedtask>
            },
            {
                path: '/mytask',
                element: <Mytasks></Mytasks>
            },
            {
                path: '/login',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])
export default router;