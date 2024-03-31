import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Login successful!");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setError("Login failed");
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col ">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-ghost" onClick={handleGoogleSignIn}>
                Login With Google
              </button>
            </div>
          </form>
          <p className="text-center md:mb-5">
            New There? Please{" "}
            <Link to="/register">
              <button className="btn btn-link">Register</button>
            </Link>
          </p>
        </div>
      </div>
      {error && <p className="text-center md:mb-5">{error}</p>}
      {success && <p className="text-center md:mb-5">{success}</p>}
    </div>
  );
};

export default Login;
