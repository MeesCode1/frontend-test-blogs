import Home from './Home';
import Navbar from './Navbar';

function App() {

  const link = 'http://www.google.com/maps';
  return (
    <div className="App">
      <Navbar/>
      <div className='Content'>
      <Home />
        <a href={link}>Google maps/ route</a>
      </div>
    </div>
  );
}

export default App;
