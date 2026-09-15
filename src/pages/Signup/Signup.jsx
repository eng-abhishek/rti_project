import React from "react";
import SignupForm from './SignupForm'

function Signup(){
return(<>
        <section className="bg_spacing">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form_heading custom_cenetr">
                            <h4 style={{textAlign:"center"}}>User Registration Form for RTI Application</h4>
                        </div>
                         
                        <div className=" h-auto mb-4">
                            <div className="mt-5">
                            {/* Main Form Parts Here.. */}
                              <SignupForm /> 
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>
</>);
}

export default Signup;