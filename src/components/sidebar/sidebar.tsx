import { useState } from "react";
import {
  Navbar,
  MenuIconOpen,
  SidebarMenu,
  MenuIconClose,
  MenuItems,
  MenuItemLinks,
} from "./sidebarStyle";
import * as FaIcons from "react-icons/fa";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { selectTheme, change } from "../../features/theme/themeSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

export const SidebarData = [
  {
    title: "Builder",
    path: "/",
    icon: <FaIcons.FaEdit />,
  },
  {
    title: "Content",
    path: "/content",
    icon: <FaIcons.FaPrint />,
  },
  {
    title: "Biography",
    path: "/biography",
    icon: <FaIcons.FaAddressCard />,
  },
];

const Sidebar: React.FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const handleChange = () => {
    dispatch(change());
  };
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  return (
    <>
      <Navbar>
        <MenuIconOpen to="#" onClick={showSidebar}>
          <FaIcons.FaBars />
        </MenuIconOpen>
        <SwitchToggle
          name={theme}
          handleChange={handleChange}
          checked={theme === "light" ? true : false}
        />
      </Navbar>

      <SidebarMenu close={close}>
        <MenuIconClose to="#" onClick={showSidebar}>
          <FaIcons.FaTimes />
        </MenuIconClose>

        {SidebarData.map((item, index) => {
          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path} onClick={showSidebar}>
                {item.icon}
                <span style={{ marginLeft: "1rem" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>
    </>
  );
};

export default Sidebar;
