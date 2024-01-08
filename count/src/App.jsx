import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const handleInputChange = (e) => {
    setText(e.target.value);
  }
  const addOneHandler = () => {
    setCount(count + 1);
  }
  const subOneHandler = () => {
    setCount(count - 1);
  }

  return (
    <>

      <h1>Awesome Counter</h1>
      <p>{count}</p>
      <button onClick={addOneHandler}>Add One</button>
      <button onClick={subOneHandler}>Sub One</button>

      <form>
        <input type='text' placeholder='ingrese el texto...'
          onChange={handleInputChange} />
      </form>
      <p>Estado del input</p>
      <p>{text}</p>
    </>
  )
}

export default App
