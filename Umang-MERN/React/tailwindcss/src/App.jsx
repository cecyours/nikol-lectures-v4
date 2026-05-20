import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Responsive Heading
      </h1>


      <button className="bg-blue-500 text-white px-4 py-2 rounded
hover:bg-blue-600">
        Click Me
      </button>




      <div className="flex gap-4  h-96  bg-red-100  justify-between  items-end">
        <div className="w-24 h-24 bg-red-400 "><h1>Hello</h1></div>
        <div className="w-24 h-24 bg-blue-400 ">Box 2</div>
        <div className="w-24 h-24 bg-green-400 ">Box 3</div>
        <div className="w-24 h-24 bg-yellow-400 ">Box 4</div>
        <div className="w-24 h-24 bg-orange-400 ">Box 5</div>
        <div className="w-24 h-24 bg-purple-400 ">Box 6</div>
      </div>




      <input type="text" className='focus:ring-5' />

      <div className="box rounded w-2/4 h-23 bg-red-400  ring-2 ">
        hello
      </div>

    </>
  )
}

export default App
