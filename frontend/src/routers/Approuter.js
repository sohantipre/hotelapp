import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Loginform from '../components/login'
import Signupform from '../components/form'
import Home from '../components/HOME'
import Detailpage from '../components/Detailpage'
import Myroom from '../components/myroom'
import About from '../components/About'
import Allrooms from '../components/allrooms'

import PrivateRoute from './Privateroute'

const Approuter=()=>{
    return <BrowserRouter>
    <div>
    <Switch>
    <Route path='/' component={localStorage.getItem('token')?Home:Loginform} exact={true}></Route>
    <Route path='/signup' component={Signupform}></Route>
    <PrivateRoute path='/home' component ={Home}></PrivateRoute>
    <PrivateRoute path='/room/:id'  component={Detailpage} ></PrivateRoute>
    <PrivateRoute path='/myrooms' component={Myroom}></PrivateRoute>
    <PrivateRoute path='/About' component={About}></PrivateRoute>
    <PrivateRoute path='/Allrooms' component={Allrooms}></PrivateRoute>
    </Switch>




    </div>
    
    
    
    
    
    </BrowserRouter>
}
export default Approuter