import React,{useState} from 'react'
import {Button} from '@material-ui/core'
// import {TextField} from '@material-ui/core'
import {ValidatorForm,TextValidator} from 'react-material-ui-form-validator'
import axios from 'axios'
import {NavLink,useHistory} from 'react-router-dom'


function Form(){

const [formstate,setstate]=useState({
    name:"",
    password:"",
    email:"",
    error:""
    // gender:""
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
         userName:formstate.name,
         email:formstate.email,
         password:formstate.password,
         
        //  gender:formstate.gender
    }
    
  axios.post("http://127.0.0.1:5000/user",data)
        .then((res)=>{
     console.log("Success")
     console.log(res.data)
     history.push('/')
     
 })
 .catch((e)=>(setstate({error:'THIS EMAIL IS ALREADY TAKEN!!!!',name:"",email:"",password:""})))

//  history.push('/home')
 }




return <div className="form">
<div className='formbox'>
<ValidatorForm onSubmit={handlesubmit} > 

<h1 className='formtitle'>SIGNUP FORM</h1>

<div className="formcomponent errormessage">{formstate.error}</div>
<div className="formcomponent"><TextValidator className='input' onChange={handlechange}  value={formstate.name} name='name' validators={['required']} errorMessages={['this field is required']} variant='outlined' placeholder='name'></TextValidator></div>
 <div className="formcomponent"><TextValidator className='input' onChange={handlechange} value={formstate.email} name='email' validators={['required','isEmail']} errorMessages={['this field is required','email is invalid']} variant='outlined' placeholder='email'></TextValidator></div>
 <div className="formcomponent"><TextValidator className='input' onChange={handlechange} type ='password' value={formstate.password} name='password' variant='outlined' validators={['required']} errorMessages={['this field is required']} placeholder='password'></TextValidator></div>

 
 {/* <select className='genderbox'onChange={handlechange} value={formstate.gender} name='gender' placeholder='gender' id='gender'>
     <option value='male'>Male</option>
     <option value='female'>Female</option>
     </select> */}
 <div className='actionbutton'>
 <Button className='actionbutton' type="submit"  variant='contained' color="primary" >SIGNUP</Button>   
 <img className='icon' src='https://tse4.mm.bing.net/th?id=OIP.B-eF8Cb4ai7Hp_VK50ya9wHaHa&pid=Api&P=0&w=300&h=300'></img>
 <img className='icon' src='https://tse2.mm.bing.net/th?id=OIP.R0tdoRzEHXkFY-9H9Jp5xwHaHa&pid=Api&P=0&w=300&h=300'></img>
 <img className='icon' src='https://tse3.mm.bing.net/th?id=OIP.3L_2Ihtz40xFpk6E7S0t6wHaHa&pid=Api&P=0&w=300&h=300'></img>
 <img className='icon' src='https://tse1.mm.bing.net/th?id=OIP.7pfHXvoXERQxzCHUG2fnXAHaHa&pid=Api&P=0&w=300&h=300'></img>
 </div>
 
 <h3>Already Signed Up?</h3>
 <NavLink to='/'>SIGNIN</NavLink>
 

 </ValidatorForm>
 </div>
</div>


}
export default Form