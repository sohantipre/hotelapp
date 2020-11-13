import React from 'react'
import rooms from './roominfo'
import axios from 'axios'
import {Button} from '@material-ui/core'
import Stripebutton from './stripe'
import StripeButton from './stripe'

function Detailpage(props){

function addtocart(){
const data={
    name:rooms[props.match.params.id-1].name,
    price:rooms[props.match.params.id-1].price,
    max_capacity:rooms[props.match.params.id-1].capacity,
    floor:rooms[props.match.params.id-1].floor,
    details:rooms[props.match.params.id-1].info,
    url:rooms[props.match.params.id-1].url,
    number:rooms[props.match.params.id-1].num,
    key:rooms[props.match.params.id-1].key,
    id:rooms[props.match.params.id-1].id
    
}
axios.post('http://127.0.0.1:5000/room',data,{'headers' : {'Authorization': "Bearer " + localStorage.getItem('token')}}).then((res)=>{
    console.log('room selected!!!!')
}).catch((e)=>{
    console.log(e)
})

}



return <div className='detail'>
    <img className='detailimg' src={rooms[props.match.params.id-1].url}></img>

    <h3>description:{rooms[props.match.params.id-1].description}</h3>
    <h3>capacity:{rooms[props.match.params.id-1].capacity}</h3>
    <h3>price:{rooms[props.match.params.id-1].price}</h3>
    <h3>name:{rooms[props.match.params.id-1].name}</h3>
    <h3>floor:{rooms[props.match.params.id-1].floor}</h3>
    <h2>DETAILS:{rooms[props.match.params.id-1].info}</h2>
    
    <button className='cartbutton'  onClick={addtocart} >ADD TO CART</button>
    {/* <button className='cartbutton' onClick={deletecart}>Delete from Cart</button>  */}

    <StripeButton price={rooms[props.match.params.id-1].price} name={rooms[props.match.params.id-1].name} description={rooms[props.match.params.id-1].description}></StripeButton>

</div>




}

export default Detailpage