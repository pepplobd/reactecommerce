import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';
import avator from '../../assets/img/avator.png';

import useDropdownPopup from "../../hooks/useDropdownPopup";


const Dashboard = () => {
  const { isOpen, toggleMenu, dropDownRef } = useDropdownPopup();
  const {
    isOpen: isNotification,
    toggleMenu: toggleNotification,
    dropDownRef: notificationRef
  } = useDropdownPopup();
  const { 
    isOpen: isMenuOpen,
    toggleMenu: toggleMenuBar,
    dropDownRef: menuRef
  } = useDropdownPopup();
  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <Link to="/login" className="logo">
            <img src={logo} alt="Logo" />
            </Link>
            <Link to="/" className="logo logo-small">
              <img src={logo} alt="Logo" width="30" height="30" />
            </Link>
          </div>
          <Link to="" id="toggle_btn">
            <i className="fe fe-text-align-left"></i>
          </Link>
          <div className="top-nav-search">
            <form>
              <input type="text" className="form-control" placeholder="Search here" />
              <button className="btn" type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
          <Link className="mobile_btn" id="mobile_btn">
            <i className="fa fa-bars"></i>
          </Link>
          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown" ref={notificationRef}>
                <Link to="#" className="dropdown-toggle nav-link"  data-toggle="dropdown"
                onClick={toggleNotification}>
                <i className="fe fe-bell"></i> <span className="badge badge-pill">3</span>
                </Link> 
                {isNotification && (<div className="dropdown-menu notifications d-block" >
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to="" className="clear-noti"> Clear All </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="#">
              
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img className="avatar-img rounded-circle" alt="User Image" src={avator} />
                          </span>
                          <div className="media-body">
                            <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                            <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                          </div>
                        </div>
                      </Link>
                      </li>
                    </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="#">View all Notifications</Link>
                </div>
              </div>) }
                                      
            </li>
            <li className="nav-item dropdown has-arrow" ref={dropDownRef}>
              <Link to={"#"} className="dropdown-toggle nav-link" data-toggle="dropdown" onClick={toggleMenu}>
                <span className="user-img"><img className="rounded-circle"src={avator} width="31" alt="Ryan Taylor" /></span>
              </Link>
              {isOpen && (<div className="dropdown-menu d-block">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img src={avator} alt="User Image" className="avatar-img rounded-circle" />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <Link className="dropdown-item" to="profile.html">My Profile</Link>
                <Link className="dropdown-item" to="settings.html">Settings</Link>
                <Link className="dropdown-item" to="login.html">Logout</Link>
              </div>)}
            </li>
          </ul>
        </div>
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                  <li className="active"> 
                    <Link to="index.html"><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                  </li>
                  <li className="submenu" ref={menuRef}>
                      <Link to="#" onClick={toggleMenuBar}><i className="fe fe-user"></i> <span> User</span> <span className="menu-arrow"></span></Link>
                      {isMenuOpen && (
                        <ul style={{display: 'block'}}>
                        <li><Link to="/user">Basic Tables </Link></li>
                        <li><Link to="/">DatLink Table </Link></li>
                      </ul>
                      )}
                  
                  </li>
              </ul>
              </div>
            </div>
        </div>



        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>	
				
            <div className="row">
              <div className="col-md-12">
                
                <div className="card card-table">
                  <div className="card-header">
                    <h4 className="card-title">Appointment List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Patient Name</th>
                            <th>Apointment Time</th>
                            <th>Status</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                              </h2>
                            </td>
                            <td>Dental</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                            <td>
                              <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-primary"><i className="fe fe-eye"></i></button>
                              <button className="btn btn-sm btn-warning"><i className="fe fe-edit"></i></button>
                              <button className="btn btn-sm btn-danger"><i className="fe fe-trash"></i></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                              </h2>
                            </td>
                            <td>Dental</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                            <td>
                              <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-primary"><i className="fe fe-eye"></i></button>
                              <button className="btn btn-sm btn-warning"><i className="fe fe-edit"></i></button>
                              <button className="btn btn-sm btn-danger"><i className="fe fe-trash"></i></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                              </h2>
                            </td>
                            <td>Dental</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                            <td>
                              <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-primary"><i className="fe fe-eye"></i></button>
                              <button className="btn btn-sm btn-warning"><i className="fe fe-edit"></i></button>
                              <button className="btn btn-sm btn-danger"><i className="fe fe-trash"></i></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                              </h2>
                            </td>
                            <td>Dental</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                            <td>
                              <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-primary"><i className="fe fe-eye"></i></button>
                              <button className="btn btn-sm btn-warning"><i className="fe fe-edit"></i></button>
                              <button className="btn btn-sm btn-danger"><i className="fe fe-trash"></i></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                              </h2>
                            </td>
                            <td>Dental</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                            <td>
                              <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-primary"><i className="fe fe-eye"></i></button>
                              <button className="btn btn-sm btn-warning"><i className="fe fe-edit"></i></button>
                              <button className="btn btn-sm btn-danger"><i className="fe fe-trash"></i></button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Dr. Ruby Perrin</a>
                              </h2>
                            </td>
                            <td>Dental</td>
                            <td>
                              <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={avator}  alt="User Image" /></a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                            <td>
                              <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked />
                                <label htmlFor="status_1" className="checktoggle">checkbox</label>
                              </div>
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-primary"><i className="fe fe-eye"></i></button>
                              <button className="btn btn-sm btn-warning"><i className="fe fe-edit"></i></button>
                              <button className="btn btn-sm btn-danger"><i className="fe fe-trash"></i></button>
                            </td>
                          </tr>
                        
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>							
                
              </div>
            </div>
          </div>			
        </div>

      </div>
    
    </>
  )
}

export default Dashboard