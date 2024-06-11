import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from './emoji'
import { EmojiProvider } from './emojiProvider'
import BitcoinRates from './BitcoinRates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmojiProvider>
        <Emoji></Emoji>
        <BitcoinRates></BitcoinRates>
      </EmojiProvider>
    </>
  )
}

export default App
