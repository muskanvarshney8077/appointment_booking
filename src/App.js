import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./components/BookPage/BookPage";
import CheckBooking from "./components/CheckBooking/CheckBooking";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/check" element={<CheckBooking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
