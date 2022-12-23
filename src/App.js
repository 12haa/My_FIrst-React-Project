import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favoriters from "./pages/Favoriters";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout >
      <Routes>
        <Route path="/" exact={true} element={<AllMeetups />} />

        <Route path="/lol" element={<NewMeetup />} />

        <Route path="/favoriters" element={<Favoriters />} />
      </Routes>
    </Layout>
  );
}

export default App;
