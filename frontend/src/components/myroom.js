



import axios from 'axios'
import MyRoom from './Roomformyroom'
import Room from './room'
import React,{useState} from 'react'
import { Button } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import rooms from './roominfo'

function createroom(room){

    return <MyRoom 
    id={room._id}
    number={room.number}
    key={room.id}
    name={room.name}
    type={room.type}
    description={room.details}
    floor={room.floor}
    price={room.price}
    url={room.url}
    capacity={room.max_capacity}
    />

    }

const Myroom = () => {
    const [roomstate,setstate]=useState({
        rooms:[],
        roomlength:''
    });
    const handleMyRoom = (e) => {
        axios.get('http://127.0.0.1:5000/room',{'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
            setstate({rooms:res.data,roomlength:rooms.length});
          
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const history=useHistory()
    return (
        <div>
            <Button className="handleRoom" onClick={handleMyRoom}>Click</Button>
            {roomstate.rooms.map(createroom)}
            {roomstate.rooms.length!== 0  && <p>Total amount of your expenses on room: {roomstate.rooms.map((room)=>room.price).reduce((sum,value)=>sum+value,0)}</p>}

            
                {/* expenses.map((expense)=>expense.amount).reduce((sum,value)=>sum+value,0) */}
        </div>
    )
}

export default Myroom




      
      
 