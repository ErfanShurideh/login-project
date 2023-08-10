import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {Route , Routes ,Navigate } from "react-router-dom"

function App() {
  return (
    <div >
     <Routes>
      <Route path="/Login" Component={Login}/>
      <Route path="/SignUp" Component={SignUp}/>
      <Route path="/" element={<Navigate replace to="/SignUp" />} />
     </Routes>
    </div>
  );
}

export default App;
