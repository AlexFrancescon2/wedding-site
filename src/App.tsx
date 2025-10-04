import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Header";
// import About from "./pages/About";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import { Home } from "./pages/Home";

// import Plans from "./pages/Plans";
// import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/plans" element={<Plans />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
