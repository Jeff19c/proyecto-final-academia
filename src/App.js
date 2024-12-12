import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import { Blog, Gatos, Inicio, Peces, Productos, Tortugas, Login, Registro } from './components/pages';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"element={<Inicio />} />  
        <Route path="/blog"element={<Blog />} />
        <Route path="/gatos"element={<Gatos />} />
        <Route path="/peces"element={<Peces />} />
        <Route path="/productos"element={<Productos />} />
        <Route path="/tortugas"element={<Tortugas />} />
        <Route path="/login"element={<Login />} />
        <Route path="/registro"element={<Registro />} />
      </Routes>
      <div>
        <Footer/>
     </div>
    </div>

  );
}

export default App;
