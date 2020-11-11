import React,{useState} from 'react'
import axios from 'axios'
import Room from './room'

function Myroom(){

    function createroom(room){

        return <Room 
        
        number={room.num}
        key={room.id}
        name={room.name}
        type={room.type}
        description={room.details}
        floor={room.floor}
        price={room.price}
        url={room.url}
        capacity={room.capacity}
        />
        
        }

const [roomstate,setstate]=useState({
    rooms:[]
})

axios.get('http://127.0.0.1:5000/room',{'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
    setstate({rooms:res.data})
    console.log('successs')
})
.catch((e)=>{
    console.log(e)
})

return <div>

{roomstate.rooms.map(createroom)}


</div>



}

export default Myroom