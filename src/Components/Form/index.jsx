import classNames from "classnames/bind";
import SelectForm from "./SelectForm";
import { Button } from "@mui/material";

import style from "./form.module.scss"

const cx = classNames.bind(style)

function Form() {
    return (
      <div className="w-screen relative h-screen">
        <div className={cx("form")}>
          <div className={cx("line")}>
            <h2 className="text-xl font-semibold">
              Khối lượng giảng dạy lý thuyết, thực hành…
            </h2>
          </div>
          <div className="p-5">
            <form action="">
              <div className="w-full flex justify-between">
                <label htmlFor="">Mã học phần</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Tên học phần giảng dạy</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Khối lớp</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Loại hình</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Học kỳ</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Số lượng SV</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="">Hệ số lớp</label>
                <SelectForm class="w-1/2"></SelectForm>
              </div>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: "20px",
                  backgroundColor: "#950B0B",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Đăng Nhập
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Form;