import "./App.css";
import Book from "./Book";

function App(){
    return(
        <div>
            <h1> <center>Book Store</center></h1>
        <div className="bookList">
            <Book></Book>
            <Book></Book>
            <Book></Book>
        </div>
        </div>
    );
}
export default App;