import React, { useState } from "react";
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

function Sidebar() {
  const navigate=useNavigate()
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleSubmit =  () =>{
navigate('/login')
  }

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
                Admin
              </span>
              <img className="dashboard" src={img2} alt="" style={{with:"60px" ,height:"56px",paddingLeft:"8px",paddingTop:"10px"}} />
             
            </div>
          </div>
        </nav>

        <div className="home-content" id="text-white">
          <div className="overview-boxes">
            {/* <div
              className="card text-white"
              style={{
                width: "18rem",
                height: "17rem",
                backgroundColor: "#152259",
                font: "#FF5733;",
              }}
            >
              <div className="card-body ">
                <div className="container ">
                  <h5
                    className="card-title text-white text-center"
                    style={{ fontSize: "15px" }}
                  >
                    Welcome to Pakistan All Universities portal
                  </h5>
                  <br/>
                  <img src={img1} alt=""  style={{paddingLeft:"65px", height:"90px"}}/>
                </div>
                <br/>
                <p className="text-center " style={{fontSize:"20px" }}>
                  Top of  <span style={{ color: "yellow"}}>Year University
                  <br />
                  2023 </span>
                </p>
              </div>
            </div> */}
            <div
              className="card text-white"
              style={{
                width: "20rem",
                height: "17rem",
                backgroundColor: "#152259",
                font: "#FF5733;",
              }}
            >
              <div className="card-body ">
                <div className="container ">
                <h5
                    className="card-title text-white text-center"
                    style={{ fontSize: "20px" }}
                  >
                    Welcome to Pakistan All Universities portal
                  </h5>
                  <br/>
                  <img  src={img1} alt=""  style={{paddingLeft:"77px", height:"90px"}}/>
                </div>
                <br/>
                <p className="text-center " style={{fontSize:"20px" }}>
                  Top of  <span style={{ color: "yellow"}}>Year University
                  <br />
                  2023 </span>
                </p>
              
              </div>
            </div>
            <div
              className="card text-white"
              style={{
                width: "20rem",
                height: "17rem",
                backgroundColor: "#152259",
                font: "#FF5733;",
              }}
            >
              <div className="card-body ">
                <div className="container ">
                  <h5 className="card-title text-white text-center" style={{ fontSize: "35px" }}>STUDENTS</h5>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      
                    <img  src={img2} alt=""  className="img-res" style={{paddingLeft:"30px"}} />
                    </div>
                    <div className="col-sm text-center">
                      <h1 style={{ color: "yellow" }}>5M</h1>
                      <p style={{fontSize:"23px"}}>Register</p>
                    </div>
                  </div>
                  <img src={img5} alt="" style={{paddingLeft:"3px"}} />
                  <a href="#" className="card-link text-white">
                   <img src={img6} alt="" />
                  </a>
                  <a href="#" className="card-link text-white">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div
              className="card text-white"
              style={{
                width: "20rem",
                height: "17rem",
                backgroundColor: "#152259",
                font: "#FF5733;",
              }}
            >
              <div className="card-body ">
                <div className="container ">
                  <h5 className="card-title text-white text-center" style={{ fontSize: "35px" }}>TEACHERS</h5>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <img src={img3} className="img-res" alt="" style={{paddingLeft:"30px"}}/>
                    </div>
                    <div className="col-sm text-center">
                      <h1 style={{ color: "yellow" }}>5M</h1>
                      <p style={{fontSize:"23px"}}>Register</p>
                    </div>
                  </div>
                  <img src={img5} alt="" style={{paddingLeft:"3px"}} />
                  <a href="#" className="card-link text-white">
                  <img src={img6} alt="" />
                  </a>
                  <a href="#" className="card-link text-white">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card text-white"
              style={{
                width: "20rem",
                height: "17rem",
                backgroundColor: "#152259",
                font: "#FF5733;",
              }}
            >
              <div className="card-body ">
                <div className="container ">
                  <h5 className="card-title text-white text-center" style={{ fontSize: "35px" }}>UNIVERSITIES</h5>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <img src={img4}   className="img-res" alt="" style={{paddingLeft:"30px"}}/>
                    </div>
                    <div className="col-sm text-center">
                      <h1 style={{ color: "yellow" }}>5M</h1>
                      <p style={{fontSize:"23px"}}>Register</p>
                    </div>
                  </div>
                  <img src={img5} alt="" style={{paddingLeft:"3px"}} />
                  <a href="#" className="card-link text-white">
                  <img src={img6} alt="" />
                  </a>
                  <a href="#" className="card-link text-white">
                   View
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div
                className="title"
                style={{ display: "flex", justifyContent: "center" }}
              >
                Student List
              </div>
              
              <table>
                <br/>
        <tr className="text-dark">
            <th>  <input type="checkbox" className="checkbox" /></th>
            <th>Name</th>
            <th>Student ID</th>
            <th>Date Of Birth</th>
            <th>District</th>
            <th> City</th>
            <th>  Action</th>
        </tr>
        <br/>
        <tr className="text-dark">
            <td>  <input type="checkbox"  className="checkbox"/></td>
          <td> <img src={img2} alt="" style={{width:"30px"}} /> <span>   Salman Aftab </span></td> 
            <td>001</td>
            <td>1 oct 1998</td>
            <td>Urban</td>
            <td>Hyderabad</td>
            <td> <img src={img7} alt="" style={{width:"30px"}} /> </td> 
        </tr>
        <br/>
        <tr className="text-dark">
        <td>  <input type="checkbox"  className="checkbox"  /></td>
        <td> <img src={img2} alt="" style={{width:"30px"}} /> <span>   Salman Aftab </span></td> 
            <td>002</td>
            <td>1 oct 1998</td>
            <td>Urban</td>
            <td>Hyderabad</td>
            <td> <img src={img7} alt="" style={{width:"30px"}} /> </td>
        </tr>
        <br/>
        <tr className="text-dark">
        <td>  <input type="checkbox"  className="checkbox" /></td>
        <td> <img src={img2} alt="" style={{width:"30px"}} /> <span>   Salman Aftab </span></td> 
            <td>004</td>
            <td>1 oct 1998</td>
            <td>Urban</td>
            <td>Hyderabad</td>
            <td> <img src={img7} alt="" style={{width:"30px"}} /> </td> 
        </tr>
        <br/>
        <tr className="text-dark">
        <td>  <input type="checkbox"  className="checkbox" /></td>
        <td> <img src={img2} alt="" style={{width:"30px"}} /> <span>   Salman Aftab </span></td> 
            <td>004</td>
            <td>1 oct 1998</td>
            <td>Urban</td>
            <td>Hyderabad</td>
            <td> <img src={img7} alt="" style={{width:"30px"}} /> </td> 
        </tr>
        <br/>
        <tr className="text-dark">
        <td>  <input type="checkbox"  className="checkbox" /></td>
        <td> <img src={img2} alt="" style={{width:"30px"}} /> <span>   Salman Aftab </span></td> 
            <td>005</td>
            <td>1 oct 1998</td>
            <td>Urban</td>
            <td>Hyderabad</td>
            <td> <img src={img7} alt="" style={{width:"30px"}} /> </td> 
        </tr>
        <br/>
        <tr className="text-dark">
        <td>  <input type="checkbox"  className="checkbox" /></td>
        <td> <img src={img2} alt="" style={{width:"30px"}} /> <span>   Salman Aftab </span></td> 
            <td>006</td>
            <td>1 oct 1998</td>
            <td>Urban</td>
            <td>Hyderabad</td>
            <td> <img src={img7} alt="" style={{width:"30px"}} /> </td> 
            {/* <td> <img src={img7} alt="" style={{width:"30px"}} /> </td>  */}
        </tr>     
    </table>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;