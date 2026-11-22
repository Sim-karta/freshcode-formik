import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/ui/HomePage";
import LoginPage from "../../pages/login/LoginPage";
import SignPage from "../../pages/sign/SignPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/sign",
        element: <SignPage />,
    },
]);
