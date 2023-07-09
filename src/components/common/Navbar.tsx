import { Icon } from "semantic-ui-react";
import { NavLink, useLocation } from "react-router-dom";
import { ToggleDarkModeButton } from "components/common/buttons/ToggleDarkModeButton";

interface NavbarProps {
  toggleDrawer: () => void;
}

export const Navbar = ({ toggleDrawer }: NavbarProps) => {
  return (
    <nav className="navbar container">
      <NavLink to="/">Cocktail Finder</NavLink>
      <div className="nav-items">
        <ToggleDarkModeButton />
      </div>
      <Icon name="sidebar" onClick={toggleDrawer} className="hamburger" />
    </nav>
  );
};
