import { useState } from "react";
import "../App.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUser  } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      }).then((response) => {
        if (response.data.status) {
          navigate("/login");
        // console.log(response);
        }
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="body-register">
    <div className="wrapper-register">
      <div className="form-box-register">
      <form  onSubmit={handleSubmit}>
        <h1> Sign Up</h1>

        <div className="input-box-register">
        {/* <label htmlFor="username" className="text-left">Username:</label> */}
        <input htmlFor="username"
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        /><FaUser className="icon-register"/>
         </div>

        <div className="input-box-register">
        {/* <label htmlFor="email" className="text-left">Email:</label> */}
        <input htmlFor="email"
          type="email"
          autoComplete="off"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        /><MdAttachEmail className="icon-register"/>
        </div>

        <div className="input-box-register">
        {/* <label htmlFor="password" className="text-left">Password:</label> */}
        <input htmlFor="password"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        /><RiLockPasswordFill className="icon-register"/>
         </div>

        <button type="submit" className="form-button-register">Sign Up</button>
        <p className="para">
          Already have an account? <Link to="/login" className="login-t-text-register">Login</Link>
        </p>
      </form>
    </div>
  </div>
  </div>
  );
}

export default Signup;
