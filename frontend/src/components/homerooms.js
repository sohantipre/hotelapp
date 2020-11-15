
import React from 'react'
import Room from './room'
import rooms from './homeroominfo'


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


function Renderroom(){
return <div className='multiplerooms'>{rooms.map(createroom)}</div>



}
export default Renderroom