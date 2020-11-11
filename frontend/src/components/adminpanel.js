// import React from 'react'
// import axios from 'axios'
// import {useHistory} from 'react-router-dom'
// import Imageuploader from 'react-images-upload'
// import {useState} from 'react'


// function AdminPanel(){

// const [signupstate,setstate]=useState({
//    name:''
// })
// const history=useHistory()
// function handleclick(e){
 
//    axios.post("http://127.0.0.1:5000/user/logout" , {} , {'headers' : {'Authorization': "Bearer " + localStorage.getItem('token')}})
//    .then((res)=>{
//       console.log("logged out");
//      history.push('/')
// })
// .catch((e)=>history.push('/signup'))

// }
// axios.get('http://127.0.0.1:5000/user/me',{'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
//    setstate({name:res.data.userName})
//    console.log('successs')
// })


// return <div className='adminpanel'>
//    {/* <img className="profileimg" src={picstate.picture}></img>  */}
//    <div >HI {signupstate.name } !!</div>

    

   
//    {/* <Imageuploader 
//     withIcon={false}
//     withPreview={true}
//     label=""
//     buttonText="profilepic"
  
//    onChange={handlepic}
//    imgExtension={['.jpg','.png','.jpeg']}
//    maxFileSize={10000000}/></div> */}
  
//    <h2> ABOUT</h2>
//    <h2>SETTINGS</h2>
//     <h2>LOGOUT</h2>
//    <button onClick={handleclick}></button>
//    </div> 


// }
// export default AdminPanel

import React, { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import axios from 'axios'
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
import { Button } from "@material-ui/core"
import { IconContext } from "react-icons/lib";
import {NavLink} from 'react-router-dom'


function Navbar() {
   const [signupstate,setstate]=useState({
         name:''
      })
    

  const [click, setClick] = useState(false);
 // const [pic , setPic] = useState();
  const [selectedFile , setSelectedFile] = useState(null);

  const history = useHistory();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleLogout = () => {
    axios.post("http://127.0.0.1:5000/user/logout" , {} , {'headers' : {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
      .then((res) => {
        history.push("/")
      })
      .catch((e) => {
        console.log(e);
      })
  };
  axios.get('http://127.0.0.1:5000/user/me',{'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
      setstate({name:res.data.userName})
      console.log('successs')
   })
  const handleImage = (e) => {
    // console.log(e.target.value);
    // axios.post("127.0.0.1:5000/user/avatar" , {}, {'headers': {'Authorization': 'Bearer '+ localStorage.getItem('token')}} )
    //   .then((res) => {
    //     console.log("successfull");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    setSelectedFile(e.target.files[0])
    // console.log(e.target.files[0]);
  }
  const onClickHandler = () => {
    const data = new FormData();
    data.append('file' , selectedFile);
    axios.post("http://127.0.0.1:5000/user/me/avatar" ,data , {'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
      .then((res) => {
        console.log(res.statusText)
        // axios.get("http://127.0.0.1:5000/user/me/avatar" , {'headers' : {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
        //   .then((res) => {
        //     console.log(res.statusText);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar sticky">
          <div className="navbar-container container">
            
              {/* <input type="file" name="file" onChange={handleImage} />
              <button type="button" style={{cursor: 'pointer'}}   onClick={onClickHandler}>Upload</button> */}
             <div className="welcome" ><h2>Welcome {signupstate.name }!</h2></div>
           
             <NavLink to='/myrooms' className='nav-links'>MY ROOMS</NavLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/About"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/myrooms"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Button style={{marginTop:'20px'}} variant="contained" color="secondary" onClick={handleLogout}> Logout </Button>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;