import './hero.css';

export default function Hero() {
  return (
    <section id='discover' className='hero-section'>
      <div className='hero-content'>
        <h1>Find your next place to travel</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <div className='hero-search'>
          <label htmlFor='search'>Search</label>
          <input
            type='text'
            id='search'
            name='search'
            placeholder='Burj khalifa, Dub'
          />
          <button>Search</button>
        </div>
      </div>
      <picture className='hero-picture'>
        <img src='./assets/figures/car.svg' alt='Car' className='hero-img' />
      </picture>
    </section>
  );
}
