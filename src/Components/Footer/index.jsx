import classNames from "classnames/bind";
import styles from "./footer.module.scss";
const cx= classNames.bind(styles)
function Footer() {
    return (
      <div>
        <div className={cx("footer_wrapper")}></div>
        <div className="text-center">
          Copyright© 2022 <a href="./">Đại học Duy Tân.</a>
        </div>
      </div>
    );
}

export default Footer;