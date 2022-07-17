import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../styles/mainstyles/main.css';
import {Activites} from './Activites';
import {Declaration} from './declaration';
//<Activites Activites={activites}/>
import axios from 'axios';


export class main extends Component {

    constructor(){
       
            super();
            this.state = {
               homep: [],
               activites: []
              
              
            }
        
    }

    componentDidMount(){
        axios.get(`https://myportfolio-backend-site.herokuapp.com/homepage`)
            .then(resp => {
                this.setState({
                    homep: resp.data.homep
                })
            })
            .catch(err => {
                console.log(err);
            });

            axios.get(`https://myportfolio-backend-site.herokuapp.com/activites`)
            .then(resp => {
                this.setState({
                    activites: resp.data.activites
                })
            })
            .catch(err => {
                console.log(err);
            });

          

    }

   

   


    render() {
        const { homep,activites } = this.state;
        return (

            <>
             {
                homep.map(detail => <div className='container mt-5 mb-5 pt-5 pb-5 mainst'>
                    <h1 className ="nmhead">Welcome to My Portfolio Site</h1>
                    {
                        /*
                    
                    <div className='row'>
                        <div className='col-12 col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-5 textcol'>
                                <h1 className='nmhead mt-5 pt-4'>
                              {detail.heading}
                                </h1>
                                <h1 className='nmsubhead mt-5'>
                              {detail.subhead}
                                </h1>
                            </div>
                            
                           
                            <div className='col-12 col-x1-6 col-lg-5 col-md-5 col-sm-12 col-xs-12 mx-auto'>
                                
                           <Carousel showThumbs={false} className="imagegall">
                                    <div>
                                     <img src={detail.image} />
        
                                        </div>
                                       <div>
                                    <img src={detail.image} />
        
                                      </div>
                                             <div>
                                          <img src={detail.image} />
       
                                             </div>
   
   
                                </Carousel>
                            </div>
                   
                    </div>  
                    */
                    }  
                    </div>
                   )
             }

              <Activites  Activity={activites}/>

              <Declaration />

             
                
            </>
        );
    }
}

