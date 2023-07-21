import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Message } from './Message';
import { ListGroup } from './components/ListGroup';
import { Alert } from './components/Alert';

function App() {

  const items = ["Dog", "Cat", "Pig", "Cow"]
  return (
    <>
      <ListGroup data={items} title={"Type of Animals"} />
    </>
  )
}

export default App
