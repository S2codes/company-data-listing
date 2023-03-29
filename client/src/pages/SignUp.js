import { useRef } from "react";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import { BiEnvelope, BiLock } from "react-icons/bi";

import useSignup from "../hooks/useSignup";

import Nav from "../components/Nav";
import classes from "../styles/Login.module.css";
const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {signup, error, loading } = useSignup();

    const submitHandler = async (event) => {
        event.preventDefault();
        let enteredEmail = emailRef.current.value;
        let enteredPassword = passwordRef.current.value;
        await signup(enteredEmail, enteredPassword);

    }
  return (
    <>
        <Nav />
      <div className={classes["card-container"]}>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes.context}>
              <h3>Sign Up</h3>
              <small>Create new account</small>
            </div>
            <form className={classes["form-control"]} onSubmit={submitHandler}>
              <div className={classes.inputs}>
                <div className={classes.email}>
                  <BiEnvelope className={classes.icon} size="1.3rem" />
                  <input type="email" placeholder="Email" required  ref={emailRef}/>
                </div>
                <div className={classes.password}>
                  <BiLock className={classes.icon} size="1.3rem" />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    minLength={6}
                    ref={passwordRef}
                  />
                </div>
              </div>
              <div className={classes.submit}>
                <button type="submit" disabled={loading}>Sign Up</button>
              </div>
            </form>
                <Link className={classes.link} to="/login"> Already have an account? Log in</Link> 
                {error && <p>{error}</p>}
          </div>
        </Card>
      </div>
    </>
  );
};

export default SignUp;
