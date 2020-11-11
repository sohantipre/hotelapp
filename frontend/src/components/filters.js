import React,{useState} from 'react'
import {sortbycapacity,sortbyprice,sortbyfloor} from './sorting'
import Room from './room'
function Filter(){

const [inputstate,setstate]=useState({
number:'',
floor:'',
price:'',
rooms:[]

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
setstate((prev)=>{return {...prev,floor:value}})
const sortedrooms=sortbyfloor(value)
setstate({rooms:sortedrooms})

}
function handleprice(e){
    const value=e.target.value
    setstate((prev)=>{return {...prev,price:value}})
    const sortedrooms=sortbyprice(value)
    setstate({rooms:sortedrooms})
}
function handlenumber(e){
    const value=e.target.value
    setstate((prev)=>{return {...prev,number:value}})
    const sortedrooms=sortbycapacity(value)
    setstate({rooms:sortedrooms})
}

return <div className='filterinput'>
<input className='filtercomponent' type='number' name='number' onChange={handlenumber} value={inputstate.number}  placeholder='no. of guests'></input>
<input className='filtercomponent' type='text'  name='floor' value={inputstate.floor} onChange={handlefloor} placeholder='floor '></input>
<input className='filtercomponent' type='text' name='price' value={inputstate.price} onChange={handleprice} placeholder='price'></input>

<div className='filter'>
{inputstate.rooms.map(createroom)}
</div>
</div>



}

export default Filter