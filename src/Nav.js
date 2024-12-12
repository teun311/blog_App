import{ Link} from 'react-router-dom';

const Nav  = ({search, setSearch })=>{
    return(
        <nav className="navbar navbar-expand-md bg-dark navbar-dark  ">

            <div className="container">
                <form className="mx-auto" onSubmit={(e) => e.preventDefault()}>
                    {/*<label htmlFor="search" style={{color:"white",marginRight:"2px"}}>Search Post</label>*/}
                    <input
                        id="search"
                        type="text"
                        placeholder="Search Posts"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                </form>
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><Link to="/" className="nav-link" >Home</Link></li>
                    <li className="nav-item"><Link to= "/post" className="nav-link" >Post</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link" >About</Link></li>
                    <li className="nav-item"><Link to="/register" className="nav-link" >Register</Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link" >Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;