import { Outlet } from "react-router-dom";
import Header from "../../../widgets/header/Header";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
