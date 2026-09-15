import React,{useState} from "react";

function PasswordInput(value,onChange){

const [showPassword,setShowPassword] = useState(false);

<div className="form-group group col-md-12 col-12 position-relative">
                  <input type={(showPassword) ? 'password' : 'text'}
                         name="password"
                         id="password-input"
                         className="form-control cus-form-control pe-5"
                         value={value}
                         onChange={onChange}
                         />
                  <label className="form__label">Password</label>
                  <i
                  className={`bi ${(showPassword) ? "bi-eye-slash" : "bi-eye"} position-absolute`}                 
                    id="togglePassword"
                    style={{
                    right:"15px",
                    top:"50%",
                    transform:"translateY(-50%)",
                    cursor:"pointer"
                    }}
                    onClick={() =>
                    setShowPassword(!showPassword)
                    }
                    />
                </div>
}

export default PasswordInput;
