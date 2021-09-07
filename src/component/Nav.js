import { Nav,NavLink, NavItem, Navbar, NavbarBrand, Image, Container} from 'react-bootstrap';
import logo from '../image/lo.PNG';
import "../App.css";
function MyNavBar(){
    return(
        <div>
            <Navbar className='my-nav' bg="dark" variant="dark" sticky>
    <Container>
        <NavbarBrand href='/'>
            <Image src={logo} width="30" height="30" className="d-inline-block align-top" alt="React bootstrap"/>
            RUAS PORTAL
        </NavbarBrand>
        <Nav className="ml-auto"navbar>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/admission">Admission</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/student_profile">Student_profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/course">Course</NavLink>
            </NavItem>
    </Nav>
    </Container>
  </Navbar>
  </div>
    )
}
export default MyNavBar;