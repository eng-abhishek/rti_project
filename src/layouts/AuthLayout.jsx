import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


function AuthLayout({children}){

    return(
      <>
          <div className="main">
          <Header/>
          {children}
          <Footer/>
          </div>
      </>
    );

}

export default AuthLayout;