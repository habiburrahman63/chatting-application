import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/Page/SignUp";
import Login from "./components/Page/Login";
import firebaseConfig from "./components/Firebase/firebaseConfig";
import ForgotPassword from "./components/Page/ForgotPassword";
import Home from "./components/Page/Home";
import Massege from "./components/Massege/Massege";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/msg",
      element: <Massege />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
