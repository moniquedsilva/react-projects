import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firsBook = {
  img:"https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth"
}

const secondBook = {
  img:"https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg",
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear"
}


function BookList(){
  return (
    <section className="conteiner">
      <Book img={firsBook.img} title={firsBook.title} author={firsBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  )
}

const Book = (props) => {
  const {img, title, author} = props
  return (
  <article className="book-content">
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
)}

ReactDom.render(<BookList />, document.getElementById('root'))