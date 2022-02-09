import React from 'react';
import comps from "./Array";
import NavitemRight from './NavitemRight';

function sidebarR(){
    return (
        <div class="parent">
            <div id = "navbar1">
                <hr/>
                <NavitemRight item="Softwares"  Ref="#Softwares"/>
                <NavitemRight item="Internships"  Ref="#Internships"/>
                <NavitemRight item="Career"  Ref="#Career"/>
            </div>
        </div>);        
}

export default sidebarR;