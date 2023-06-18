import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  // The navlink unlike link provides an option to set up classes
  // these classes accepts a function and returns a value
  // is accept is an object which returns true or false
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              My Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              My Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
