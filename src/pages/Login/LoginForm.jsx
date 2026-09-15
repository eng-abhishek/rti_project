import React, { useState } from "react";
import PasswordInput from "../../components/Login/PasswordInput"
import Captcha from "../../components/Captcha/Captcha"

function LoginForm() {

     const [email, setEmail] = useState('');
     const [passsword, setPassword] = useState('');
     const [captcha, setCaptcha] = useState('');
     const [captchaCode, setCaptchaCode] = useState('142454');

     const refreshCaptcha = () => {
          console.log('Refresh Captcha');
     }

     const submitHandler = (e) => {
          console.log('Submit Handler');
          e.preventDefault();
     }

     return (<>
          <form className="input_cust" onSubmit={submitHandler}>

               {/* Email */}
               <div className="form-group group col-md-12 col-12">
                    <input type="email" name="email_id" className="form-control cus-form-control" placeholder="" />
                    <label className="form__label" htmlFor="">Login ID</label>
                    <span className="text-danger"></span>
               </div>

               {/* Password */}
               <PasswordInput value={passsword} onChange={(e) => { setPassword(e.target.value) }} />

               {/* Captcha */}
               <Captcha
                    captcha={captchaCode}
                    captchaValue={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    onRefresh={refreshCaptcha}
               />

               {/* Submit */}
               <div>
                    <button type="submit" className="btn_submit quick-btn" id="btnSubmit">Submit</button>
               </div>

          </form>
     </>);
}

export default LoginForm;