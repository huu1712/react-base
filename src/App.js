import logo from './logo.svg';
import './App.css';
import Loading from "./components/Loading";
import Header from "./components/Header";
import Todo from "./features/Todo";
import Album from "./features/Album";

function App() {


    return (
        <div className="App">
            <Header></Header>
            <Todo></Todo>
            <Album></Album>
        </div>
    );
}

export default App;
