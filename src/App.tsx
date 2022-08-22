import { useEffect } from "react";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
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
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
