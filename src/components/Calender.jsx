/*        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-74830ea9-8ac2-4bca-9ca7-ef28f4ba2a81"></div> */
import React from 'react';
import ScriptTag from 'react-script-tag';

function Calender(props){
    return (
            <div class = {props.cname} id={props.cont}  style={{backgroundColor: props.bgcolor}} >
                <div class="wrap">
                    <ScriptTag type="text/javascript" src="https://apps.elfsight.com/p/platform.js" />
                    {/*<script src="https://apps.elfsight.com/p/platform.js" defer></script>*/}
                    <div class="elfsight-app-74830ea9-8ac2-4bca-9ca7-ef28f4ba2a81"></div>
                </div>
            </div>
        
    );
}

export default Calender;