import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.logo}>RegHelp</p>
            <div className={styles.authWrapper}>
                <button className={styles.loginBtn}>Login</button>
                <button className={styles.signBtn}>Sign up</button>
            </div>
        </header>
    );
};

export default Header;
