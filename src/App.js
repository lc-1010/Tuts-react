
import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Crate from './Crate';
import BlogDetail from './BlogDetil';
import NotFound from './NotFound';

function App() {


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
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* <Routes>
            <Route path="/crate" element={<Crate />} />
          </Routes> */}
          {/* <p>Liked{likes} times</p>
         <p>{Math.random() * 10}</p> */}



        </div>
      </div>
    </Router >

  );
}



export default App;
