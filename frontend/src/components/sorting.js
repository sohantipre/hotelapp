import React,{useState} from 'react'
import rooms from './roominfo'


function sortbypriceLowtoHigh(value){

   return rooms.sort((a,b) => a-b);

}


function sortbypriceHightoLow(value){

   return rooms.sort((a,b) => b-a);

}


function sortbyfloor(value){

   

return rooms.filter((room)=>(room.floor==value))

}


function sortbycapacity(value){

return rooms.filter((room)=>(room.capacity==value))

}

export {sortbycapacity,sortbypriceLowtoHigh,sortbypriceHightoLow,sortbyfloor}
