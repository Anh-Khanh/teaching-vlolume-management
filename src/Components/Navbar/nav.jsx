import { FcBusinessman, FcManager } from "react-icons/fc";
import { IoNotifications } from "react-icons/io5";
import {
  AiOutlineLogout,
  AiFillCaretDown,
  AiFillCaretRight,
  
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import WorkVolume from "../WorkVolume";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./nav.module.scss";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function Nav() {
  // const [care,setCare] = useState("")
  const navigate = useNavigate();
  const handlelogout = () => {
    navigate("/authentication");
  };
  useEffect(() => {
    const navs = document.querySelectorAll(`.${styles.nav_left}>li`);
      
    navs.forEach((value) => {
      value.onclick = () => {
          let item = value.querySelector("ul");
        if (value.style.backgroundColor === "rgb(149, 11, 11)") {
          value.style.backgroundColor = "#ededed";
          value.style.color = "#333";

          item.style.display = "none";
        } else {
          let navLeftItem = document.querySelectorAll(
            `.${styles.nav_left_item}`
          );
          navLeftItem.forEach((item) => {
            item.style.display = "none";
          });

          navs.forEach((val) => {
            val.style.backgroundColor = "#ededed";
            val.style.color = "#333";
          });

          value.style.backgroundColor = "#950b0b";
          value.style.color = "#fff";

          if (item) {
            if (item.style.display === "none") {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
            console.log(item.style.display);
          }
        }
      };
        
    });
  },[]);

  return (
    <div className={cx("container")}>
      <div className="flex justify-between">
        <div
          className={`${cx(
            "container_heading"
          )} flex justify-start items-center`}
        >
          <FcBusinessman fontSize={40} className="mr-1 "></FcBusinessman>Lê Anh
          Khánh
        </div>
        <div className="flex items-center text-2xl pr-[15px]">
          <AiOutlineLogout
            onClick={handlelogout}
            className={`${cx("logout")} cursor-pointer`}
          ></AiOutlineLogout>
        </div>
      </div>
      <div className="flex">
        <div className="w-[225px] mr-[37px]">
          <ul className={`${cx("nav_left")} mt-[2px]`}>
            <li>
              <p className="flex pl-4 items-center font-bold text-xl">
                <AiFillCaretDown className="mr-3"></AiFillCaretDown>
                <Link to="/">Subject</Link>
              </p>
            </li>
            <li>
              <p className="flex pl-4 items-center font-bold text-xl">
                <AiFillCaretDown className="mr-3"></AiFillCaretDown>
                <Link to="/">Subject</Link>
              </p>
              <ul className={cx("nav_left_item")}>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Subject</Link>
                </li>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Subject</Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="flex pl-4 items-center font-bold text-xl">
                <AiFillCaretDown className="mr-3"></AiFillCaretDown>
                <Link to="/">Subject</Link>
              </p>
              <ul className={cx("nav_left_item")}>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Subject</Link>
                </li>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Subject</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-[718px]">
          <WorkVolume></WorkVolume>
        </div>
      </div>
    </div>
  );
}

export default Nav;
