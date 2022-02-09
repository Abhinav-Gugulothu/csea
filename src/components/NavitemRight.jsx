import React from 'react';

function NavitemRight(props){
    return(
        <div><p class="c2"><a href={props.Ref}><svg class = "c2R" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d = {props.item} /></svg></a></p><hr/></div>
    );
}

export default NavitemRight;