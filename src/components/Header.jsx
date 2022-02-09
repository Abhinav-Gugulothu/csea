import React  from "react";
import CSELogo from "D:/csea/src/components/logo.jpeg";
function Header(){
    return(
        <div class = "head">
            <div class = "logo" >
                <img src={CSELogo} class="mainLogo" alt = "Logo for Nit Andhra Pradesh" />
            </div>
            <div class="title">
                <h1 class = "Name"><strong>National Institute of Technology Andhra Pradesh</strong></h1>
                <h2 class = "dname"><strong>Computer Science and Engineering Association</strong></h2>
            </div>
        </div>
        
    );
}
export default Header;