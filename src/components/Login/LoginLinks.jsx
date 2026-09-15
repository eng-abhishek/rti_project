import {Link} from 'react-router-dom'

function LoginLinks(){

return (<>
              <div className="forgot_content">
                <p>Not Registered Yet? <Link to="/signup">Sign Up Here</Link></p>
                <p>Forget Password <Link to="/forget-password">Click Here</Link></p>
              </div>
       </>);
}

export default LoginLinks;