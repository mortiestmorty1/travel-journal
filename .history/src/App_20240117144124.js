import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Data from "./components/data.js";
import Content from "./components/content.js";

function App() {
  const  Memories = Data.map((item) => {
    return<Content 
          key={item.id}
          item={item}
    />
  })
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
