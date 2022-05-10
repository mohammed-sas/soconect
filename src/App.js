import { Routes, Route, useLocation } from "react-router-dom";
import classes from "./App.module.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
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
      <ToastContainer
				theme="colored"
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
        style={{fontSize:"1.4rem"}}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
    </div>
  );
}

export default App;
