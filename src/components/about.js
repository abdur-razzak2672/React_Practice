import React from 'react'
import image1 from './images/rocket.png'


const about = () => {
    return (
        <section>
            <div class="container-fluid about" id = "about">
                <div class="row top_about">
                    <div class="col-lg-7 container-fluid">
                        <h1>Why coding?<span><h3>Coding teaches your kid various lifeskills such as</h3></span></h1><br></br><br></br>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 sign"> 
                                    <i class="fa fa-check-circle-o"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>    
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 sign"> 
                                    <i class="fa fa-check-circle-o"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ex ea commodo consequat.</p>    
                                </div>
                            </div>
                        </div>

                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12 sign"> 
                                    <i class="fa fa-check-circle-o"></i>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat.</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 image2"> 
                        <img src={image1} alt = ""></img>       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default about ; 