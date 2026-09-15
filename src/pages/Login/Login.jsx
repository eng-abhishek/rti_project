import React from "react";
import LoginInformation from "../../components/Login/LoginInformation";
import LoginLinks from "../../components/Login/LoginLinks";
import LoginNotice from "../../components/Login/LoginNotice";
import LoginForm from "./LoginForm";

function Login(){

return(<>
  <section className="bg_spacing">
      <div className="container">
        <div className="row bg_drop_shd">

        {/* Left Side */}
        <LoginInformation />

        {/* Right Side */}

          <div className="col-md-6 col-lg-6 cus_col_form ">
            <div className="form_heading">
              <h4>Login</h4>
                
                <LoginForm />
                <LoginLinks />
                <LoginNotice />

              </div>
              </div>
              
        </div>
      </div>
  </section>
</>);

}

export default Login;