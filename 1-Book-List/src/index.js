import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function BookList(){
  return (
    <section className="conteiner">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
  <article className="book-content">
    <img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg" alt=""/>
    <h1>I Love You to the Moon and Back</h1>
    <h4>Amelia Hepworth</h4>
  </article>)
}

ReactDom.render(<BookList />, document.getElementById('root'))