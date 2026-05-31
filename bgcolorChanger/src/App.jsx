import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3x1">
          <button onClick = {() => {setColor("red")}} style={{backgroundColor: "red"}}>Red</button>
          <button onClick = {() => {setColor("green")}} style={{backgroundColor: "green"}}>Green</button>
          <button onClick = {() => {setColor("blue")}} style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick = {() => {setColor("orange")}} style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick = {() => {setColor("violet")}} style={{backgroundColor: "violet"}}>Violet</button>
          <button onClick = {() => {setColor("black")}} style={{backgroundColor: "black"}}>Black</button>
          <button onClick = {() => {setColor("white")}} style={{backgroundColor: "white"}}>White</button>
          <button onClick = {() => {setColor("magenta")}} style={{backgroundColor: "magenta"}}>Magenta</button>
          <button onClick = {() => {setColor("grey")}} style={{backgroundColor: "grey"}}>Grey</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
