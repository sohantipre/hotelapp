import  React,{useState} from 'react'
import Adminpanel from './adminpanel'
import Renderroom from './homerooms'
import Filter from './filters'
import {NavLink} from 'react-router-dom'

function Home(){
  return <div className='home'>
  
  <Adminpanel></Adminpanel>
  <NavLink to='/myrooms'>myrooms</NavLink>
  <Renderroom/>
   
  <Filter />
   </div>
}
export default Home