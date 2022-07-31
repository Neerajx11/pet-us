import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import AddDoggo from "./components/AddDoggo";
import MyDoggo from "./components/MyDoggo";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Private from "./components/Private";
import SignIn from "./components/SignIn";
import Doggo from "./pages/Doggo";
import Explore from "./pages/Explore";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/mydoggo" element={<Private component={MyDoggo} />} />
          <Route path="/add" element={<Private component={AddDoggo} />} />
          <Route path="/doggo/:id" element={<Doggo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
