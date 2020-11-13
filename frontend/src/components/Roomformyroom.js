import React,{useState} from 'react'
import axios from 'axios'


function MyRoom(props){

const ID=props.id
function deletecart(){
axios.delete(`http://127.0.0.1:5000/room/${ID}`, {'headers':{'Authorization':"Bearer "+localStorage.getItem('token')}}).then((res)=>{
    // console.log('deleted')
    window.location.reload();
}).catch((e)=>{
    console.log(e)
})

console.log(props)
}


return <div className='room' >
<img className='image' src={props.url}></img>
<h3>description:{props.description}</h3>
<h3>room name:{props.name}</h3> 
<h3>room floor:{props.floor}</h3>
<h3>capacity:{props.capacity}</h3>
<h3>price:{props.price}</h3>
<button className='cartbutton' onClick={deletecart}>DELETE ROOM</button>
</div>



}
export default MyRoom