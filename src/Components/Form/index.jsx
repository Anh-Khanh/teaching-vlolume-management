import classNames from "classnames/bind";
import SelectForm from "../SelectForm";

import style from "./form.module.scss"
import { default as Button} from "../Button";

const cx = classNames.bind(style)

function Form(props) {
    return (
      <div className="w-screen relative h-screen">
        <div className={cx("form")}>
          <div className={cx("line")}>
            <h2 className="text-xl font-semibold">{props.children}</h2>
          </div>
          <div className="p-5">
            <form action="">
              <div className="w-full flex justify-between">
                <label htmlFor="">Mã học phần</label>
                <SelectForm
                  placeholder="Mã học phần"
                  class="w-1/2"
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Tên học phần giảng dạy</label>
                <SelectForm
                  placeholder="Tên học phần giảng dạy"
                  class="w-1/2"
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Khối lớp</label>
                <SelectForm placeholder="Khối lớp" class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Loại hình</label>
                <SelectForm placeholder="Loại hình" class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Học kỳ</label>
                <SelectForm placeholder="Học kỳ" class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Số lượng SV</label>
                <SelectForm
                  placeholder="Số lượng SV"
                  class="w-1/2"
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Hệ số lớp</label>
                <SelectForm placeholder="Hệ số lớp" class="w-1/2"></SelectForm>
              </div>
              <Button>SUBMIT</Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Form;