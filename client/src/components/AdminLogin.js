import { useRef } from "react";
import Card from "../components/UI/Card";
import { BiUser, BiLock } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";
import classes from "../styles/AdminLogin.module.css";

const AdminLogin = () => {
  const {visitAdmin, error, loading } = useAdmin();
  const userRef = useRef();
  const passwordRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    let enteredUser = userRef.current.value;
        let enteredPassword = passwordRef.current.value;
        await visitAdmin(enteredUser, enteredPassword);
  };
  return (
    <>
    <div className={classes['card-container']}>
    <Card>
    <div className={classes.wrapper}>

    
            <div className={classes.context}>
                <h3>Admin Login</h3>
                <small>Welcome back to admin site</small>
            </div>
        <form className={classes['form-control']} onSubmit={submitHandler}>
            <div className={classes.inputs}>
            <div className={classes.username}>
                <BiUser className={classes.icon} size="1.3rem"/>
                <input type="text" placeholder="Username" required ref={userRef}/>
            </div>
            <div className={classes.password}> 
                <BiLock className={classes.icon} size="1.3rem"/>
                <input type="password" placeholder="Password" required minLength={6} ref={passwordRef} />
            </div>
            </div>
           
            <div className={classes.submit}>
                <button type="submit" disabled={loading}>Log in</button>
            </div>
        </form>
        <div>

        </div>
        </div>
        {error && <p style={{color: "red"}}>{error}</p>}
      </Card>
    </div>
      
    </>
  );
};

export default AdminLogin;
