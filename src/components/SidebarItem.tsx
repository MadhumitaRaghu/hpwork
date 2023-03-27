import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import "../styles/sidebar.css";
import  Tab from './Tab'
import { Link } from "react-router-dom";
interface subType {
  title: string;
  path: string;
  icon: any;
}
interface itemType {
  title: string;
  path: string;
  icon: any;
  iconClosed: any;
  iconOpened: any;
  subNav?: subType;
}
interface Props {
  sidebar: boolean;
  item: itemType[];
}
const SidebarItem = ({ item, sidebar }: any) => {
  const [dropdown, setDropdown] = useState(false);
  const [arr, setarr] = useState([])


  function enter(event:any,title:any){

  }
  if (item.subNav) {

    return (
      <div>
        <div className="link">
          <div className="icon">{item.icon}</div>
        <Link style={{"textDecoration":"none"}} to={item.path}  onClick={(event)=>{enter(event, item.title)}}>
          <div className="link_text">{sidebar ? item.title : ""}</div>

          </Link>
          {sidebar && item.subNav && !dropdown ? (
            <AiFillCaretDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
            ></AiFillCaretDown>
            ) : (
              ""
              )}
          {sidebar && item.subNav && dropdown ? (
            <AiFillCaretUp
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
            ></AiFillCaretUp>
            ) : (
              ""
              )}
        </div>
        {item.subNav
          ? item.subNav.map((i: any, index: any) => {
              return (
                sidebar &&
                dropdown && (
                  <div>
                    <Link style={{"textDecoration":"none"}} to={i.path} onClick={(event)=>{enter(event, item.title)}}>
                  <div className="link1" key={index}>
                    <div className="icon1">{i.icon}</div>
                    <div className="link_text1">
                      {sidebar ? `${i.title}` : ""}
                    </div>
                  </div>
                  </Link>
                  </div>
                )
              );
            })
          : ""}
      </div>
    );
  } else {
    return (
      <div>

<Link style={{"textDecoration":"none"}} to={item.path} onClick={(event)=>{enter(event, item.title)}}>
      <div className="link">
        <div className="icon">{item.icon}</div>
        <div className="link_text">{sidebar ? item.title : ""}</div>

        {sidebar && item.subNav && !dropdown ? (
          <AiFillCaretDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></AiFillCaretDown>
        ) : (
          ""
        )}
        {sidebar && item.subNav && dropdown ? (
          <AiFillCaretUp
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></AiFillCaretUp>
        ) : (
          ""
        )}
      </div>
      </Link>
      </div>
    );
  }
};

export default SidebarItem;
