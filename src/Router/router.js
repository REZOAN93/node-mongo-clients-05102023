import { createBrowserRouter } from "react-router-dom";
import CreateUser from "../Components/CreateUser/CreateUser";
import Displayuser from "../Components/Displayuser/Displayuser";
import Main from "../Components/Main/Main";
import UpdateUser from "../Components/UpdateUser/UpdateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <CreateUser />,
      },
      {
        path: "/users",
        element: <Displayuser />,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/users/:id",
        element: <UpdateUser />,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
      },
    ],
  },
]);
