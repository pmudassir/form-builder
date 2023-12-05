import FormBuilder from "./pages/FormBuilder";
import Renderer from "./pages/Renderer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormBuilder />} />
        <Route path="/renderer" element={<Renderer />} />
      </Routes>
    </Router>
  );
}

export default App;