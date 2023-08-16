// create Public Router

import Register from "../pages/auth/Register";
import Login from "../pages/auth/login";
import Forgot from "../pages/auth/Forgot";


const publicRouter = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot",
        element: <Forgot />,
    }
];


// Export Router

export default publicRouter;

