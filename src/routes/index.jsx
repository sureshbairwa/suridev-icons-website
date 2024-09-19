import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Playground from "../pages/Playground";
// import { Triangle4 } from "suridev-icons";
import Test from "../pages/Test";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "",
                element: <Home  />
            },
            {
                path: "docs",
                element: <Docs/>
            },
            {
                path: "/playground",
                element: <Playground/>
            },
            {
                path: "test",
                element: <Test/>
            }
            
        ]

    }
])

export default router;
