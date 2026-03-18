import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";  
// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";

function App() {
  
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link> 
      <Header />
      <Food />
      <Footer />
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </BrowserRouter>  
  );
}

export default App;