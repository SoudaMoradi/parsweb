import Sidebar from "./Sidebar";
import Content from "./Content";
import './App.css';




function App() {
  return (
      <div className="flex h-screen overflow-scroll">
          <Content/>
          <Sidebar/>
      </div>
  );
}

export default App;
