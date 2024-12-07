import React, { useEffect, useState } from "react";
import "./Sidebar.css"; // Ensure you have this CSS file
import img1 from "../Assests/img1.png";
import img2 from "../Assests/img2.png";
import img3 from "../Assests/img3.png";
import img4 from "../Assests/img4.png";
import img5 from "../Assests/img5.jpg";
import img6 from "../Assests/img6.jpg";
import img7 from "../Assests/img7.png";
import img8 from "../Assests/img8.png";
import { useNavigate } from 'react-router-dom';
import SettingForm from './SettingForm';
import axios from "axios";

function Sidebar() {
  const navigate=useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [errors, setErrors] = useState({});
   const [data, setData] = useState({
    name: "",
    user_type: "",
    email: "",
    password: "",
    contact: "",
    password_confirmation: ""
});
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleSubmit =  () =>{
navigate('/login')
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    // Clear error on change
    setErrors({ ...errors, [e.target.name]: '' });
}



  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://muzamilbackend.gmgsolution.com/api/logged-in-user', {
                headers: {
                    Authorization: `Bearer 328|bQFmuR7ZRmhzlRUlNLQhkZ5O0h4v9fpm4HDsoyWb4a43d097` // Replace with your actual access token
                }
            });
            console.log(response.data);
            // Assuming the response contains data that you want to set in your state
            setData(response.data);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch data');
        }
    }

    // Call fetchData when the component mounts to fetch data
    fetchData();
}, []);

  return (
    <div className="app-container">
      <div className={`sidebar ${isSidebarOpen ? "" : "closed"}`}>
        <div className="logo-details">
          <span className="logo_name"><img src={img8} style={{width:"200px",height:"200px" ,paddingTop:"12px"}}/></span>
        </div>
        <br/>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className="bx bx-grid-alt"></i>
              <span className="links_name"> Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name"> Teachers</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name" > Students</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name"> Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-message"></i>
              <span className="links_name"> Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart"></i>
              <span className="links_name"> Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name"> Setting</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out"></i>
                <button className="btn3" onClick={handleSubmit} style={{paddingLeft:"3px"}}>  LogOut</button>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav className="navbar2" style={{ backgroundColor: "#152259", height: "70px" }}>
          <div className="sidebar-button" onClick={toggleSidebar}>
            <div className="navbar2">
              <i
                className="bx bx-menu sidebarBtn"
                style={{ color: "white", padding: "18px" ,fontSize:"30px"}}
              ></i>
              <span className="dashboard" style={{ color: "white" ,height: "70px" }}>
              <i className="fas fa-bell" style={{fontSize:"30px"}}></i>
              <i className="fa-solid fa-envelope"  style={{fontSize:"30px"}}></i>
              </span>
              <span  className="tittle-nav text-white text-center" >University</span>
              <span className="admin" style={{ color: "white" ,fontSize:"20px" }}>
              <h1>{data.data?.user?.name}</h1> 
              </span>
              <img className="dashboard" src={img2} alt="" style={{with:"60px" ,height:"56px",paddingLeft:"8px",paddingTop:"10px"}} />
             
            </div>
          </div>
        </nav>

        <div className="home-content" id="text-white">
         <SettingForm/>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;