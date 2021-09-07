import MyNavBar from "./Nav";
import "../App.css";
function Student_profile(){
    return(
        <div>
            <MyNavBar/>
            <h1>Student profile</h1>
            <div className="student bg-accent">
                <container>
                    <p className="text-secondary1">Fill the Student details</p>
                    <form className="student-form">
                        <input type="text" className="form-control" placeholder="Enter the name of the student"/>
                        <input type="text" className="form-control" placeholder="Enter the Father name"/>
                        <input type="text" className="form-control" placeholder="Enter the Mother name"/>
                        <input type="number" className="form-control" placeholder="Enter the Date of birth"/>
                        <input type="number" className="form-control" placeholder="Enter the Phone number"/>
                        <input type="text" className="form-control" placeholder="Enter the Address"/>
                        <button className="btn btn-dark mt-1 poppins">Submit</button>
                    </form>
                </container>
            </div>
        </div>
    )
}
export default Student_profile;