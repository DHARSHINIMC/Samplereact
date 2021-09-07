import MyNavBar from "./Nav";
import "../App.css";
import heroImage from "../image/logo.PNG";
import Image from "../image/ruas2.PNG";
import Image1 from "../image/undergr.PNG";
import Image2 from "../image/post.PNG";
import Image3 from "../image/academic.PNG";
import{Col,Row}from "react-bootstrap"; 
import {Link} from "react-router-dom";

function HeroSection(){
    return(
        <div className="hero bg-dark-accent pad" style={{width:'100%'}}>
            <div class="container">
                <div class="py-5 row" style={{alignItems:'center'}}>
                    <div class="col-md-6"><img src={heroImage} alt="hero" className="hero-image"/></div>
                    <div class="text-center mt-5 mb-5 col-md-6">
                        <h2 class="text-light mb-4 poppins">
                            <span class="text-green">RUAS</span> PORTAL</h2>
                            <p class="text-secondary">M.S RAMAIAH UNIVERSITY OF APPLIED SCIENCE<br/>
                            Welcome to whole<br/>
                            new RUAS.<br/> 
                            experience<br/>
                            </p>
                            <button type="button" class="mt-4 poppins btn btn-light">Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CTA(){
    return(
        <div className="cta-1 bg-accent pad" style={{width:'100%'}}>
            <div class="container">
                <div class="py-5 row" style={{alignItems:'center'}}>
                <div class="col-md-6"><img src={Image} alt="hero" className="image"/></div>
                    <div class="text-center mt-5 mb-5 col-md-6">
                        <h2 class="text-light mb-4 poppins">
                            <span class="text-green">Details</span></h2>
                            <p class="text-secondary1">Ramaiah University of Applied Sciences is a UGC approved Private University in India<br/>
                            It was created by an act in the State of Karnataka, India and was established in December 2013.<br/>
                            The campus spreads over 60 acres of land.<br/>
                            MSRUAS is recognised by the University Grants Commission (UGC).<br/> 
                            The University is funded by the Gokula Education Foundation Trust.<br/>
                            MSRUAS offers undergraduate, postgraduate and doctoral courses in various areas.<br/>
                            </p>
                            <button type="button" class="mt-4 poppins btn btn-dark">College Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function RuasPrograms(){
    return(
        <div className="ruas-programs bg-dark-accent text-white">
            <container class="text-center">
                <h2 className="text-light mb-4 poppins"><span className="text-green">RUAS Programmes</span></h2>
                <Row className="ruas">
                    <Col md={4} sn={5}>
                    <img src={Image1} alt="undergraduate" className="image"/>
                        <h4 className="text-light mb-4">Undergraduate programmes</h4>
                    </Col>
                    <Col md={4} sn={5}>
                    <img src={Image2} alt="postgraduate" className="image"/>
                        <h4 className="text-light mb-4">Postgraduate programmes</h4>
                    </Col>
                    <Col md={4} sn={5}>
                    <img src={Image3} alt="academic" className="image"/>
                        <h4 className="text-light mb-4">Academic Research programmes</h4>
                    </Col>
                </Row>
            </container>
        </div>

    )
}
function Subscribe(){
    return(
        <div className="subscribe bg-accent">
            <container>
                <h2 className="mb-4 poopies"><span className="text-green">Subscribe to our newsletter</span></h2>
                <p className="text-secondary1">Subscribe to our newsletter for latest updates on our Institution</p>
                <form className="subscribe-form">
                <input type="text" className="form-control" placeholder="Enter your Email id"/>
                <button className="btn btn-dark mt-1 poppins">Subscribe</button>
                </form>
            </container>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer bg-dark-accent pad" style={{width:'100%'}}>
            <div class="container"></div>
            <Row className="py-5">
                <Col md={4} className="text-center text-md-start">
                    <h3 className="mb-4"><span className="text-green">About</span></h3>
                    <p className="text-secondary">
                    Ramaiah University of Applied Sciences is a UGC approved Private University in India.
                    It was created by an act in the State of Karnataka, India and was established in December 2013.The campus spreads over 60 acres of land.
                    MSRUAS is recognised by the University Grants Commission
                    </p>
                </Col>
                <Col md={4} className="text-center text-md-start"></Col>
                <Col md={4} className="text-center text-md-start">
                    <h3 className="mb-4"><span className="text-green">Quick Links</span></h3>
                    <Link to="/" className="footer-link">Home</Link><br/>
                    <Link to="/about" className="footer-link">About</Link><br/>
                    <Link to="/admission" className="footer-link">Admission</Link><br/>
                    <Link to="/student_profile" className="footer-link">Student_profile</Link><br/>
                    <Link to="/course" className="footer-link">Course</Link><br/>
                </Col>
            </Row>
        <br/>
        <p className="py-3 text-secondary text-center">
            &copy; 2021 RUAS PORTAL. All Rigths Reserved
        </p>

   </div>
    )
}

function Home(){
    return(
        <div>
            <MyNavBar/>
            <HeroSection/>
            <CTA/>
            <RuasPrograms/>
            <Subscribe/>
            <Footer/>
        </div>
    )
}
export default Home;