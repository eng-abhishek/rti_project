import React from "react";
import {Link} from 'react-router-dom'
import cardDash1 from '../../assets/images/card1-dash.png'
import cardDash2 from '../../assets/images/card1-dash2.png'
import cardDash3 from '../../assets/images/card1-dash3.png'

function UserDashboard(){
 return(<>
                  <div className='container-fluid'>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form_heading custom_cenetr">
                                    <h4>User Inbox</h4>
                                </div>
                                <div className="bg_inner_div">
                                    <form method="GET" action="">
                                        <div className="row mt-3 mb-3">
                                            <div className="col-md-3 mb-3">
                                                <select name="year" id="year" className="form-select">
                                                    <option value="">-- Select Year --</option>
                                                    <option value="2026" selected>2026</option>
                                                </select>
                                            </div>

                                            <div className="col-md-2 ">
                                                <button type="submit" className="btn btn-primary">
                                                    <i className="bi bi-funnel"></i> Filter
                                                </button>
                                                <Link to='/' className="btn btn-secondary"> 
                                                <i className="bi bi-arrow-counterclockwise"></i> Reset</Link>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-12">
                                            <div className="bg_card_dash">
                                                <div className="icons_card">
                                                    <img src={cardDash1} alt="state Licence" />
                                                </div>
                                                <div className="card_content_dash">
                                                    <h4>0</h4>
                                                    <p>Total RTI Request</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-4 col-12">
                                            <div className="bg_card_dash bg_card_dash_3">
                                                <div className="icons_card">
                                                    <img src={cardDash2} alt="Prospecting Licence" />
                                                </div>
                                                <div className="card_content_dash">
                                                    <h4>0</h4>
                                                    <p>Complete RTI</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-4 col-12">
                                            <div className="bg_card_dash bg_card_dash_5">
                                                <div className="icons_card">
                                                    <img src={cardDash3} alt="Composite Licence" />
                                                </div>
                                                <div className="card_content_dash">
                                                    <h4>0</h4>
                                                    <p>Pending RTI</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 </>);
}
export default UserDashboard;