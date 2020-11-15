import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
 
const images = [
 'https://tse2.mm.bing.net/th?id=OIP.IQtaRa3Z10N5D3jP0PhJ0wHaE8&pid=Api&P=0&w=229&h=154',
 'https://tse2.mm.bing.net/th?id=OIP.6Vb8jvtGuEJGCStvplvLXgHaD7&pid=Api&P=0&w=306&h=163',
 'https://tse3.mm.bing.net/th?id=OIP.gK6mmCGJBf3a2NXdhRusVAHaFj&pid=Api&P=0&w=235&h=177'
];
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow