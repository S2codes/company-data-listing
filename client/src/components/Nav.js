import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from '../hooks/useAuthContext';
import logo from "../assets/logo-v2.png";
import classes from "../styles/Nav.module.css";

const Nav = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout();

    const logoutHandler = () => {
        logout();
    }
    return (
        <>

            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <img src={logo} alt="logo" className={classes.logoImg} />

                </div>
                <NavLink to="/" className={classes.links}>Home</NavLink>
                {!user && (
                    <>
                        <NavLink to="/signup" className={classes.links}>Sign Up</NavLink>
                        <NavLink to="/login" className={classes.links}>Login</NavLink>
                    </>
                )}
                <div className={classes.profile}>

                    {user && <p>{user.email}</p>}
                    {user && <button onClick={logoutHandler}>Logout</button>}
                </div>

            </div>
        </>
    )
}

export default Nav