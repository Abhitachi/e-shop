import styles from "./auth.module.scss";
import Card from "../../components/card/Card";

import { Link } from "react-router-dom";
import resetImg from "../../assets/forgot.png";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/Config";
import { toast } from "react-toastify";

const Reset = () => {
  const [email, setEmail] = useState("");

  const resetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset Password Email sent to you");
        // ..
      })
      .catch((error) => {
        toast.error("Not a Valid Mail");
      });
  };
  return (
    <section className={`container  ${styles.auth}`}>
      <div className={styles.img}>
        <img src={resetImg} alt="resetPassword" width="400" />
      </div>
      <Card>
        <div className={styles.form}>
          <h2>Reset Password</h2>

          <form onSubmit={resetPassword}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>

            <div className={styles.links}>
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
