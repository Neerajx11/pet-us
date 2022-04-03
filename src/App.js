import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import DoggoDetail from "./components/DoggoDetail";
import Explore from "./components/Explore";
import Home from "./components/Home";
import MyDoggo from "./components/MyDoggo";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Private from "./components/Private";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/explore" element={<Private component={Explore} />} />
          <Route path="/mydoggo" element={<Private component={MyDoggo} />} />
          <Route path="/doggo/:id" element={<DoggoDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
