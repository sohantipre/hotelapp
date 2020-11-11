import React,{useState} from 'react'
import rooms from './roominfo'


function sortbyprice(value){

return rooms.filter((room)=>(room.price==value))

}


function sortbyfloor(value){

   

return rooms.filter((room)=>(room.floor==value))

}


function sortbycapacity(value){

return rooms.filter((room)=>(room.capacity==value))

}

export {sortbycapacity,sortbyprice,sortbyfloor}