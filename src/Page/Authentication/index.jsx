import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { default as Button } from "../../Components/Button";
import Input from "../../Components/Input";
import MyCaptcha from "../../Components/Captcha";
import bg from "../../Assets/img/bg.jpg";
import logoform from "../../Assets/img/logo_dtu_while.png";
import { useEffect } from "react";

function Authentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [reloadcaptcha, setReloadcaptcha] = useState(false);

  const refcaptcha = useRef();
  const inputpassvalue = useRef()
  const navigate = useNavigate();
  let imgcaptcha="";
  function keyDown(event) {
    if (event.code==="Enter"){
      if (user === "admin" && pass === "123" && imgcaptcha === captcha) {
        setReloadcaptcha(false);
        navigate("/");
      }
      else{
        inputpassvalue.current.value =""
      }
    }
  }
  const handleClick = () => {
    if (user === "admin" && pass === "123" && imgcaptcha === captcha) {
      setReloadcaptcha(false);
      navigate("/");
    } else {
      inputpassvalue.current.value = "";
        setReloadcaptcha(true);
    }
  };
  useEffect(()=>{
     imgcaptcha = refcaptcha.current.children[0].dataset.key;
     console.log(imgcaptcha);
  })

  return (
    <div
      className="w-screen h-screen items-center flex justify-center "
      style={{ background: `url(${bg}) left top` }}
    >
      <div className="w-450 text-white bg-white/10 p-8 rounded-xl shadow-lg shadow-slate-800">
        <div>
          <img
            src={logoform}
            alt="logo mdtu"
            className="block mr-auto ml-auto"
          />
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
                style={{ height: "30px" }}
                placeholder="Nhập Tên đăng nhập"
                handlOnChange={(value) => {
                  setUser(value);
                }}
                onKeyDown={(e) => {
                  keyDown(e);
                }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="password" className="mr-2">
                Mật khẩu:
              </label>
              <Input
                refs={inputpassvalue}
                className="input_authen"
                type="password"
                style={{ height: "30px" }}
                tabindex="2"
                placeholder="Nhập Mật khẩu"
                handlOnChange={(value) => {
                  setPass(value);
                }}
                onKeyDown={(e) => {
                  keyDown(e);
                }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="" className="mr-2">
                Mã xác nhận:
              </label>
              <div className="flex">
                <Input
                  className="input_authen w-24 mr-3"
                  tabindex="3"
                  placeholder="Captcha"
                  style={{ height: "30px" }}
                  handlOnChange={(value) => {
                    setCaptcha(value);
                  }}
                  onKeyDown={(e) => {
                    keyDown(e);
                  }}
                />
                <MyCaptcha ref={refcaptcha} />
              </div>
            </div>
            <Button width="100%" bgcolor="#950B0B" onClick={handleClick}>
              Đăng Nhập
            </Button>
          </form>
        </div>
        <div className="text-center mt-2">Copyright© 2022 Đại học Duy Tân.</div>
      </div>
    </div>
  );
}

export default Authentication;
