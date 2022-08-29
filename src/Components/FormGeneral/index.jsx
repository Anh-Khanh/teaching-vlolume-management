import classNames from "classnames/bind";

import styles from "./form.module.scss"
import SelectForm from "../SelectForm";
const cx = classNames.bind(styles)

function FormGeneral() {
    return ( <div className={cx("form")}><SelectForm/></div> );
}

export default FormGeneral;