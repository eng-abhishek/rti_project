import React, { useState } from "react";

function RtiFillingForm() {

    const [rtimatter, setRtimatter] = useState('');
    const RtiFillingHandler = (e) => {
        console.log(e.target.value);
        e.preventDefault();
    }

    return (<>
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-12">
                    <div className="form_heading custom_cenetr">
                        <h4>Apply RTI</h4>
                    </div>
                    <div className="bg_inner_div">
                        <h4 className="section-title mt-3">New RTI Application Request Form</h4>
                        <form action="#" onSubmit={RtiFillingHandler} className="input_cust"
                            id="validateForm">
                            <div className="row cust_flex_row_dash">
                                <div className="form-group group col-md-6 col-12">
                                    <textarea name="rtimatter"
                                        id="rtimatter"
                                        maxLength={3000}
                                        onChange={(e) => setRtimatter(e.target.value)}
                                        className="form-control cus-form-control h-100"
                                        rows="3"
                                        value={rtimatter}></textarea>
                                    <span>(Max Limit 3000 Characters only)</span>
                                    <label className="form__label" htmlFor="">Text for RTI Request
                                        application<span>*</span></label>
                                    <span id="charcount">0</span> characters entered.
                                    <span className="text-danger">
                                    </span>
                                </div>

                                <div className="form-group group col-md-6 col-12">
                                    <div className="flex_gap">
                                        <input type="file" name="upload" className="form-control"
                                            placeholder="Upload RTI File" />
                                    </div>
                                    <span>Supporting document (only pdf upto 5 MB)</span>
                                    <span className="text-danger">
                                    </span>
                                </div>
                            </div>
                            <div className="submit_dis_line">
                                <button type="submit" className="btn_submit quick-btn" id="submitid">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default RtiFillingForm;