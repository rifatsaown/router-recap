import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    <Toaster></Toaster>
    </div>
  );
}

export default App;
