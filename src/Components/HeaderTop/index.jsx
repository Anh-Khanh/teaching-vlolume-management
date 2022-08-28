import classNames from "classnames/bind";
import styles from "./headertop.module.scss";
import logo from "../../Assets/img/logo_dtu_while.png";

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
            <a href="http://localhost:3000/authentication"> Trang chủ </a>
          </li>
          <li>
            <a href="http://localhost:3000/authentication"> DTU Mail </a>
          </li>
          <li>
            <a href="http://localhost:3000/authentication"> Learning </a>
          </li>
          <li>
            <a href="http://localhost:3000/authentication"> Forum </a>
          </li>
          <li>
            <a href="http://localhost:3000/authentication"> e-Lib </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderTop;
