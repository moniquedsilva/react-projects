import React, { useState } from 'react';
import { ipsum } from './data/ipsum';

function Generator() {
  const [number, setNumber] = useState(0);
  const [paragraph, setParagraph] = useState([]);
  const [word, setWord] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number && word <= 100) {
      text();
    }
  };

  const text = () => {
    let lorem = ipsum.split(' ');
    let valueNum = 0;
    let valueWord = 0;
    let words = [];
    let newParagraph = [];
    let amount = number;
    if (amount >= 10) amount = 10;
    if (amount <= 0) amount = 0;
    for (valueNum = 0; valueNum < amount; ++valueNum) {
      for (valueWord = 0; valueWord < word; ++valueWord) {
        words.unshift(lorem[Math.floor(Math.random() * lorem.length - 1)]);
      }
      newParagraph[valueNum] = [words.join(' ')];
      words = [];
    }
    setParagraph(newParagraph);
  };

  const clean = () => {
    setParagraph([]);
    setNumber(0);
    setWord(0);
  };

  return (
    <>
      <div className='header-space' role='figure'></div>
      <main className='main-box'>
        <section className='section-box'>
          <h2>Lorem Ipsum</h2>
          <form className='selection-form' onSubmit={handleSubmit}>
            <p className='text'>
              Choose the number of paragraphs and words you want to generate:
            </p>
            <span className='warning' role='alert'>
              Paragraphs: minimum: 1 / maximum: 10
            </span>
            <span className='warning' role='alert' id='words-warning'>
              Words: minimum: 1 / maximum: 100
            </span>
            <label htmlFor='value'>Paragraphs:</label>
            <input
              type='number'
              name='value'
              id='value'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor='amount'>Words:</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button className='btn'>Generate</button>
          </form>
          <div className='paragraph'>
            {paragraph.map((content, index) => {
              return <p key={index}>{content}</p>;
            })}
          </div>
          <button className='btn' onClick={clean}>
            Clear
          </button>
        </section>
      </main>
    </>
  );
}

export default Generator;
