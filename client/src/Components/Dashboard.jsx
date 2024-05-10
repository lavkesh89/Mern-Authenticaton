import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import '../Css/Style.css';

const Dashboard = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect(() => {
    axios.get("http://localhost:3001/auth/verify")
    .then(res => {
       if(res.data.status){
        console.log();
       }else{
        navigate('/')
       }

    });
  }, []);
  return (
    <div><h1>DASHBOARD-- in GITHUB</h1></div>
  );
};

export default Dashboard;
