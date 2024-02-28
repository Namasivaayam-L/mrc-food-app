import Navbar from "./components/navbar/navbar";
import Routing from './Routing';
import { BrowserRouter as Router } from 'react-router-dom' 
import './index.css'
function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routing />
      </Router >
    </div>
  );
}

export default App;
