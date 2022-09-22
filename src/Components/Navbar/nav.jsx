import { FcBusinessman } from "react-icons/fc";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineLogout, AiFillCaretRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import WorkVolume from "../WorkVolume";
import ClassInformation from "../Form/ClassInformation";
import AddSubject from "../Form/AddSubject";
import classNames from "classnames/bind";
import styles from "./nav.module.scss";
import { useEffect, useState } from "react";
import ManagerSubject from "../Table/ManagerSubject";
import InfoWebpart from "../InfoWebpart";
const cx = classNames.bind(styles);

function Nav() {
  const [form, setForm] = useState("Info webpart");
  const navigate = useNavigate();
  const handlelogout = () => {
    navigate("/authentication");
  };
  useEffect(() => {
    const navs = document.querySelectorAll(`.${styles.nav_left}>li`);
    navs.forEach((value) => {
      value.onclick = () => {
        let item = value.querySelector("ul");
        let icon = value.querySelector(".icon");
        let icons = document.querySelectorAll(".icon");
          icons.forEach((itemicon) => {
            itemicon.style.transform = "rotate(0deg)";
              itemicon.style.transition = "all 0s ease-in";
          });
        if (value.style.backgroundColor === "rgb(149, 11, 11)" && item) {
          value.style.backgroundColor = "#ededed";
          value.style.color = "#333";
          item.style.display = "none";
          icon.style.transform = "rotate(0deg)";
        } else {
          console.log(icon);
          let navLeftItem = document.querySelectorAll(
            `.${styles.nav_left_item}`
          );
          navLeftItem.forEach((item) => {
            item.style.display = "none";
            item.onclick = (e) => {
              const li = item.querySelectorAll("li");
              li.forEach((text) => {
                text.onclick = (e) => {
                  setForm(e.target.textContent);
                };
              });

              e.stopPropagation();
              e.preventDefault();
            };
          });
          navs.forEach((val) => {
            val.style.backgroundColor = "#ededed";
            val.style.color = "#333";
          });
          value.style.backgroundColor = "#950b0b";
          value.style.color = "#fff";
          if (item) {
            if (item.style.display === "none") {
              icon.style.transform = "rotate(90deg)";
              icon.style.transition = "all 0.2s ease-in";
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        }
      };
    });
  }, [form]);

  return (
    <div className={cx("container")}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div
            className={`${cx(
              "container_heading"
            )} flex justify-start items-center`}
          >
            <FcBusinessman fontSize={40} className="mr-1 "></FcBusinessman>
            <span>Lê Anh Khánh</span>
          </div>
          <div className={`${cx("sitemap")}`}>
            <BsCalendarDate className="mr-2"></BsCalendarDate>
            <span>{form}</span>
          </div>
        </div>
        <div className="flex items-center text-2xl pr-[15px]">
          <AiOutlineLogout
            onClick={handlelogout}
            className={`${cx("logout")} cursor-pointer text-slate-600`}
          ></AiOutlineLogout>
        </div>
      </div>
      <div className="flex">
        <div className="w-[225px] mr-[12px] min-h-[420px]">
          <ul className={`${cx("nav_left")} mt-[2px]`}>
            <li>
              <p className="flex pl-4 items-center font-medium text-lg">
                <AiFillCaretRight
                  className={`${cx("icon")} mr-3 text-gray-600`}
                ></AiFillCaretRight>
                <Link to="/">Year</Link>
              </p>
            </li>
            <li>
              <p className="flex pl-4 items-center font-medium text-lg">
                <AiFillCaretRight
                  className={`${cx("icon")} mr-3 text-gray-600`}
                ></AiFillCaretRight>
                <Link to="/">User</Link>
              </p>
            </li>
            <li>
              <p className="flex pl-4 items-center font-medium text-lg">
                <AiFillCaretRight
                  className={`${cx("icon")} mr-3 text-gray-600`}
                ></AiFillCaretRight>
                <Link to="/">Subject</Link>
              </p>
              <ul className={cx("nav_left_item")}>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Add new Subject</Link>
                </li>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Manager Subject</Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="flex pl-4 items-center font-medium text-lg">
                <AiFillCaretRight
                  className={`${cx("icon")} mr-3 text-gray-600`}
                ></AiFillCaretRight>
                <Link to="/">Class</Link>
              </p>
              <ul className={cx("nav_left_item")}>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Add New Class</Link>
                </li>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Manager Class</Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="flex pl-4 items-center font-medium text-lg">
                <AiFillCaretRight
                  className={`${cx("icon")} mr-3 text-gray-600`}
                ></AiFillCaretRight>
                <Link to="/">Personal Detail</Link>
              </p>
              <ul className={cx("nav_left_item")}>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Subject</Link>
                </li>
                <li className="flex">
                  <AiFillCaretRight className="mr-1"></AiFillCaretRight>
                  <Link to="/">Info webpart</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-[747px]">
          {form === "Add new Subject" && <AddSubject></AddSubject>}
          {form === "Manager Subject" && <ManagerSubject></ManagerSubject>}
          {form === "Add New Class" && <ClassInformation></ClassInformation>}
          {form === "Subject" && <WorkVolume></WorkVolume>}
          {form === "Info webpart" && <InfoWebpart></InfoWebpart>}
        </div>
      </div>
    </div>
  );
}

export default Nav;
