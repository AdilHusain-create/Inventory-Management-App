import NavBar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}
export default App;
