import React, { Component } from 'react';
import '../../styles/substyles/decla.css';

export class Declaration extends Component {
    render() {
        return (
            <div className='container-fluid mt-5 bg-dark decla'>

                <div className='row dech'>
                    <h1 className='dechead mx-auto mt-4 '>Contact Me</h1>
                </div>
                <div className='row dech mt-3 bg-dark pb-3'>
                    <div className='col-1'>

                    </div>

                    <div className='col-12 col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12 deccol'>
                          <span className='mt-3'><a href="http://localhost:3000"><img src="https://media-exp2.licdn.com/dms/image/C5603AQF9p1t2wwQh7w/profile-displayphoto-shrink_100_100/0/1651144180365?e=1661990400&v=beta&t=nhDjn_SIPSMXsR9nc8QFeJEUEwfn0PTPRIngdtOGhlk" className='myimg' /><text className='mx-3 bg-white'>My Portfolio</text></a></span>
                          <div className='mt-3'>
                          <a href="https://www.facebook.com/madhu.garapati.1" class="fa fa-facebook mx-2"></a>
                          <a href="https://www.linkedin.com/in/madhu-garapati-b193b4201/" class="fa fa-linkedin mx-2"></a>
                          <a href="https://github.com/7995356278" class="fa fa-github mx-2"></a>
                          <a href="https://www.instagram.com/sleeper_321/" class="fa fa-instagram mx-2"></a>
                          </div>
                          <div class="footer-wrapper_branding-email mt-3">
                   
                    <a href="mailto:mk1240598@gmail.com" class="mx-1 "><i class="fa fa-envelope"></i> mk1240598@gmail.com</a>
                </div>
                    </div>
                    <div className='col-12 col-xl-5 col-lg-5 col-md-8 col-sm-12 col-xs-12 deccol'>

                        <h3 className='ques mt-3 mx-2'>Ask Me a Question</h3>

                        <form action="https://myportfolio-backend-site.herokuapp.com/resquestion" method="post" className='mt-3'>
                        <input className='mx-4' type="text" placeholder='enter a question' name='question' required /><br />
                        <button  class=" btn btn-success mx-4 mt-3" name="submit" type="submit">submit</button>
                    </form>

                    </div>

                    
                
                
                 
                 
                </div>

                <div className='decr'>
                    <h3 class="decright mx-5">@portfolio, All rights reserved</h3>
                </div>
                
            </div>
            
        );
    }
}
