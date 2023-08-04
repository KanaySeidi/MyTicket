import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Weather from "./pages/Main/Weather/Weather";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/task1"
          element={
            <iframe
              src="/task1.html"
              title="Native JavaScript and DOM"
              style={{ width: "100vw", height: "100vh" }}
            />
          }
        />
        <Route
          path="/task2"
          element={
            <iframe
              src="/task2.html"
              title="AJAX and API"
              style={{ width: "100vw", height: "100vh" }}
            />
          }
        />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
