import { Link } from "react-router-dom";
import '../NavbarComponent/Navbar.css'

const Navbar=()=>{

return(
<nav className="menuGrid">
    <Link to="/"><button>Home</button></Link>
    <Link to="/product"><button>Product</button></Link>
    <Link to="/orders"><button>Orders</button></Link>
    <Link to="/makeOrder"><button>MakeOrder</button></Link>
    <Link to="/contact"><button>Contact</button></Link>
</nav>
)
}

export default Navbar;