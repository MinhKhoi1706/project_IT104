import "./Login.css";
import loginImage from "../../assets/images/login-illustration.png";
import loginIcon from "../../assets/images/login-iconBird.png";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Cột trái */}
        <div className="login-left">
          <img src={loginImage} alt="login illustration" />
        </div>

        {/* Cột phải */}
        <div className="login-right">
          <div className="social-login">
            <h2>Sign in with</h2>
            <button className="social-btn fb">f</button>
            <button className="social-btn tw">
              <img src={loginIcon} alt="login iconBird" />
            </button>
            <button className="social-btn li">in</button>
          </div>

          <p className="or-text">Or</p>

          <form className="login-form">
            <div className="form-group">
              <input type="email" placeholder="Enter a valid email address" />
              <label>Email address</label>
            </div>

            <div className="form-group">
              <input type="password" placeholder="Enter password" />
              <label>Password</label>
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>

            <p className="register-text">
              Don't have an account?{" "}
              <a href="/register" className="register-link">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="login-footer">
        <p>Copyright © 2025. All rights reserved.</p>
        <div className="footer-icons">
          <span className="social-btn li">f</span>
          <span className="social-btn tw">
            <img src={loginIcon} alt="login iconBird" />
          </span>
          <span className="social-btn gg">G</span>
          <span className="social-btn li">in</span>
        </div>
      </footer>
    </div>
  );
}

export default Login;
