import React, { useState } from "react";
function ChangePassword() {

  const [formData,setFormData] = useState({
    current_password:"",
    password:"",
    password_confirmation:""
  });

  const handleInputValue = (e) => {
  const {name,value} = e.target;

    setFormData((prev)=>({
    ...prev,
    [name]:value
    }))

 // console.log(name,value);
  }



    return (<>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12">
                    <div className="form_heading custom_cenetr">
                        <h4>Change Password</h4>
                    </div>
                    <div className="bg_inner_div">

                        <form action="#" className="input_cust py-3" method="post" autocomplete="off" id="changePassword">
                            <div className="row cust_flex_row_dash">
                                <div className="form-group group col-md-6 col-12 position-relative">
                                    <input className="form-control cus-form-control password-field"
                                        type="text" name="current_password" value={formData.current_password} onChange={handleInputValue}/>
                                    <label className="form__label">Current Password<span>*</span></label>
                                    <i className="bi bi-eye toggle-password"></i>
                                    <span className="text-danger">
                                    </span>
                                </div>

                                <div className="form-group group col-md-6 col-12 position-relative">
                                    <input className="form-control cus-form-control password-field"
                                        type="text" name="password" value={formData.password} onChange={handleInputValue}/>
                                    <label className="form__label">New Password<span>*</span></label>
                                    <i className="bi bi-eye toggle-password"></i>
                                    <span className="text-danger">
                                    </span>
                                </div>

                                <div className="form-group group col-md-6 col-12 position-relative">
                                    <input className="form-control cus-form-control password-field"
                                        type="text" name="password_confirmation" value={formData.password_confirmation} onChange={handleInputValue}/>
                                    <label className="form__label">Confirm New Password<span>*</span></label>
                                    <i className="bi bi-eye toggle-password"></i>
                                    <span className="text-danger">
                                    </span>
                                </div>

                            </div>

                            <div className="submit_dis_line">
                                <button type="submit" id="submitid"
                                    className="btn_submit quick-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ChangePassword;