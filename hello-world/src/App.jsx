import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Messenger from '../components/Mensseger'

function App() {
  const [count, setCount] = useState(0)
  const colors = [{ id: 1, name: "orange" }, { id: 2, name: "blue " }, { id: 3, name: "red " }, { id: 4, name: "pink " }, { id: 5, name: "purple" },]
  return (
    <>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit ipsam libero quis necessitatibus cupiditate ex nesciunt consequuntur at quia, numquam cumque voluptate dicta, placeat explicabo inventore soluta? Quis, nam.</p>
      <ol>{colors.map(c => <li key={c.id}>{c.name}</li>)}
      </ol>
      <Messenger msg={"Tenes que terminar de entender react, asi podes empezar con el trabajo yam."}/>
    </>
  )
}

export default App
