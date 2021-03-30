import React from 'react'
import { Link } from "react-router-dom";
import signin from '../images/signin.svg';

const Login = () => {
    return (
        <>
            <section className="Login">
                <div className="container">
                    <div className="mycard">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="myrightctn">
                                    <div className="box">
                                        <header className="mb-3">Hello Users</header>
                                        <div className="img mb-4">
                                            <img src={signin} alt="signup image" style={{ height: "160px", width: "300px" }} />
                                        </div>
                                        <p>Width and height utilities are generated from the $sizes Sass map in _variables.scss. Includes support for
                                        25%, 50%, 75%, and 100% by default. Modify those values as you need to generate different utilities here.</p>
                                        <input type="button" className="btn_out" value="Learn More" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="myleftctn">
                                    <form className="myform text-center" id="registraction-form">
                                        <header>Sign In</header>
                                        <div className="form-group">
                                            <i class="fa fa-envelope"></i>
                                            <input className="Myinput" type="email" name="email" id="email" placeholder="Your Email" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <i class="fa fa-unlock"></i>
                                            <input className="Myinput" type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
                                        </div>
                                        <input type="submit" className="butt" value="Log In" />
                                    </form>
                                    <div className="forgetpassword mt-3 text-center">
                                        <Link to="/signup"><p>Forget Password ..</p>
                                        </Link>
                                    </div><hr className="fborder" />
                                    <div className="socialheading mt-5">
                                        <p>Login With...</p>
                                    </div>
                                    <div className="socialicon text-center mt-4">
                                        <Link to="www.google.com"><p><i className="fa fa-facebook"></i></p></Link>
                                        <Link to="/"><p><i className="fa fa-linkedin"></i></p></Link>
                                        <Link to="/"><p><i className="fa fa-twitter"></i></p></Link>
                                        <Link to="/"><p><i className="fa fa-instagram"></i></p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;