import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookPage from "./components/BookPage/BookPage";
import CheckBooking from "./components/CheckBooking/CheckBooking";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");
  const [time, setTime] = useState("");
  const [storage, setStorage] = useState([]);
  console.log(storage);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route
            path="/book"
            element={
              <BookPage
                name={name}
                setName={setName}
                age={age}
                setAge={setAge}
                disease={disease}
                setDisease={setDisease}
                time={time}
                setTime={setTime}
                storage={storage}
                setStorage={setStorage}
              />
            }
          />
          <Route
            path="/check"
            element={
              <CheckBooking
                storage={storage}
                setStorage={setStorage}
                name={name}
                setName={setName}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
