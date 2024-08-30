import { Routes, Route } from "react-router-dom";
import Pages from "./component/Pages";
import Home from "./component/Home";
 import "./App.css"
 import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContextProvider } from "./component/Content/usercontext";

const App=() =>
  {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;