import React from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Imageuploader from 'react-images-upload'
import {useState} from 'react'


function AdminPanel(){

const [picstate,setstate]=useState({
   picture:''
} )
const history=useHistory()
// function handleclick(e){

//    axios.post("http://127.0.0.1:5000/user/logout")
//    .then((res)=>{
//      history.push('/')
// })
// .catch((e)=>console.log(e))

// }
function handlepic(pic){
setstate({picture:pic})
}

return <div className='adminpanel'>
   {/* <img className="profileimg" src='/images/profile.jpg'></img> */}
   <div className='profilepic'> 
   <Imageuploader 
   withIcon={false}
   withLabel={false}
   buttonText=''
   onChange={handlepic}
   imgExtension={['.jpg','.png','.jpeg']}
   maxFileSize={10000000}/></div>
  
   <h2> ABOUT</h2>
   <h2>SETTINGS</h2>
   <h2>LOGOUT</h2>
   {/* <button onClick={handleclick}></button> */}
   </div> 


}
export default AdminPanel