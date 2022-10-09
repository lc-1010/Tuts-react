
import Navbar from './Navbar';
import Home from './Home';
function App() {

  const title = 'welcome to the new blog';
  const likes = 49;
  const link = "www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        {/* <p>Liked{likes} times</p>
        <p>{Math.random() * 10}</p> */}
        <a href={link}> google</a>
      </div>
    </div>
  );
}

export default App;
