import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import {list} from './bookList'
import Book from './components/Book'

function BookList(){
  return (
    <div>
      <header className="title">
        <h1>📚 Book List 📚</h1>
      </header>
    <section className="conteiner">
      {list.map((book) => {
        return <Book key={list.id} {...book} />
      })}
    </section>
    </div>
  )
} 

ReactDom.render(<BookList />, document.getElementById('root'))