import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-4 ml-2 shadow p-3 bg-light rounded">
                            <div className="row">
                                <div className="icons mt-2 px-4"><i className="fa fa-phone"></i></div>
                                <div className="content">
                                    <midium><strong>Contact</strong></midium>
                                    <p>9155532679</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 ml-2 shadow p-3 rounded" style={{ background: "#f1f1" }}>
                            <div className="row">
                                <div className="icons mt-2 px-4"><i className="fa fa-envelope"></i></div>
                                <div className="content">
                                    <midium><strong>Email</strong></midium>
                                    <p>Mrinal@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ml-2 shadow p-3 bg-light rounded">
                            <div className="row">
                                <div className="icons mt-2 px-4"><i className="fa fa-home"></i></div>
                                <div className="content">
                                    <midium><strong>Aaddress</strong></midium>
                                    <p>Near santi home muzz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 first shadow p-3 mb-5 bg-white rounded mt-5 p-4">
                            <h2>Get In Touch</h2>
                            <form>
                                <div className="form-row mt-4 px-4">
                                    <div className="form-group mr-3">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group mr-3">
                                        <input type="text" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group mr-3">
                                        <input type="text" className="form-control" id="phone" placeholder="Your Phone" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea rows="4" cols="80" className="form-control" name="comment" form="usrform">
                                        Enter Message here...</textarea>
                                </div>
                                <button type="submit" className="btn btn-primary col-3">Send Message</button>
                            </form>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
