import {motion, useAnimation} from 'framer-motion' 
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from './Components/Container.jsx'

const App = () => {

  const control1 = useAnimation()
  const control2 = useAnimation();
  const control3 = useAnimation()
  const [status, setStatus] = useState('Press the button to complete your order');

 const handleClick = async () => {
    setStatus('Ordering...');
    await Promise.all([
      control1.start({ y: [-30 ,250], transition: { duration: 0.8 }, x: [ -10]}),
      control2.start({ x: [0, -5, 0, -3, 5, -5, 30, 0], rotate: -50, y: 150, opacity: 0, 
                      transition: { duration: 0.4, delay: 0.3 } }),
      control3.start({ 
        x: [0, -10, 10, -5, 10, -5, 5, 0], 
        y: [0, -2, 2, -2, 2, 0],              
        transition: { duration: 0.6, delay: 0.7 }         
      })
    ]);
    setStatus('Order Complete, reload to order again. ' );
   
  };

  return (
    <div>
      <Container onClick={handleClick} control1={control1}
      control2={control2}
      control3={control3} 
      user={status}/>
    </div>
  )
}

export default App
