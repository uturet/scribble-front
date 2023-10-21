import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Feed from './Feed/Feed'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Post from './Post/Post';
import Profile from './Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/post/:id" element={<Post/>} />
        <Route path="/user/:id" element={<Profile/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
