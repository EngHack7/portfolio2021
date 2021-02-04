import './App.css';
import Nav from './components/Nav/Nav'
import Table from './components/InfoTab'
import SlideShow from './components/SlideShow'
import Works from './components/Works'
import Form from './components/Form';
function App() {
  return (
    <div className="App">
     <Nav />
     <Table />
     <SlideShow />
     <Works />
     <Form></Form>
    </div>
  );
}

export default App;
