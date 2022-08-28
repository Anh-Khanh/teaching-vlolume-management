import Input from "../../Components/Input";
import MyCaptcha from "../../Components/Captcha";
import bg from "../../Assets/img/bg.jpg";
import logoform from "../../Assets/img/logo_dtu_while.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Authentication() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const refcaptcha = useRef();
  useEffect(() => {
    // const captcha = refcaptcha.current.children[0].dataset.key;
  });
  return (
    <div
      className="w-screen h-screen items-center flex justify-center "
      style={{ background: `url(${bg}) left top` }}
    >
      <div className="w-450 text-white bg-white/10 p-8 rounded-xl shadow-lg shadow-slate-800">
        <div>
          <img src={logoform} alt="logo mdtu" className="block mr-auto ml-auto" />
        </div>
        <div className="mt-6">
          <form action="">
            <div className="flex justify-between">
              <label htmlFor="username" className="mr-2 ">
                Tên Đăng nhập:
              </label>
              <Input
                className="input_authen"
                tabindex="1"
                placeholder="Nhập Tên đăng nhập"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="password" className="mr-2">
                Mật khẩu:
              </label>
              <Input
                className="input_authen"
                type="password"
                tabindex="2"
                placeholder="Nhập Mật khẩu"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="" className="mr-2">
                Mã xác nhận:
              </label>
              <div className="flex">
                <Input className="input_authen w-24 mr-3" tabindex="3" />
                <MyCaptcha ref={refcaptcha} />
              </div>
            </div>
            <button
              className="w-full bg-btn text-xl rounded-1 font-bold text-b mt-4 p-2 shadow-lg shadow-rose-500/50 hover:bg-red-500/30  "
              onClick={handleClick}
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
