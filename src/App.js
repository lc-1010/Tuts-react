
import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Crate from './Crate';

function App() {

  const link = "www.google.com";
  // const title = 'welcome to the new blog';
  // const likes = 49;
  // const link = "www.google.com";
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <div className='content'>
  //       <Home />
  //       {/* <p>Liked{likes} times</p>
  //       <p>{Math.random() * 10}</p> */}
  //       <a href={link}> google</a>
  //     </div>
  //   </div>
  // );

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crate" element={<Crate />} />
          </Routes>
          {/* <Routes>
            <Route path="/crate" element={<Crate />} />
          </Routes> */}
          {/* <p>Liked{likes} times</p>
         <p>{Math.random() * 10}</p> */}
          <a href={link}> google</a>
        </div>
      </div>
    </Router >
  );
}



export default App;
