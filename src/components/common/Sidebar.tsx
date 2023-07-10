import "react-modern-drawer/dist/index.css";

import { ToggleDarkModeButton } from "components/common/buttons/ToggleDarkModeButton";
import Drawer from "react-modern-drawer";

type MobileSidebarProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

export const MobileSidebar = ({ isOpen, toggleDrawer }: MobileSidebarProps) => {
  return (
    <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
      <div className="sidebar">
        <ToggleDarkModeButton />
        {/* Can add more links here as the website expends*/}
      </div>
    </Drawer>
  );
};
