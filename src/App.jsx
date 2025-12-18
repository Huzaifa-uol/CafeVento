import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import Home from "./components/pages/home";
import Menu from "./components/pages/menu";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import ItemList from "./components/pages/ItemList";
import CreateItem from "./components/pages/CreateItem";
import ViewItem from "./components/pages/ViewItem";
import EditItem from "./components/pages/EditItem";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/create" element={<CreateItem />} />
            <Route path="/item/:id" element={<ViewItem />} />
            <Route path="/edit/:id" element={<EditItem />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
