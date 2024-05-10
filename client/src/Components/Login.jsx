import { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {

    e.preventDefault();
    Axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      }).then((response) => {
        if (response.data.status) {
          navigate("/");
        // console.log(response);
        }
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="body-login">
    <div className="wrapper-login">
      <div className="form-box-login">
      <form  onSubmit={handleSubmit}>
        <h1> Login</h1>

        <div className="input-box-login">
        {/* <label htmlFor="email">Email:</label> */}
        <input htmlFor="email"
          type="email"
          autoComplete="off"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        /><MdAttachEmail className="icon"/>
        </div>

        <div className="input-box-login">
        {/* <label htmlFor="password">Password:</label> */}
        <input htmlFor="password"
          type="password"
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
        /><RiLockPasswordFill className="icon"/>
        </div>

        <Link to="/forgotPassword" className="remember-forgot-login">Forgot Password ?</Link>

        <button type="submit" className="button-login">Login</button>
        <div className="register-link-login">
        <p>
          Dont have an Account? <Link to="/signup" className="login-t-text-login"> Sign Up</Link>
        </p>
        </div>
      </form>
    </div>
  </div>
  </div>
  );
}

export default Login;
