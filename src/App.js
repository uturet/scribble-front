import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Feed from './Feed/Feed'
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

function Page({title}) {
  let { data } = useParams();
  return <div>{title} {data}</div>
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
