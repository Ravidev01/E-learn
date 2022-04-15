import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SignIn from './component/SignIn/SignIn';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="login" element={<SignIn/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
