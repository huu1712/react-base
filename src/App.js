import logo from './logo.svg';
import './App.css';
import Loading from "./components/Loading";
import Header from "./components/Header";
import Todo from "./features/Todo";
import Album from "./features/Album";
import Color from "./components/Color";
import Count from "./components/Count";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/albums" element={<Album />} />
                <Route path="/count" element={<Count />} />
            </Routes>
        </div>
    );
}

export default App;
