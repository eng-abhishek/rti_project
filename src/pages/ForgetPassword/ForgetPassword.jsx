import React from "react";
import { Link } from "react-router-dom";
function forgetPassword(){

return(<>
        <section className="bg_spacing">
            <div className="container">
                <div className="bg_drop_shd-login pb-3">
                    <div className="form_heading">
                        <h4>Forgot Password</h4>
                        <ul className="reset-ul">
                            <li><Link to="/reset-password-mobile-number"><i
                                        className="bi bi-chevron-right"></i>
                                    Reset Password using mobile number</Link></li>
                            <li><i className="bi bi-chevron-right"></i>
                                <Link to="/reset-password-security-answer">Reset
                                    Password using security answer</Link>
                            </li>
                        </ul>
                        <Link className="btn_submit quick-btn go-back-link"
                            to="/login">Go back to login page</Link>
                    </div>
                </div>
            </div>
        </section>
</>);
}

export default forgetPassword;

