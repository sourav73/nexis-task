import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Attendence from "./Pages/Attendence/Attendence";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  const [successMsg, setSuccessMsg] = useState("");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login successMsg={successMsg} />} />
        <Route
          path="/signup"
          element={<Signup setSuccessMsg={setSuccessMsg} />}
        />
        <Route path="/attendence" element={<Attendence />} />
      </Routes>
    </>
  );
}

export default App;
