import { ToggleDarkModeButton } from "components/common/buttons/ToggleDarkModeButton";
import { NavLink } from "react-router-dom";
import { Icon } from "semantic-ui-react";

type NavbarProps = {
  toggleDrawer: () => void;
};

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
