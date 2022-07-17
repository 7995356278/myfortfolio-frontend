
import axios from 'axios';

import React, { Component } from 'react';
import { Declaration } from '../components/subcomponents/declaration';

import '../styles/substyles/projects.css';

class Project extends Component {

    constructor(){
        super();
        this.state = {
           project:[]
        }
    }

    componentDidMount(){
        axios.get('https://myportfolio-backend-site.herokuapp.com/project').then(
            res => {
                this.setState({
                    project : res.data.project
                })
            }
        ).catch(err => {
            console.log(err)
        })
    }
    render() {
        const {project} = this.state;
        return (
            <>
            {
                project.map(kit =><div className='container projects mt-5 pt-4 mb-5'>
                    <h1 className=' projecthead'>{kit.projecthead}</h1>
                    <div className='row mt-5'>
                        <div className='col-12 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 project1'>
                            <div className='row'>
                                <div className='col-6 volpart'>
                                <img src={kit.project1img} className="projectimg"/>
                                </div>
                                <div className='col-6 volpart'>
                                    <text className="projecttext">{kit.project1head}</text>  
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 project1'>
                            <text className="projecttext2">{kit.project1decp}</text>
                            <button type='link' className="mt-5 mb-2 projectbutton"><a href={kit.project1link}>click to view project</a></button>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-12 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 project1'>
                            <div className='row'>
                                <div className='col-6 volpart'>
                                <img src={kit.project2img} className="projectimg"/>
                                </div>
                                <div className='col-6 volpart'>
                                    <text className="projecttext">{kit.project2head}</text>  
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-12 col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-12 project1'>
                            <text className="projecttext2">{kit.project2decp}</text>
                            <button type='link' className="mt-5 mb-2 projectbutton"><a href={kit.project2link}>click to view project</a></button>
                        </div>
                    </div>
                </div>)
            }

            <Declaration />
            </>
        );
    }
}

export default Project;