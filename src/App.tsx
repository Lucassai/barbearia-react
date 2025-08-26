import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Servicos from './pages/Servicos'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/servicos" element={<Servicos />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
