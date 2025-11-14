import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";

function App() {
  
  return (
    <>
      <div className="bg-base-200 transition-colors duration-300 min-h-screen" data-theme = "forest">
        <Navbar />

        <Routes>
          <Route path = "/" element = {<Homepage />} />
          <Route path = "/product/:id" element = {<ProductPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
