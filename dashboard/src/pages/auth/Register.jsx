/* eslint-disable no-mixed-spaces-and-tabs */
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logowhite.svg'

const Register = () => {
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
								<h1>Register</h1>
								<p className="account-subtitle">Access to dashboard</p>
                                    <form action="">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <button className="btn btn-primary btn-block" type="submit">Register</button>
                                        </div>
                                    </form>
								
								<div className="text-center dont-have">Already have an account <Link to="/login">Login</Link></div>
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      </>
  )
}

export default Register;