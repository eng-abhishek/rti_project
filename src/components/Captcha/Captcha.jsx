import React,{useState} from "react";
import RefreshCaptchaImg from '../../assets/images/refresh.png';
import ValumeCaptchaImg from '../../assets/images/volume-high-solid.png';

function Captcha({captcha,captchaValue,onChange,onRefresh}){
return(<>
            <div class="row mt-2">
                  <div class="col-12 col-md-12 col-lg-5">
                    <div class="form-group form_cust_flex">
                      <span class="captcha-code" id="captcha_preview">{captcha}</span>
                      
                      <button type="button" id="reload-captcha" onClick={onRefresh}>
                        <img src={RefreshCaptchaImg} alt=""/>
                      </button>

                      {/* <button href="javascript: playAudio(&#39;&#39;);">
                        <img src={ValumeCaptchaImg} alt=""/>
                      </button> */}

                    </div>
                  </div>

                  {/* <audio id="myAudio">
                    <source src="" type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio> */}

                  <div class="col-12 col-md-12 col-lg-6 offset-lg-1">
                    <div class="form-group group col-md-12 col-12 enter_cap">
                      <input 
                         type="text" 
                         class="form-control cus-form-control"
                         name="captcha"
                         fdprocessedid="s1n0no" 
                         value = {captchaValue}
                         onChange = {onChange}
                         />
                      <label class="form__label" htmlFor="">Enter Captcha Code</label>
                      <span id="captcha_msg"></span>
                    </div>
                  </div>
                </div>
      </>
      )
}

export default Captcha;