import { Routes, Route, useLocation } from "react-router-dom";
import classes from "./App.module.css";
import { Home, Login, Signup, DetailedPost, Bookmark, UserPost , Profile } from "./pages";
import { RequiresAuth, Sidebar } from "./components";
function App() {
  const location = useLocation();
  return (
    <div className={location.pathname!=="/login" && location.pathname !== "/signup" ? classes["container"]:""}>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <Sidebar />
      ) : null}
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
              <UserPost />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile/>
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
