import React from 'react';
import Navitem from './navitem';
import comps from "./Array";

function Sidebar(){
    return (
        <div class="parent">
            <div id = "navbar">
                <hr/>
                <Navitem item="Home" Ref="#Home"/>
                <Navitem item="Materials" Ref="#Materials" />
                <Navitem item="Courses"  Ref="#Courses"/>
                <Navitem item="Softwares"  Ref="#Softwares"/>
                <Navitem item="Internships"  Ref="#Internships"/>
                <Navitem item="Career"  Ref="#Career"/>
            </div>
        </div>);        
}

export default Sidebar;