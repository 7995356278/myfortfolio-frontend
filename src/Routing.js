import React, { Component } from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import { about } from './components/navcomponents/About';

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
               <Route path='/about' component={about} />
            </BrowserRouter>
        );
    }
}

export default Routing;