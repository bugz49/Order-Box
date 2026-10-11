import {motion} from 'framer-motion'
import './Container.css'



const Container = ({onClick, control1, control2, control3, user,}) => {
  return (
    <div>

        <p className='mt-5' style={{
  fontSize: '2rem',
  fontWeight: 400,
  color: '#eceff3', 
  letterSpacing: '-0.01em',
  lineHeight: '1.5',
  textAlign: 'center',
  
}}>{user}</p>
        <div className='container d-flex flex-column justify-content-center align-items-center mt-5' >
            <motion.p  className='cart' animate={control1} style={{fontSize: '30px'}}>🛒</motion.p>

            <motion.button style={{fontSize: 'larger', width: '7rem', height: '4rem', 
                                   borderRadius: 10, background: 'blue', 
                                   color: 'white', border: '2px white',
                                   transformOrigin: 'top right',
                                   }}
                                   animate={control2}
                                   
                                   onClick={onClick}
                                   >Order</motion.button>

            <motion.div animate={control3} className='box mb-3 d-flex justify-content-center align-items-center' style={{ gap: '5rem', width:'9rem', }} >
                <svg width="120" height="100" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="0" width="80" height="200" fill="#e3c285" fillOpacity="0.85" />
    <path d="M 20 45 Q 60 55 100 48" stroke="#c49a53" strokeWidth="1.5" fill="none" opacity="0.6"  animate={control3} />
  </svg>

            </motion.div>

          
        </div>
      
    </div>
  )
}

export default Container
