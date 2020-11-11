import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'




function Room(props){

const id=props.number
const history=useHistory()
function setclick(){

history.push(`/room/${id}`)

}


return <div className='room' onClick={setclick}>
<img className='image' src={props.url}></img>
<h3>description:{props.description}</h3>
<h3>room name:{props.name}</h3> 
<h3>room floor:{props.floor}</h3>
<h3>capacity:{props.capacity}</h3>
<h3>price:{props.price}</h3>

</div>



}
export default Room