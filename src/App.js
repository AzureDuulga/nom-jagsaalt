import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/Booklist";
import BookDetail from "./pages/BookDetail";
import { books } from "./data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookList" element={<BookList books={books} />} />
        <Route path="/Books/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
