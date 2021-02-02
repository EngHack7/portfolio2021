import './App.css';
import Nav from './components/Nav/Nav'
import Table from './components/InfoTab'
import SlideShow from './components/SlideShow'
import Works from './components/Works'
function App() {
  return (
    <div className="App">
     <Nav />
     <Table />
     <SlideShow />
     <Works />
    </div>
  );
}

export default App;
