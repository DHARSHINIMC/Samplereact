import MyNavBar from "./Nav";
import "../App.css";
function Error404(){
    return(
        <div>
            <MyNavBar/>
            <h1>this page is not found</h1>
            <a href='/'>Go Home</a>
        </div>
    )
}
export default Error404;