import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    routerPath: "/",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    dropDownItems:null},
  {
    name: "About",
    routerPath: "/about-us",
    activeClass: "",
    menuClass: "",
    dropDownItems:null
  },
  {
    name: "Our Businesses",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Mafa Integrated Farm",
        routerPath: "/service",
      },
      {
        name: "AMA Consulting",
        routerPath: "/service",
      },
      {
        name: "Mafa Security",
        routerPath: "/service",
      },
      {
        name: "Mukhar Adam Foundation",
        routerPath: "/service",
      },
      {
        name: "Mafa Rice Mill",
        routerPath: "/service",
      },
    ],
  },
  {
    name: "Investors",
    activeClass: "",
    menuClass: "",
    routerPath: "/coming-soon",
    dropDownItems:null},
    {
    activeClass: "",
    menuClass: "",
    name: "Media",
    routerPath: "/coming-soon",
    dropDownItems: [
      {
        name: "News",
        routerPath: "/service",
      },
      {
        name: "Webinar",
        routerPath: "/service",
      },
      {
        name: "Events",
        routerPath: "/service",
      },]},
    {
    activeClass: "",
    menuClass: "",
    name: "Contact Us",
    routerPath: "/coming-soon",
    dropDownItems:null},
    {
    name: "Login",
    activeClass: "",
    menuClass: "",
    routerPath: "/coming-soon",
    dropDownItems:null}
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => {
              if(item.dropDownItems!=null){
               return (
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>)}
              else{
               return(
                 <MenuItem key={i}>
                   <Link to={item.routerPath}>
                   <h4>
                   {item.name}
                   </h4>
                   </Link>
                 </MenuItem>
               )}
              })}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
          @{new Date().getFullYear()} <span>MAFA GROUP</span>. All Rights Reserved.{" "}
          <br />
          Development by{" "}
          <span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harvilion Technologies
            </a>
          </span>
          .
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
