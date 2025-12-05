import { BrowserRouter, Route, Routes } from "react-router-dom"

import { MyFuckingGlobalStyle } from "./style"

import Home from "./pages/Home"
import Auth from "./pages/Auth"

function App() {
  return (
    <BrowserRouter>
      <MyFuckingGlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
