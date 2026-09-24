import React,{useState} from "react";

function EditProfile(){

const [formData, setFormData] = useState({
    address:'',
    state:'',
    district:'',
    pincode:'',
    mobileno:''
});


const onchangeHandler = (e) => {
console.log('ji.....');
const {name,value} = e.target;
// console.log(e.target);
console.log(name,value);

setFormData((prev)=>({
    // console.log(prev);
    ...prev,
    [name]:value
}))

}


const EditFormHandler = (e)=> {

e.preventDefault();
}

return(<>

<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">

      <div className="form_heading custom_cenetr">
        <h4>Edit Profile</h4>
      </div>

      <div className="bg_inner_div">
        <form
          action="#"
          className="input_cust"
          id="validateForm"
          onSubmit={EditFormHandler}
        >
          <div className="row cust_flex_row_dash">

            {/* Address */}
            <div className="form-group group col-md-6 col-12">
              <textarea
                name="address"
                id="address"
                maxLength="300"
                className="form-control cus-form-control h-100"
                rows="3"
                onChange={onchangeHandler}
              >{formData.address}</textarea>
              <span>(Max Limit 300 Characters only)</span>
              <label className="form__label" htmlFor="address">
                User address<span>*</span>
              </label>
              <span className="text-danger"></span>
            </div>

            {/* State */}
            <div className="form-group group col-md-6 col-12">
              <select
                name="state"
                id="displaystate"
                className="form-control cus-form-control h-100"
                onChange={onchangeHandler}
                required
                value={formData.state}
              >
                <option value="">--Select State--</option>
                <option value="AN">
                  Andman &amp; Nicobar Islands
                </option>
              </select>
              <label className="form__label" htmlFor="displaystate">
                State<span>*</span>
              </label>
              <span className="text-danger"></span>
            </div>

            {/* District */}
            <div className="form-group group col-md-6 col-12">
              <select
                name="district"
                id="displaydistrict"
                className="form-control cus-form-control"
                onChange={onchangeHandler}
                required
                value={formData.district}
                >
                <option value="">Select District</option>
                <option value="ADAP">ADILABAD</option>
              </select>
              <label className="form__label" htmlFor="displaydistrict">
                District<span>*</span>
              </label>
              <span className="text-danger"></span>
            </div>

            {/* Pin Code */}
            <div className="form-group group col-md-6 col-12">
              <input
                className="form-control cus-form-control"
                type="text"
                name="pincode"
                id="displaypincode"
                minLength="6"
                maxLength="6"
                onChange={onchangeHandler}
                value={formData.pincode}
              />
              <label className="form__label" htmlFor="displaypincode">
                Pin code<span>*</span>
              </label>
              <span className="text-danger"></span>
            </div>

            {/* Mobile */}
            <div className="form-group group col-md-6 col-12">
              <input
                className="form-control cus-form-control"
                type="text"
                name="mobileno"
                id="displaymobileno"
                minLength="10"
                maxLength="10"
                value={formData.mobileno}
                onChange={onchangeHandler}
              />
              <label className="form__label" htmlFor="displaymobileno">
                Mobile No<span>*</span>
              </label>
              <span className="text-danger"></span>
            </div>

            {/* Email */}
            <div className="form-group group col-md-6 col-12">
              <input
                className="form-control cus-form-control"
                disabled
                type="text"
                value="TEST2026@GMAIL.COM"
              />

              <label className="form__label" htmlFor="">
                Email ID
              </label>
            </div>

          </div>

          {/* Submit Button */}
          <div className="submit_dis_line">
            <button
              type="submit"
              id="submitid"
              className="btn_submit quick-btn"
            >
              Update
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</div>
 </>);
}

export default EditProfile;