import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  return <div><h1>DASH-BOARD</h1></div>;
};

export default Dashboard;
