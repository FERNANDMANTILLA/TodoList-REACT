
import { Link,NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-gray-dark shadow ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MainApp</Link> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className={({isActive})=> `nav-link ${ isActive ? 'bg-secondary rounded-1':''}`}to="/about" aria-current="page" >About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive})=> `nav-link ${ isActive ? 'bg-secondary rounded-1':''}`} to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
