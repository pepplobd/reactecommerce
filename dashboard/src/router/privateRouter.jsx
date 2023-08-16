// create Public Router

import Dashboard from "../pages/dashboard/Dashboard";
import User from "../pages/user/User";

const privateRouter = [
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/user",
        element: <User />,
    }
];

// Export Router

export default privateRouter;