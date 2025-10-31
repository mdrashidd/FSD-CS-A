import React from 'react'
import Book from './component/Book'
import './App.css';

const App = () => {
  const data= [
    {imgane:"https://tse2.mm.bing.net/th/id/OIP.bGXsOJCrvGsfRwVDj2yIoQHaJU?pid=Api&P=0&h=180", title:"Chemestry", price:"₹300"},
     {imgane:"https://cdn.fcglcdn.com/brainbees/images/products/zoom/20271040a.webp", title:"Physics", price:"₹300"},
      {imgane:"https://cdn.fcglcdn.com/brainbees/images/products/zoom/20271040a.webp", title:"Physics", price:"₹300"}
  ]
  return (
    <div className='app'>
      {
      data.map((b,i)=>(
        <Book index={i} b={b}></Book>
      )
      )
    }
    </div>
  )
}

export default App
