import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { infojabones } from './provider/const'


function App() {
  const [count, setCount] = useState(0)

  
  
  return (
    <>
    <section className='flex flex-wrap'>
    {
      infojabones.map((jabon , index ) =>(
        <ProductCards key={index} jabon={jabon} />
      ))
    }
    </section>
    
    </>
  )
}

export default App

function ProductCards({jabon}){
  return(
    <section className="relative w-[350px] h-[300px] rounded-xl overflow-hidden bg-red-100 m-6" >
    <div className='absolute z-10 bg-black/20 w-full h-full '></div>
    <img className='z-0 absolute w-full h-full' src={jabon?.img} alt="dsd" />
    <div className='relative z-10 grid pl-4  grid-rows-2 '>
      <p>.</p>
      <div className='relative text-white'>
        
    <h2 className=' font-bold text-[42px] mb-2'>{jabon?.nombre}</h2>
    <p className=' font-light'>{jabon?.descripcion}</p>
    <div className='bg-red-400 w-auto h-auto p-2 rounded-xl absolute right-4 bottom-32'>
    <p  className='  text-[20px]'>${jabon?.precio}</p>
      </div> 
    </div>
    </div>
  </section>

  )
}
