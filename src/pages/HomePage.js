import React, { Fragment } from "react";

import MyNavbar from "../component/navbar/Navbar";
import HomeComp from "../component/homeCom/HomeComp";
import Footer from "../component/footer/Footer";
function HomePage() {
    return(
        <Fragment>
            <MyNavbar/>
            <HomeComp/>
            <Footer/>
        </Fragment>
    )
}
export default HomePage