import{Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Thought process...</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
                <a href="mailto:singhprakhar316@gmail.com">Contact us</a>
            </div>
        </nav>

    );
}
 
export default Navbar;