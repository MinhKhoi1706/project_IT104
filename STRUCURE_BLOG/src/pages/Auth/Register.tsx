import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">
      <div className="overlay"></div>

      <div className="register-content">
        {/* Bên trái */}
        <div className="register-left">
          <h1>Welcome to the website</h1>
          <p align='center'>RIKKEI EDUCATION</p>
        </div>

        {/* Bên phải (Form) */}
        <div className="register-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Enter first name"  className="box1"/>
                <label>First name</label>
              </div>

              <div className="form-group">
                <input type="text" placeholder="Enter last name" className="box1"/>
                <label>Last name</label>
              </div>
            </div>

            <div className="form-group">
              <input type="email" placeholder="Enter your email" />
              <label>Email address</label>
            </div>

            <div className="form-group">
              <input type="password" placeholder="Enter password" />
              <label>Password</label>
            </div>

            <div className="form-group">
              <input type="password" placeholder="Confirm password" />
              <label>Confirm Password</label>
            </div>

            <button type="submit" className="btn-register">
              Sign up
            </button>

            <p className="login-text">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                  Login
                </Link>
              </p>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
