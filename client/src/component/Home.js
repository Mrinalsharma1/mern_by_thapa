import React from 'react'
import Typical from 'react-typical';

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ minHeight: "90vh" }}>
                <div className="col-md-6 bg-warning right" style={{ width: "50vw", position: "relative" }}>
                    <div className="content p-2" style={{
                        width: "500px", height: "200px", borderRadius: "5%",
                        background: "#ff6", position: "absolute", top: "33%", right: "-250px", fontFamily
                            : "poppins"
                    }}>
                        <p className="text-center mt-4"><strong>WELCOME</strong></p>
                        <h1 className="ml-3">We Are<span className="ml-2 text-success">
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'MERN Developer', 1000,
                                    'MERN Stack', 1000

                                ]}
                            />
                        </span></h1>
                    </div>
                </div>
                <div className="col-md-6 left" style={{ width: "50vw" }}></div>
            </div>
        </div >
    )
}
export default Home;