import "react-modern-drawer/dist/index.css";

import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import Drawer from "react-modern-drawer";
import { Dispatch } from "react";
import { ToggleDarkModeButton } from "components/common/buttons/ToggleDarkModeButton";

interface MobileSidebarProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const MobileSidebar = ({ isOpen, toggleDrawer }: MobileSidebarProps) => {
  const location = useLocation();

  const navLinks = [
    { text: "Home", link: "/" },
    { text: "Metric", link: "/metric" },
  ];

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
      <div className="sidebar">
        <ToggleDarkModeButton />
        {/* Can add more links */}
      </div>
    </Drawer>
  );
};
