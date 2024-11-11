
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Fooldal from './Pages/Fooldal';
import Filmek from './Pages/Filmek';
import Unnep from './Pages/Unnep';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fooldal />} />
        <Route path="/filmek" element={<Filmek />} />
        <Route path="/unnep" element={<Unnep />} />
      </Routes>
    </Router>
  );
}


export default App;

