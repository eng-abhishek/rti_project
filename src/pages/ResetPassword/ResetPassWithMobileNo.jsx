import { Link } from "react-router-dom";

function ResetPassWithMobileNo(){
 return(<>
    <section className="bg_spacing">
      <div className="container">
        <div className="bg_drop_shd-login">
          <div className="row">
            <div className="col-md-12 col-lg-12 cus_col_form ">
              <div className="form_heading">
                <h4>Reset Password using mobile number</h4>
                <p id="otp-error"></p>
                <form action="https://delhihighcourt.nic.in/app/rti/reset-password-mobile-number" method="post"
                  className="input_cust" id="resetPassMobileNo">
                  <div className="form-group group col-md-12 col-12">
                    <input type="text" className="form-control cus-form-control" placeholder="" name="email_id" />
                    <label className="form__label" htmlFor="">Username <span className="error">(email ID)</span></label>
                  </div>

                  <div className="form-group group col-md-12 col-12">
                    <input type="text" className="form-control cus-form-control" minLength={10} maxLength={10}
                      name="mobile_no"/>
                    <label className="form__label" htmlFor="">Mobile Number:
                    </label>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-5">
                      <div className="form-group form_cust_flex">
                        <label id="cap" className="captcha-label mr-4">
                          <span id="captcha_preview_reset_otp_captcha" className="captcha-code">618375</span>
                        </label>
                        <Link to="#" id="reload-captcha">
                          <img src="refresh.png" alt="" />
                        </Link>
                        <Link to="#">
                          <img
                            src="volume-high-solid.png"
                            alt="" />
                        </Link>
                      </div>

                      <audio id="myAudio_reset_otp_captcha">
                        <source src="#" type="audio/wav" />
                        Your browser does not support the audio element.
                      </audio>

                    </div>
                    <div className="col-12 col-md-12 col-lg-6 offset-lg-1">
                      <div className="form-group group col-md-12 col-12 enter_cap">
                        <input type="text" className="form-control cus-form-control" id="input_captcha_reset_otp_captcha" name="otp_captcha" />
                        <label className="form__label" htmlFor="">Enter the Validation code :</label>
                        <span id="captcha_msg_reset_otp_captcha"></span>

                        <button type="button" id="generateOtpBtn" data-action="fresh-otp"
                          className="btn_submit quick-btn mt-2">Generate OTP</button>
                      </div>

                      <p style={{margin:"10px 0", fontSize:"14px"}}>
                        Didn't receive the OTP? You can resend it after 2 minutes:
                        <span id="counterDown2Min">02:00 minuts</span>
                      </p>

                    </div>
                  </div>

                  <div className="form-group group col-md-12 col-12">
                    <input type="text" name="mobile_otp" id="resetPassOTP" className="form-control cus-form-control"
                      maxlength="6" />
                    <label className="form__label" htmlFor="">Enter OTP for request ID : <span id="requestId"
                        className="text-success"></span> </label>
                    <span id="otp_msg_reset_otp_verify">
                    </span>
                  </div>

                  <span id="otp-verification"></span>
                  <div className="row ">
                    <div className="col-12 col-md-12 col-lg-5">
                      <div className="form-group form_cust_flex">
                        <label id="cap" className="captcha-label mr-4">
                          <span id="captcha_preview_reset_captcha" className="captcha-code">743889</span>
                        </label>
                        <Link href="javascript:refreshCaptcha('_reset_captcha');" id="reload-captcha">
                          <img src="https://delhihighcourt.nic.in/app/rti/public/new_design/images/refresh.png" alt="" />
                        </Link>
                        <a href="javascript: playAudio('_reset_captcha');">
                          <img
                            src="https://delhihighcourt.nic.in/app/rti/public/new_design/images/volume-high-solid.png"
                            alt="" />
                        </a>
                      </div>

                      <audio id="myAudio_reset_captcha">
                        <source src="#" type="audio/wav" />
                        Your browser does not support the audio element.
                      </audio>
                      <input type="hidden" name="captcha_code_reset_captcha" id="captcha_code_reset_captcha"
                        value="743889" />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 offset-lg-1">
                      <div className="form-group group col-md-12 col-12 enter_cap">
                        <input type="text" className="form-control cus-form-control" id="input_captcha_reset_captcha"
                          name="reset_captcha"/>
                        <label className="form__label" htmlFor="">Enter the Security code :</label>
                        <span id="captcha_msg_reset_captcha"></span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button type="submit" id="btnSubmit" className="btn_submit quick-btn">Submit</button>
                  </div>
                </form>
                <div className="forgot_content d-flex justify-content-center">
                  <p> <a href="https://delhihighcourt.nic.in/app/rti/login">Go back to login page</a></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>);   
}

export default ResetPassWithMobileNo;