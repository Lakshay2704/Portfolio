import './App.css';
import Header from "./components/Header" 
import Landing from "./components/Landing" 
import Footer from "./components/Footer" 

function App() {
  return (
    <div className="App">
      <div className="Main">
      <Header />
      <Landing />
      <Footer/>
      </div>
    </div>
  );
}

export default App;
