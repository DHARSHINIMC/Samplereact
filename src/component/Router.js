import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Student_profile from './Student_profile'
import Admission from './Admission';
import Course from './Course';

function Router(){
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/admission' component={Admission}/>
                <Route exact path='/student_profile' component={Student_profile}/>
                <Route exact path='/course' component={Course}/>
                <Redirect to ='/Error404'/>
            </Switch>
        </div>
    )
}
export default Router;