import { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import FacebookLogin from "react-facebook-login";
import axios from "axios";
import Card from "../components/UI/Card";
import SocialButton from "../components/SocialButton";
import { BiEnvelope, BiLock } from "react-icons/bi";
// import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import useLogin from "../hooks/useLogin";
import { useGoogleLogin } from "@react-oauth/google";

import Nav from "../components/Nav";
import classes from "../styles/Login.module.css";
const Login = () => {
  const { login, error, loading } = useLogin();
  const [socialError, setSocialError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    let enteredEmail = emailRef.current.value;
    let enteredPassword = passwordRef.current.value;
    await login(enteredEmail, enteredPassword);
  };
  const getUserInfo = async (accessToken) => {
    const userInfoUrl = "https://www.googleapis.com/oauth2/v3/userinfo";
    const response = await axios.get(userInfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = response.data;
    return userInfo;
  };
  const handleSocialLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const { access_token } = tokenResponse;
      const userInfo = await getUserInfo(access_token);
      // console.log(userInfo);
    },
    onError: async (errorResponse) => {
      setSocialError(true);
    },
  });
  return (
    <>
      <Nav />
      <div className={classes["card-container"]}>
        <Card>
          <div className={classes.wrapper}>
            <div className={classes.context}>
              <h3>Login to your account</h3>
              <small>Welcome back select a method to log in</small>
            </div>
            <form className={classes["form-control"]} onSubmit={submitHandler}>
              <div className={classes.inputs}>
                <div className={classes.email}>
                  <BiEnvelope className={classes.icon} size="1.3rem" />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={emailRef}
                  />
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
              <div className={classes.checks}>
                <div>
                  <input type="checkbox" id="check" />
                  <label htmlFor="check">Remember me</label>
                </div>
                <Link className={classes.link} to="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <div className={classes.submit}>
                <button type="submit" disabled={loading}>
                  Log in
                </button>
              </div>
            </form>
            <Link className={classes.link} to="/signup">
              New here? Sign Up
            </Link>
          </div>
          <div className={classes["or-container"]}>or continue with</div>
          <div className={classes["social-container"]}>
            <SocialButton onClick={() => handleSocialLogin()}>
              <FcGoogle size={"1.2rem"} />{" "}
              <span className={classes["social-text"]}>Google</span>
            </SocialButton>
            {/* <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              cssClass="my-facebook-button-class"
              icon={<MdOutlineFacebook />}
            /> */}
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {socialError && <p style={{ color: "red" }}>Social Login Failed</p>}
        </Card>
      </div>
    </>
  );
};

export default Login;
