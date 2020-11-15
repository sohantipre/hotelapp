import React from 'react'
import rooms from './roominfo'
import Room from './room'

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
    

function Allrooms(){
return <div>
{rooms.map(createroom)}

</div>
    
}
export default Allrooms


