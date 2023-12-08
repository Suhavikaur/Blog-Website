import logo from './logo.svg';
import './App.css';
import Post1 from './components/Post1/Post1';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Post2 from './components/Post2/Post2';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/post" element={<Post1/>}></Route>
          <Route path='/post2' element={<Post2 />}></Route>
        </Routes>
       </Router>
      
    </div>
  );
}

export default App;
