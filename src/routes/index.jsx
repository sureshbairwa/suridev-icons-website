import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Docs from "../pages/Docs";


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
            }
            
        ]

    }
])

export default router;
