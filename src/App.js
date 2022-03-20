import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import DrinkDetails from "./Pages/DrinkDetails/DrinkDetails";
import Drinks from "./Pages/Drinks/Drinks";
import Errors from "./Pages/Errors/Errors";
import Home from "./Pages/Home/Home";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Navbar setText={setText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks text={text} />} />
        <Route path="/drinks/:id_drink" element={<DrinkDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/*" element={<Errors />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
