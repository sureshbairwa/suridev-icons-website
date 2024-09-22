import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Docs from "../pages/Docs";
import Test from "../pages/Test";
import Animation from "../pages/Animation";


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
                path: "/animation",
                element: <Animation/>
            },
            {
                path: "test",
                element: <Test/>
            }
            
            
        ]

    }
])

export default router;
