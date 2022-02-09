import React from 'react';

function Navitem(props){
    return(
        <div><p class="c1"><a href={props.Ref}> {props.item}</a></p><hr/></div>
    );
}

export default Navitem;