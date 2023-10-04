import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import Navigationbar from "./components/Navigationbar";
import { Lawyers } from "./routes/Lawyers";
import { ProfilePage } from "./routes/ProfilePage";
import Search from "./routes/Search";
import BookNow from "./components/BookNow";

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lawyers">
          <Route index element={<Lawyers />} />
          <Route path=":_id" element={<ProfilePage />} />
        </Route>
        <Route path="search">
          <Route index element={<Search />} />
          <Route path="book" element={<BookNow />} />
        </Route>
        <Route path="templates" />
      </Routes>
    </>
  );
}

export default App;
