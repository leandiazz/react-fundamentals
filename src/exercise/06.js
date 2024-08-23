// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {

  const [userName, setUserName] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitUsername(userName)
  }

  const onInputChange = (event) => {
    setUserName(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: 240, display: "flex", flexDirection: "column", gap: "1rem", paddingBottom: "1rem" }}>
        <label htmlFor='userName'>Username:</label>
        <input value={userName} onChange={onInputChange} id='userName' type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
