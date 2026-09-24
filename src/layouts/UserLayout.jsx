import Header from "../components/UserPanel/Header";
import Footer from "../components/UserPanel/Footer";
import Sidebar from "../components/UserPanel/Sidebar";
import { Outlet } from "react-router-dom";

function UserLayout({children}){
return(<>
<div className="main">
<Header />
<main className="cd__main">
<div className='dashboard'>

<Sidebar />

<div className='dashboard-app main-content bg_dashboard'>
{/* <Outlet /> */}
{children}
</div>

</div>
</main>
<Footer />
</div>
</>);
}

export default UserLayout;