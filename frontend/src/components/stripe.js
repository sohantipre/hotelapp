import StripeCheckout from 'react-stripe-checkout';
import React,{useState} from 'react'
import axios from 'axios'

import { Button } from '@material-ui/core';

const StripeButton = (props) => {
    const [product , setProduct] = useState({
        
        price: props.price,
        name:props.name
       
    })

    const makePayment = token => {
        const body = {
            token,
            product
        };

        return axios.post("http://127.0.0.1:5000/payment" , body , {'headers' : {'Authorization' : 'Bearer' + localStorage.getItem()}})
                    .then((response) => console.log(response))
                    .catch( err => console.log(err))
    }

    return (
        
            <StripeCheckout 
                stripeKey="pk_live_51HmBQwB8R8hmbYXgynredE51BGe4z0HNCXr0IG4wWWALvrRQDJJsV757BDLFn6SdwbrlcSx1IOpr1k1YxA1Yt3YO00Tn6sRjj6"
                amount={props.price * 100}
                name={`BUY ${props.name}`}
                
                token={makePayment}

            >
                <Button>Buy this Room in just ${props.price} </Button>
            </StripeCheckout>
        
    )
}

export default StripeButton