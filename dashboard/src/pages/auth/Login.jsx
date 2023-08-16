/* eslint-disable no-mixed-spaces-and-tabs */
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logowhite.svg'

const login = () => {
  return (
    <>
         <div className="main-wrapper login-body">
            <div className="login-wrapper">
            	<div className="container">
                	<div className="loginbox">
                      <div className="login-left">
                        <img className="img-fluid" src={logo} alt="Logo" />
                      </div>
                      <div className="login-right">
                          <div className="login-right-wrap">
                            <h1>Login</h1>
                            <p className="account-subtitle">Access to our dashboard</p>
                            <form action="">
                                <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                  <input className="form-control" type="text" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                  <button className="btn btn-primary btn-block" type="submit">Login</button>
                                </div>
                            </form>
                            <div className="text-center forgotpass"><Link to="/forgot">Forgot Password?</Link></div>
                            <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
         </div>
    </>
   
  )
}

export default login;