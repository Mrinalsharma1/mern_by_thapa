import React from 'react'
import signup from '../images/signup.svg';

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="mycard">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="myleftctn">
                                    <form className="myform text-center" id="registraction-form">
                                        <header>Create New Account</header>
                                        <div className="form-group">
                                            <i className="fa fa-user"></i>
                                            <input className="Myinput" type="text" name="name" id="name" placeholder="Your Name" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <i class="fa fa-envelope"></i>
                                            <input className="Myinput" type="email" name="email" id="email" placeholder="Your Email" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <i className="fa fa-phone"></i>
                                            <input className="Myinput" type="number" name="mobile" id="mobile" placeholder="Mobile Number" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <i class="fa fa-briefcase"></i>
                                            <input className="Myinput" type="text" name="prof" id="prof" placeholder="Your Profession" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <i class="fa fa-unlock"></i>
                                            <input className="Myinput" type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <i class="fa fa-lock"></i>
                                            <input className="Myinput" type="password" name="cpassword" id="cpassword" placeholder="Conform Your Password" autoComplete="off" />
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                <input type="checkbox" id="check_1" name="check_1" className="m-2" />
                                                <small>I read and agree to Terms &  Condiction</small>
                                                <div className="invalid-feedback">you must check  the box.</div>
                                            </label>
                                        </div>
                                        <input type="submit" className="butt" value="CREATE ACCOUNT" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="myrightctn">
                                    <div className="box">
                                        <header className="mb-3">Hello Users</header>
                                        <div className="img mb-4">
                                            <img src={signup} alt="signup image" style={{ height: "160px", width: "300px" }} />
                                        </div>
                                        <p>Width and height utilities are generated from the $sizes Sass map in _variables.scss. Includes support for
                                        25%, 50%, 75%, and 100% by default. Modify those values as you need to generate different utilities here.</p>
                                        <input type="button" className="btn_out" value="Learn More" />
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
export default Signup;