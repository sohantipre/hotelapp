import React,{useState} from 'react'
// import {sortbycapacity,sortbypriceLowtoHigh,sortbypriceHightoLow,sortbyfloor} from './sorting'
import {sortroom,sortbypriceLowtoHigh,sortbypriceHightoLow} from './sorting'
import Room from './room'
function Filter(){

const [inputstate,setstate]=useState({
cap:'',
floor:'',
rooms:[],
sortby:''
})


function createroom(room){

    return <Room 
    
    number={room.num}
    key={room.id}
    name={room.name}
    type={room.type}
    description={room.description}
    floor={room.floor}
    price={room.price}
    url={room.url}
    capacity={room.capacity}
    />
    
    }

function handlefloor(e){

const value=e.target.value
const sortedrooms=sortroom(value,inputstate.cap,inputstate.sortby)
setstate((prev)=>{return {...prev,floor:value,rooms:sortedrooms}})



}
// function handleprice(e){
//     const value=e.target.value
//     setstate((prev)=>{return {...prev,price:value}})
//     const sortedrooms=sortbyprice()
//     setstate({rooms:sortedrooms})
// }
function handlecap(e){
    const value=e.target.value
    const sortedrooms=sortroom(inputstate.floor,value,inputstate.sortby)
    setstate((prev)=>{return {...prev,cap:value,rooms:sortedrooms}})
    
   
}

return <div className='filterinput'>
<input className='filtercomponent' type='number' name='cap' onChange={handlecap} value={inputstate.cap}  placeholder='no. of guests'></input>
<input className='filtercomponent' type='text'  name='floor' value={inputstate.floor} onChange={handlefloor} placeholder='floor '></input>
{/* <input className='filtercomponent' type='text' name='price' value={inputstate.price} onChange={handleprice} placeholder='price'></input> */}

<select className='filtercomponent' value={inputstate.sortby} onChange={(e)=>{
        if(e.target.value==='lowtohigh'){
           setstate((prev)=>{return {...prev,rooms:sortroom(inputstate.floor,inputstate.cap,'lowtohigh'),sortby:'lowtohigh'}});
        }
        else if(e.target.value==='hightolow'){
            setstate((prev)=>{return{...prev,rooms:sortroom(inputstate.floor,inputstate.cap,'hightolow'),sortby:'hightolow'}})
        }
}}>
    <option  value='lowtohigh'>Price Low to high</option>
    <option  value='hightolow' >Price High to low</option>
</select>
<div className='filter'>
{inputstate.rooms&&inputstate.rooms.map(createroom)}
</div>
</div>



}

export default Filter