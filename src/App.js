import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./components/About";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Private from "./components/Private";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Private component={Home} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/explore" element={<Private component={Explore} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
