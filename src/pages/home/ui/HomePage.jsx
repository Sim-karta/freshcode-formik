import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>RegHelp</h1>
            <p className={styles.subtitle}>
                Зареестрйтеся або створіть новий аккаунт
            </p>
            <div className={styles.authWrapper}>
                <NavLink to="/login" className={styles.loginBtn}>
                    Login
                </NavLink>
                <NavLink to="/sign" className={styles.signBtn}>
                    Sign up
                </NavLink>
            </div>
        </div>
    );
};

export default HomePage;
