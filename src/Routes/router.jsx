import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import CollegeDetails from "../pages/Home/CollegeCard/CollegeDetails";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "details/:id",
                element: <CollegeDetails></CollegeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "registration",
                element: <Registration></Registration>
            },
            {
                path: "colleges",
                element: <Colleges></Colleges>
            },
            {
                path: "admission",
                element: <Admission></Admission>
            },
            {
                path: "mycollege",
                element: <MyCollege></MyCollege>
            },
        ]
    }
])

export default router