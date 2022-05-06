import React from "react";
import { Link } from "react-router-dom";

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
        name: "Blog Grid",
        routerPath: "/blog-grid",
      },
      {
        name: "Blog Masonry",
        routerPath: "/blog-masonry",
      },
      {
        name: "Blog Sidebar",
        routerPath: "/blog-sidebar",
      },
      {
        name: "Blog Details",
        routerPath: "/blog-details",
      },
      {
        name: "Blog Details Sidebar",
        routerPath: "/blog-details-sidebar",
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
    dropDownItems:null},
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

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => {
       if(item.dropDownItems!=null){
        return (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
            <span>{item.name}</span>
          </a>

          <ul className="sub-menu mega">
            {item.dropDownItems.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>)}
        
        else{
         return(
          <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <a href="#" className={item.activeClass}>
            <span>{item.name}</span>
          </a>
          </li>)}
      })}
    </ul>
  );
};

export default DropdownMenu;
