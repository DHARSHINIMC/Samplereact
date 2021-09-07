import MyNavBar from "./Nav";
import "../App.css";
function Course(){
    return(
        <div>
            <MyNavBar/>
            <h1>Course details</h1>
            <p>B.Tech in Computer Science and Engineering<br/>
            B.Tech in Aerospace Engineering<br/>
            B.Des in Fashion Design<br/>
            B.Tech in Electronics<br/>
            B.Tech in Electrical<br/>
            B.Tech in Mechanical<br/>
        </p>
        <button type="button" class="mt-4 poppins btn btn-dark">Course list</button>
        </div>
    )
}
export default Course;