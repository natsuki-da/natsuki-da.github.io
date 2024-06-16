import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Paths } from "./types/enums";
const Home = lazy(() => import("./components/Home/Home"));
// const Course = lazy(() => import("./components/Course/Course"));
// const Gallery = lazy(() => import("./components/Gallery/Gallery"));
// const Contact = lazy(() => import("./components/Contact/Contact"));




function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Home />}/>
      </Routes>
    </Router>
  )
}

export default App