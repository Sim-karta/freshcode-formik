import { Outlet } from "react-router-dom";
import Header from "../../../widgets/header/Header";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
    return (
        <div className={styles.body}>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
