import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Login, Signup, DetailedPost, Bookmark, UserPost } from "./pages";
import { RequiresAuth } from "./components";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/posts/:postId"
          element={
            <RequiresAuth>
              <DetailedPost />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequiresAuth>
              <Bookmark />
            </RequiresAuth>
          }
        />
        <Route
          path="/posts/user/:userId"
          element={
            <RequiresAuth>
              <UserPost/>
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
