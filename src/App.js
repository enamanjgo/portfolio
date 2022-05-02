import logo from './logo.svg';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Art from './components/art/Art';
import './app.scss';
import Landingpage from './components/landingpage/Landingpage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Landingpage />
        <Projects />
        <About />
        <Art />
      </div>
    </div>
  );
}

export default App;
