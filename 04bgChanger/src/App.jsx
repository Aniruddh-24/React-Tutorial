import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('lightpink')
  const [prevcolor, setPrevColor] = useState('lightpink')


    function changeColor(color, prevcolor) {
      setColor(color)
      setPrevColor(prevcolor)
    }
  

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
<div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl " style={{backgroundColor: prevcolor}}>

    <button
    onClick={() => changeColor('lightblue', 'red')}
    
    className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
    style={{backgroundColor: 'lightblue'}}
    >Blue</button>

    <button onClick={() => changeColor('lightgreen', 'lightblue')}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: 'lightgreen'}}
      >Green</button>

<button onClick={() => changeColor('yellow', 'lightgreen')}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg '
        style={{backgroundColor: 'yellow'}}
      >Yellow</button>   

<button onClick={() => changeColor('orange', 'yellow')}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: 'orange'}}
      >Orange</button>   

<button onClick={() => changeColor('red', 'yellow')}
       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
        style={{backgroundColor: 'red'}}
      >Red</button>    

  </div>

    </div>
    
</div>
  )
}

export default App
