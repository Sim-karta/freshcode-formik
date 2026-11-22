import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>RegHelp</h1>
            <p>Зареестрйтеся або створіть новий аккаунт</p>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/sign">Sign</NavLink>
        </>
    );
};

export default HomePage;
