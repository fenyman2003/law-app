import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import Navigationbar from "./components/Navigationbar";
import { Lawyers } from "./routes/Lawyers";
import axios from "axios";
import { ProfilePage } from "./routes/ProfilePage";
import Search from "./routes/Search";

const url = "http://localhost:5000";
const client = axios.create({
  baseURL: url,
});
async function getSearchResults() {
  const response = await client.get("/search?minPrice=500&maxPrice=700");
  console.log(response.data);
}

getSearchResults();

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
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
