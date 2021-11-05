import './destination.css';

export default function Destination() {
  return (
    <section className='destination-section'>
      <picture className='destination-img'>
        <img src='./assets/figures/travel.svg' alt='Travel couple' />
      </picture>
      <div className='destination-content'>
        <h2>Travel to any corner of the World</h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <button className='destination-btn'>Explore Destination</button>
      </div>
    </section>
  );
}
