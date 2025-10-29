import "./App.css";
function Book(){
    return(
        <div className="book">
            <img src="https://tse4.mm.bing.net/th/id/OIP.1VRS-T_VtlzTSMg05nLaeAHaJQ?pid=Api&P=0&h=180" width="200" height="300" alt="Book Cover"/>
            <h3>Title: Physics</h3>
            <h4>Price: Rs200</h4>
            <button>Add to Cart</button>
        </div>
    );
}
export default Book