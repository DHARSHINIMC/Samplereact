import MyNavBar from "./Nav";
import "../App.css";
function About(){
    return(
        <div>
            <MyNavBar/>
            <h1>About</h1>
            <p>Ramaiah University of Applied Sciences is a UGC approved Private University in India.
            It was created by an act in the State of Karnataka, India and was established in December 2013.The campus spreads over 60 acres of land.
            MSRUAS is recognised by the University Grants Commission (UGC). 
            The University is funded by the Gokula Education Foundation Trust.
            MSRUAS offers undergraduate, postgraduate and doctoral courses in various areas.</p>
            <h3>Address</h3>
            <p>
            470-P, Peenya Industrial Area,<br/>
            Peenya 4th Phase, Peenya Industrial Area Phase IV,<br/>
            Bengaluru,Karnataka 560058,India<br/>
            </p>
        </div>
        
    )
}
export default About;