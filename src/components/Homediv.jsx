import React from 'react';
function Homediv(props){
    return (
            <div class = {props.cname} id={props.cont}  style={{backgroundColor: props.bgcolor}} >
                <div class="wrap">
                    <h1>{props.cont}</h1>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut. Ut morbi tincidunt augue interdum velit euismod in pellentesque. Dolor sit amet consectetur adipiscing. Morbi tincidunt augue interdum velit. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Faucibus turpis in eu mi bibendum neque. Laoreet non curabitur gravida arcu ac tortor. Nisi scelerisque eu ultrices vitae auctor eu. Eu nisl nunc mi ipsum faucibus. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Vel pretium lectus quam id leo in vitae. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Congue nisi vitae suscipit tellus mauris a diam maecenas. Etiam erat velit scelerisque in dictum non consectetur. Elementum tempus egestas sed sed risus. Aenean et tortor at risus viverra adipiscing at. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Enim nec dui nunc mattis.
<br /><br />
Ut sem nulla pharetra diam sit amet nisl suscipit. Faucibus scelerisque eleifend donec pretium vulputate. Leo vel fringilla est ullamcorper eget nulla facilisi. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Aenean euismod elementum nisi quis eleifend quam. Habitant morbi tristique senectus et. Eu consequat ac felis donec et odio pellentesque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dui sapien eget mi proin sed libero enim sed faucibus. In vitae turpis massa sed elementum. Malesuada nunc vel risus commodo viverra. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Eu lobortis elementum nibh tellus molestie nunc non blandit. Quis risus sed vulputate odio. Molestie ac feugiat sed lectus.</p>
<button type = "button" className='btn'>Explore →</button>

                </div>
            </div>
        
    );
}

export default Homediv;