import React, { Component } from 'react';
import '../styles/substyles/about.css';
import axios from 'axios';
import { Declaration } from '../components/subcomponents/declaration';




class About extends Component {

    constructor(){
        super();
        this.state ={
            about:[]
        }

    }

    componentDidMount(){
        axios.get(`https://myportfolio-backend-site.herokuapp.com/about`
        ).then(res => {
            this.setState({
                about : res.data.about
            })
        }) 
        .catch(err => {
           console.log(err)
        })
    }
    render() {
        const {about} = this.state;
        return (
           
            <>
             
             
                        {
                           about.map(me=>{
                            return(
                                <div className="container-fluid aboutsection">
                                <div className='container aboutme'>
                                <h3 className='abouthead mt-3'>{me.heading}</h3>
                                <p className='abouttheme'>{me.maintheme}</p>
                                </div>

                                <div className ='container mt-5 '>
                                    <div className='eduquals pt-5 pb-5'>
                                        
                                        <h3 className='equhead mx-5'>{me.eduhead}</h3>
                                       
                                           
                                            <div className='row mt-4'>
                                                <div className='col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-xxs-1'></div>
                                                <div className='col-12 col-xl-2 col-lg-3 col-md-3 com-sm-3 col-xs-6 px-5'>
                                                <a href="" ><img src={me.unimg} alt="img not found" className='uniimg ' /></a>
                                                </div>
                                                <div className ='col-12 col-xl-4 col-lg-5 col-md-6 com-sm-6 col-xs-6 px-5'>
                                                <h4>{me.Btech}
                                            
                                            </h4>
                                            <h4>{me.duration}</h4>
                                            <h5>{me.grade}</h5>
                                                </div>
                                               
                                           
                                           
                                            </div>
                                            
                                    </div>
                                </div>

                                <div className='container skillset mt-5 pt-4 pb-5'>

                                    <h3 className='skillhead'>{me.skillhead}</h3>


                                    <div className='row mt-3'>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                            <button className='skillbut'>{me.skillset1}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                        <button className='skillbut'>{me.skillset2}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                        <button className='skillbut'>{me.skillset3}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                        <button className='skillbut'>{me.skillset4}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto'>
                                        <button className='skillbut'>{me.skillset5}</button>
                                        </div>
                                       
                                    </div>


                                    <div className='row mt-3'>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                            <button className='skillbut'>{me.skillset6}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                        <button className='skillbut'>{me.skillset7}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                        <button className='skillbut'>{me.skillset8}</button>
                                        </div>
                                        <div className='col-xl-2 mx-auto mb-2'>
                                        <button className='skillbut'>{me.skillset9}</button>
                                        </div>
                                        
                                       
                                    </div>

                                </div>

                                <div className='container skillset mt-5 pt-4 pb-5'>

                                    <h1 className='skillhead'>{me.certificates}</h1>

                                    <text className='coursenm mx-2 mt-2'>{me.courser}</text><br></br>

                                    <button value="click to view certificate" className='certifybtn mx-2 mt-3'><a href={me.coursecert}>click to view certificate</a></button>

                                </div>

                               

                            </div>                   
                               
                            )
                           }) 
                         
                           
                        }

                           <Declaration />

                        
                           
                   
           
            </>
        );
    }
}

export default About;