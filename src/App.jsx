import { useState } from 'react'
import './App.css'
import Search from './components/Search'

const App = () => {
  const [search, setSearch] = useState(" ")

  const handleChange = () => {
    const value = event.target.value
    setSearch(value)
  }

  return (
    <>
      <div className='container'>
        <h1>Emoji Search</h1>
        <Search search={search} setSearch={setSearch} handleChange={handleChange} />
      </div>
    </>
  )
}

export default App
