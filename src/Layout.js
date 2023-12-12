import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Játékok</Link>
          </li>
          <li>
            <Link to="/tictactoe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/lighton">Light on</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
