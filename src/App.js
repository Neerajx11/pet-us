import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import AddDoggo from "./components/AddDoggo";
import MyDoggo from "./pages/MyDoggo";
import Navbar from "./components/Navbar";
import Private from "./components/Private";
import Doggo from "./pages/Doggo";
import Explore from "./pages/Explore";
import FOF from "./pages/FOF";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="max-w-[1700px] mx-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/mydoggo" element={<Private component={MyDoggo} />} />
          <Route path="/add" element={<Private component={AddDoggo} />} />
          <Route path="/doggo/:id" element={<Doggo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<FOF />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
