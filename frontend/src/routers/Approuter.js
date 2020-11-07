import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Loginform from '../components/login'
import Signupform from '../components/form'

const Approuter=()=>{
    return <BrowserRouter>
    <div>
    <Switch>
    <Route path='/' component={Loginform} exact={true}></Route>
    <Route path='/signup' component={Signupform}></Route>
    </Switch>




    </div>
    
    
    
    
    
    </BrowserRouter>
}
export default Approuter