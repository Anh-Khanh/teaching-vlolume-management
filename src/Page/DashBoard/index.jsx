import  classNames  from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.scss"

const cx = classNames.bind(styles)
function DaskBoard() {
  return (
    <div className="h-screen">
      <div className="">
        <ul className={`${cx("sidebar")} `}>
          <li className={cx("sidebar_list")}>
            <Link to="./">DaskBoard1</Link>
            <ul className={cx("sidebar_list--item")}>
              <li>
                <Link to="./">DaskBoard1</Link>
              </li>
              <li>
                <Link to="./">DaskBoard1</Link>
              </li>
              <li>
                <Link to="./">DaskBoard1</Link>
              </li>
            </ul>
          </li>
          <li className={cx("sidebar_list")}>
            <Link to="./">DaskBoard2</Link>
            <ul className={cx("sidebar_list--item")}>
              <li>
                <Link to="./">DaskBoard2</Link>
              </li>
              <li>
                <Link to="./">DaskBoard2</Link>
              </li>
              <li>
                <Link to="./">DaskBoard2</Link>
              </li>
            </ul>
          </li>
          <li className={cx("sidebar_list")}>
            <Link to="./">DaskBoard3</Link>
            <ul className={cx("sidebar_list--item")}>
              <li>
                <Link to="./">DaskBoard3</Link>
              </li>
              <li>
                <Link to="./">DaskBoard3</Link>
              </li>
              <li>
                <Link to="./">DaskBoard3</Link>
              </li>
            </ul>
          </li>
          <li className={cx("sidebar_list")}>
            <Link to="./">DaskBoard4</Link>
            <ul className={cx("sidebar_list--item")}>
              <li>
                <Link to="./">DaskBoard4</Link>
              </li>
              <li>
                <Link to="./">DaskBoard4</Link>
              </li>
              <li>
                <Link to="./">DaskBoard4</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
  );
}

export default DaskBoard;
