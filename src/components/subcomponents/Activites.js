import React, { Component } from 'react';
import '../../styles/substyles/activity.css';




export class Activites extends Component {
 

   
    render() {
     
     const { Activity } = this.props;
        return (
            
            <>
              {
                Activity.map(item => <div className='container mb-5 activity'>
                <div class="row">
                     <h2 class="acthead mt-4 mx-auto">{item.head}</h2>
                </div>
                <div class="row mb-4">
                    <div class="col-7 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-7 mx-auto mt-3 pukesh">
                        <img src={item.boximg1} className='boximg'/>
                        <h3 className='boxtext mt-3'>{item.boxtext1}</h3>
                    </div>
                    <div class="col-7 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-7  mx-auto mt-3 pukesh">
                    <img src={item.boximg2} className='boximg'/>
                        <h3 className='boxtext mt-3'>{item.boxtext2}</h3>
                        </div>
                        <div class="col-7 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-7  mx-auto mt-3 pukesh">
                        <img src={item.boximg3} className='boximg'/>
                        <h3 className='boxtext mt-3'>{item.boxtext3}</h3>
                        </div>    
                </div>

                <div class="row">
                    <div class="col">

                    </div>
                    <div class="col">
                        
                        </div>
                        <div class="col">
                        
                        </div>    
                </div>

              </div>
                    
               )
                    
              }
              
            </>
        );
    }
}
