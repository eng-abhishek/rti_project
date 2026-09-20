import React, { useState } from "react";
import { Link } from "react-router-dom";
import RefreshCaptchaImg from '../../assets/images/refresh.png';
import ValumeCaptchaImg from '../../assets/images/volume-high-solid.png';

function ResetPassWithSecurityAns(){

const [email, setEmail] = useState('');
const [securityQuestion, setSecurityQuestion] = useState('');
const [securityAnswer, setSecurityAnswer] = useState('');


const submitHandler = (e) => {

 console.log(e.target[0].value);
 console.log(e.target[1].value);
 console.log(e.target[2].value);

   e.preventDefault();
}

return(<>
    <section className="bg_spacing">
      <div className="container">
        <div className="bg_drop_shd-login">
          <div className="row">
            <div className="col-md-12 col-lg-12 cus_col_form ">
              <div className="form_heading">
                <h4>Reset Password using security question</h4>
                <form className="input_cust" id="resetPassSecurity" onSubmit={submitHandler}>
                  <div className="form-group group col-md-12 col-12">
                    <input type="text" name="email_id" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control cus-form-control" placeholder="" />
                    <label className="form__label" htmlFor="">Username <span className="error">(email ID)</span></label>
                  </div>

                  <div className="form-group group col-md-12 col-12">
                    <select name="security_question" onChange={(e) => setSecurityQuestion(e.target.value)} className="form-select cus-form-control" id="securityquestion">
                      <option value="">-- Select Question --</option>
                      <option value="What is your Mother's maiden name?">What is your Mother's maiden name?</option>
                      <option value="What is the name of your first School?">What is the name of your first School?
                      </option>
                      <option value="What is the name of your favourite book?">What is the name of your favourite book?
                      </option>
                      <option value="Which city were you born in?">Which city were you born in?</option>
                    </select>
                    <span className="text-danger">
                    </span>
                    <label className="form__label" htmlFor="">Security Question: </label>
                  </div>

                  <div className="form-group group col-md-12 col-12">
                    <input type="text" name="security_answer" value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)} className="form-control cus-form-control"
                      placeholder="" />
                    <label className="form__label" htmlFor="">Security Answer:</label>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-5">
                      <div className="form-group form_cust_flex">
                        <label id="cap" className="captcha-label mr-4">
                          <span id="captcha_preview_reset_pass_security_quest" className="captcha-code">196893</span>
                        </label>
                        <Link to="" id="reload-captcha">
                          <img src={RefreshCaptchaImg} alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 offset-lg-1">
                      <div className="form-group group col-md-12 col-12 enter_cap">
                        <input type="text" className="form-control cus-form-control" name="input_captcha"
                          id="input_captcha_reset_pass_security_quest"
                          onkeyup="onKeyUpHandler(event,'_reset_pass_security_quest')" />
                        <label className="form__label" htmlFor="">Enter Security Code:</label>
                        <span id="captcha_msg_reset_pass_security_quest"></span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button type="submit" name="btnSubmit" id="btnSubmit" className="btn_submit quick-btn">Submit</button>
                  </div>
                </form>
                <div className="forgot_content d-flex justify-content-center">
                  <p> <Link to="/login">Go back to login page</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </>);
}

export default ResetPassWithSecurityAns;