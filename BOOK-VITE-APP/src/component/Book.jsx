import React from 'react'
import './Book.css';
const Book = ({b}) => {
  return (
    <div className="card">
      <img src={b.image} alt="book image" width={200} height={200} />
      <h3>Title: {b.title}</h3>
      <h4>Price: {b.price}/-</h4>
      <br/>
      <button>Add to cart</button>
    </div>
  )
}

export default Book
