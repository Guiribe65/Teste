import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "../../Views/Main";
import ComboBox from "../../Views/teste";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ComboBox" element={<ComboBox />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
