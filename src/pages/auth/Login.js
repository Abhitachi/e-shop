/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/Config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    console.log(email, password);
    setLoadingState(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setLoadingState(false);
        toast.success("login Successfull", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
        // ...
      })
      .catch((error) => {
        setLoadingState(false);
        toast.error(error.messaage, {
          position: toast.POSITION.TOP_CENTER,
        });
        // ..
      });
  };

  const provider = new GoogleAuthProvider();

  const signInWithGoogle = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Logged in Successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.messaage, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <>
      {loadingState && <Loader />}
      {/*1.truthy and truthy weird js returns second truthy val 
      2.falsy && truthy js returns first falsy here (loadingState)which is boolean react don't
      render boolean null and undefined */}

      <section className={`container  ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>

            <form onSubmit={loginUser}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" /> Login With Google
            </button>
            <span className={styles.register}>
              <p>Don't have an Account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
