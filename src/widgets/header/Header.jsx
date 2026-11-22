import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.logo}>
                RegHelp
            </NavLink>
            <div className={styles.authWrapper}>
                <NavLink to="/login" className={styles.loginBtn}>
                    Login
                </NavLink>
                <NavLink to="/sign" className={styles.signBtn}>
                    Sign up
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
