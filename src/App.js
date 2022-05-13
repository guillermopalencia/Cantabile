import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const CLIENT_ID = '183f5935087c4ce685d71e8467ce5711'
  const REDIRECT_URI = 'http://localhost:3000'
  const AUTH_BASE_URL = 'https://accounts.spotify.com/authorize?'
  const RESPONSE_TYPE = 'token'

  const [token, setToken] = useState('')

  const urlSearch = new URLSearchParams(window.location.hash.replace('#', '?'))

  useEffect(() => {
    setToken(urlSearch.get('access_token'))
    window.localStorage.setItem('token', token)
    console.log(token)
  })

  const logout = () => {
    setToken('')
    window.localStorage.removeItem('token')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cantabile</h1>
        {!token ? (
          <a
            href={`${AUTH_BASE_URL}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login Via Spotify
          </a>
        ) : (
          <button onClick={logout}>logout</button>
        )}
      </header>
    </div>
  )
}

export default App