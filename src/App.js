import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import SearchPage from './components/SearchPage'
import Login from './components/LoginPage'
import Home from './components/HomePage'
import NavBar from './components/NavBar'
import NewPlaylistPage from './components/NewPlaylistPage'
import PlaylistDetail from './components/PlaylistDetail'
import UpdatePlaylist from './components/UpdatePlaylist'

function App() {
  const [token, setToken] = useState([])

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [token])

  return (
    <div className="App">
      {token === 'null' ? null : <NavBar />}
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/newplaylist/:id" element={<NewPlaylistPage />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
          <Route path="/updateplaylist/:id" element={<UpdatePlaylist />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
