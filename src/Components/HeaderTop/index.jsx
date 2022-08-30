import classNames from "classnames/bind";

import styles from "./headertop.module.scss";
import logo from "../../Assets/img/logo_dtu_while.png";
import { Link } from "react-router-dom";
const cx= classNames.bind(styles)
function HeaderTop() {
  return (
    <div className={cx("header")}>
      <a
        href="http://localhost:3000/authentication"
        className={cx("header-logo")}
      >
        <img src={logo} alt="mdtu" />
      </a>
      <div className={cx("topmenu")}>
        <ul className={cx("nav")}>
          <li>
            <Link to="/authentication"> Trang chủ </Link>
          </li>
          <li>
            <Link to="/authentication"> DTU Mail </Link>
          </li>
          <li>
            <Link to="/authentication"> Learning </Link>
          </li>
          <li>
            <Link to="/authentication"> Forum </Link>
          </li>
          <li>
            <Link to="/authentication"> e-Lib </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
