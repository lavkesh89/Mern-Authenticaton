import axios from "axios"
import { Link } from "react-router-dom";
import {useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () =>{

  axios.get('http://localhost:3000/auth/logout')
    .then(res =>{
      if(res.data.status){
        navigate('/login')
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="hm"><h1>Home</h1><br/>
      <button><Link to="/dashboard" className="dash">DASHBOARD</Link></button><br/><br/>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default Home;
