// import React from "react";
import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/slice/authSlice";
import { Link } from "react-router-dom";

const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "abhishekshetter1999@gmail.com") {
    return children;
  }
  return (
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Permission Denied.</h2>
        <p>This Page only viewed by Admin User.</p>
      </div>
      <br />
      <Link to="/">
        <button className="--btn">&larr; Back To Home</button>
      </Link>
    </section>
  );
};
export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "abhishekshetter1999@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
