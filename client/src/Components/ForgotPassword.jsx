import { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";

function ForgotPassword() {

    const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3000/auth/forgot-password", {
        email,
      }).then((response) => {
        if (response.data.status) {
            alert('check your email for reset password link!')
          navigate("/login");    
        }
        
      }).catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="body-forget">
     <div className="wrapper-forget">
      <form className="form-box-forget" onSubmit={handleSubmit}>
        <h1> Forgot Password</h1>
        
        {/* <label htmlFor="email">Email:</label> */}
        <div className="input-box-forget">
        <input htmlFor="email"
          type="email"
          autoComplete="off"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        /><MdAttachEmail className="icon-forget"/>
        </div>

        <button type="submit" className="button-forget">Send</button>
        
      </form>
     </div>
    </div>
  )
}

export default ForgotPassword;
