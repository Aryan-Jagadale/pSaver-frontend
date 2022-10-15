import { useState } from "react";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import "./App.css";
import Home from "./pages/Home/Home";
import DetailView from "./pages/DetailView/DetailView";
import CreatePass from "./components/Create/CreatePass";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      
      <Outlet />
    </>
    
  ) : (
    <Navigate replace to="/login" />
  );
};

function App() {
  
  const [isAuthenticated, isUserAuthenticated] = useState(true);


  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <Routes>

      <Route
      path="/login"
      element={<Login isUserAuthenticated={isUserAuthenticated} />}
    />

    <Route
      path="/"
      element={<PrivateRoute isAuthenticated={isAuthenticated} />}
    >
      <Route path="/" element={<Home />} />
    </Route>

    <Route
      path="/create"
      element={<PrivateRoute isAuthenticated={isAuthenticated} />}
    >
      <Route path="/create" element={<CreatePass />} />
    </Route>

    <Route
      path="/details/:id"
      element={<PrivateRoute isAuthenticated={isAuthenticated} />}
    >
      <Route path="/details/:id" element={<DetailView />} />
    </Route>
      
      
      </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
