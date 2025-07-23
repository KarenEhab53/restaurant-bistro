import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainNavbar from "./components/Main nav/MainNavbar";
import NavBar from './components/navbar/Navbar'
import Home from "./pages/homepage/Home";
import Footer from "./components/footer/footer";
import About from "./pages/aboutpage/About";
import Menu from "./pages/menupage/Menu";
import Book from "./pages/bookpage/Book";
import Blogs from "./pages/blogpage/Blogs";
import SingleBlog from "./pages/blogpage/Single blog/SingleBlog";
import Contact from "./pages/contactpage/Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book" element={<Book />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
