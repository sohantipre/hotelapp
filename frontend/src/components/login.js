
import {FaInstagram} from 'react-icons/fa'

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









return <div className="form">
<div className='formbox'>
<ValidatorForm onSubmit={handlesubmit}   > 

<h1>SIGNIN FORM</h1>
<h2 className='formcomponent errormessage'>{formstate.errormessage}</h2>
 <div className="formcomponent"><TextValidator className='input' onChange={handlechange} value={formstate.email} name='email' validators={['required','isEmail']} errorMessages={['this field is required','email is invalid']} variant='outlined' placeholder='email'></TextValidator></div>
 <div className="formcomponent"><TextValidator className='input' onChange={handlechange} value={formstate.password} type='password' name='password' variant='outlined' validators={['required']} errorMessages={['this field is required']} placeholder='password'></TextValidator></div>
 <div className='actionbutton'>
 <Button className='actionbutton' type="submit"  variant='contained' color="primary" >LOGIN</Button> 
 <img className='icon' src='https://tse4.mm.bing.net/th?id=OIP.B-eF8Cb4ai7Hp_VK50ya9wHaHa&pid=Api&P=0&w=300&h=300'></img>
 <img className='icon' src='https://tse2.mm.bing.net/th?id=OIP.R0tdoRzEHXkFY-9H9Jp5xwHaHa&pid=Api&P=0&w=300&h=300'></img>
 <img className='icon' src='https://tse3.mm.bing.net/th?id=OIP.3L_2Ihtz40xFpk6E7S0t6wHaHa&pid=Api&P=0&w=300&h=300'></img>
 <img className='icon' src='https://tse1.mm.bing.net/th?id=OIP.7pfHXvoXERQxzCHUG2fnXAHaHa&pid=Api&P=0&w=300&h=300'></img>
 </div>
 
 <h3>Don't have an account?</h3>
 <NavLink to='/signup'>SIGNUP</NavLink>
 
 {/* <Formfooter /> */}
 

 </ValidatorForm>
 </div>
</div>


}
export default Form