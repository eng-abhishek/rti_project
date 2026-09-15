import logo from '../../assets/images/logo.png'
import emblem from '../../assets/images/Emblem_of_India.svg'
import {Link} from 'react-router-dom';

function Header(){
return(
    <>
        <header className="header_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo_content login_page_">
                            <Link href="/">
                                <img src={logo} alt="Delhi High Court" />
                            </Link>
                            <div className="logo-content">
                                <h4>High Court of Delhi</h4>
                                <h4>RTI System</h4>
                            </div>
                            <Link href="/">
                            <img src={emblem} alt="" className="emblem w-100" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
} 

export default Header;