import HistoryImg from '../../assets/images/history-img.jpg'

function LoginInformation(){

    return(<>
          <div className="col-md-6 p-0">
            <div className="bg_upper_banner">
              <img src={HistoryImg} alt="bg_image" className="w-100 h-100" />
              <div className="upper_banner-text">
                <h4>RTI System</h4>
                <p className="p-justify">
                  This is a portal to file RTI applications/first appeals online along with payment gateway. Payment can
                  be
                  made through internet banking of SBI &amp; its associate banks, debit cards and BHIM UPI. Through this
                  portal,
                  RTI applications/first appeals can be filed by Indian Citizens for High Court of Delhi only. RTI
                  applications/first appeals should not be filed for other Public authorities under Central/State Govt.
                  through this portal. Please read instructions carefully while submitting request/appeal.</p>
              </div>
            </div>
          </div>
    
        </>);

}

export default LoginInformation;