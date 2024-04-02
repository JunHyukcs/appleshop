import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.scss';
import {Routes, Route} from 'react-router-dom';
/* import Main from "./pages/Main"; */
import Store from "./pages/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
