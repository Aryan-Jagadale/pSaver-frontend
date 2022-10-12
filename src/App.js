import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      
      <Header/>
      <Login/>
  </div>
    
    
  );
}

export default App;
