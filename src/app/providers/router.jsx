import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout/MainLayout";
import HomePage from "../../pages/home/ui/HomePage";
import LoginPage from "../../pages/login/LoginPage";
import SignPage from "../../pages/sign/SignPage";

export const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
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
        ],
    },
]);
