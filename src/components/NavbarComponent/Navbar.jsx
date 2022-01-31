import { Link } from "react-router-dom";


const Navbar=()=>{

return(
<>
    <Link to="/"><button>Home</button></Link>
    <Link to="/product"><button>Product</button></Link>
    <Link to="/orders"><button>Orders</button></Link>
    <Link to="/makeOrder"><button>MakeOrder</button></Link>
    <Link to="/contact"><button>Contact</button></Link>
</>
)
}

export default Navbar;