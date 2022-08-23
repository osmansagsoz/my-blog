import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Body } from "./components/body";
import { Details } from "./components/details";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { WriterOfTheMonth } from "./components/wotm";
import { fetchPosts, fetchComments } from "./features/postsSlice";
import { useAppDispatch } from "./hooks/hooks";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/wotm" element={<WriterOfTheMonth />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Body />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
