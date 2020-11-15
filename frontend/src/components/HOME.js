import  React,{useState} from 'react'
import Adminpanel from './adminpanel'
import Renderroom from './homerooms'
import Filter from './filters'
import {NavLink} from 'react-router-dom'
import Slideshow from './imageslideshow'

function Home(){
  return <div className='home'>
  
  <Adminpanel></Adminpanel>
  <Slideshow></Slideshow>
  
  <Renderroom/>
   
  <Filter />
   </div>
}
export default Home