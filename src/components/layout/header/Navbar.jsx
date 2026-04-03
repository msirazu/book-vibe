import { NavLink } from "react-router-dom";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Listed Books", path: "/books" },
  { id: 3, name: "Pages to Read", path: "/contact" }
];

const Navbar = () => {
    const links = navData.map(link => <NavLink to={link.path} key={link.id} className='btn font-work'>{link.name}</NavLink>)
    return (
        <nav>
            <div className="navbar bg-base-100 shadow-sm pl-0 sm:pl-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <NavLink className='font-bold text-xl' to='/'>Book Vibe</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <NavLink to='/auth/login' className='btn btn-one'>Sign In</NavLink>
    <NavLink to='/auth/register' className='btn btn-two'>Sign Up</NavLink>
  </div>
</div>
        </nav>
    );
};

export default Navbar;