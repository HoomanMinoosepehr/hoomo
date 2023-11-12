import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SignIn } from "./components/SignIn";
import { useEffect, useState } from "react";
import { Alert } from "./components/Alert";
import { SignUp } from "./components/SignUp";

function App() {
  const [user, setUser] = useState([])
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <div className="w-screen h-screen bg-black">
      <Navbar setAlert={setAlert} user={user} setUser={setUser}/>
      { alert == null ? (
        null
      ) : (
        <Alert setAlert={setAlert} alert={alert}/>
      )}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn setAlert={setAlert} setUser={setUser}/>}/>
        <Route path="/sign-up" element={<SignUp setAlert={setAlert}/>} />
      </Routes>
    </div>
  );
}

export default App;
