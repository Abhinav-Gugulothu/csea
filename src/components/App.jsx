import React from 'react';
import Sidebar from './Sidebar';
import SidebarRight from './SidebarRight';
import Homediv from './Homediv';
import Header from './Header';
import Calender from './Calender';

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

function App(){
    var array = ["#4CB3CF" , "#21ccaf" , "#5E8B7E" , "#39A6A3"  ,"#21ccaf" , "#DEEEEA" , "3E497A"];
    array = shuffle(array);
    return (
        <div>   
        <div>
        <Header />
        </div>     
        <div id="content">
            <Sidebar />
            <SidebarRight />
            <Calender cname="hdiv2" cont="Home" bgcolor = {array[6]}/>
            <Homediv cname="hdiv1" cont="Home" bgcolor = {array[0]}/>
            <Homediv cname="hdiv2" cont="Materials" bgcolor ={array[1]}/>
            <Homediv cname="hdiv1" cont="Courses" bgcolor = {array[2]}/>
            <Homediv cname="hdiv2" cont="Softwares" bgcolor ={array[3]}/>
            <Homediv cname="hdiv1" cont="Internships" bgcolor = {array[4]}/>
            <Homediv cname="hdiv2" cont="Career" bgcolor = {array[5]}/>
            </div>
        </div>);
}

export default App;
 // color2 : #5E8B7E
 // color3 : #39A6A3
 // color4 : #DEEEEA