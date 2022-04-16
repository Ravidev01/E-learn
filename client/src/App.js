import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUP/SignUp';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="signin" element={<SignIn/>}/>
          <Route path="signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
