
import React,{useState} from 'react'
import {Button} from '@material-ui/core'
// import {TextField} from '@material-ui/core'
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import axios from 'axios'
// import Formfooter from './formfooter'
import {NavLink,useHistory} from 'react-router-dom'


function Form(){

const [formstate,setstate]=useState({
    
    password:"",
    email:"",
    errormessage:''
})
function handlechange(e){
const queryname=e.target.name
const value=e.target.value
setstate((prev)=>{
    return {...prev,[queryname]:value}
})}

const history=useHistory()
 const handlesubmit=(e)=>{
     e.preventDefault()
     const data={
         
         email:formstate.email,
         password:formstate.password,
    }
    
  axios.post("http://127.0.0.1:5000/user/login",data)
        .then((res)=>{
     console.log("Success")
     console.log(res.data)
     localStorage.setItem('token', res.data.token);
     history.push('/home')
 })
 .catch((e)=>setstate((prev)=>{return {...prev,errormessage:'PLEASE PROVIDE VALID CREDENTIALS!!!',email:'',password:''}}))
 
 }









return <div >
<ValidatorForm onSubmit={handlesubmit}  className="form" > 

<h1>SIGNIN FORM</h1>
<h2 className='formcomponent errormessage'>{formstate.errormessage}</h2>
 <div className="formcomponent"><TextValidator className='input' className='input' onChange={handlechange} value={formstate.email} name='email' validators={['required','isEmail']} errorMessages={['this field is required','email is invalid']} variant='outlined' placeholder='email'></TextValidator></div>
 <div className="formcomponent"><TextValidator className='input' onChange={handlechange} value={formstate.password} type='password' name='password' variant='outlined' validators={['required']} errorMessages={['this field is required']} placeholder='password'></TextValidator></div>
 <Button type="submit"  variant='contained' color="primary" >LOGIN</Button>   
 <h3>not signed up yet?</h3>
 <NavLink to='/signup'>SIGNUP</NavLink>
 {/* <Formfooter /> */}
 

 </ValidatorForm>

</div>


}
export default Form