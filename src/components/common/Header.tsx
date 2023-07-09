import { useState } from "react";
import { MobileSidebar } from "components/common/Sidebar";
import { Navbar } from "components/common/Navbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <header>
      <Navbar toggleDrawer={toggleDrawer} />
      <MobileSidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};
