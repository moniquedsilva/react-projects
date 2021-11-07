import './destination.css';
import { data } from './data';

export default function Destination() {
  return (
    <section id='destination' className='destination-section'>
      <picture className='destination-img'>
        <img src='./assets/figures/travel.svg' alt='Travel couple' />
      </picture>
      <div className='destination-content'>
        <h2>Travel to any corner of the World</h2>
        <p className='destination-paragraph'>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type.
        </p>
        <div className='destination-info'>
          {data.map((item) => {
            return (
              <div key={item.id} className='info-cards'>
                <span className='info-span'>{item.value}</span>
                <p className='info-paragraph'>{item.title}</p>
              </div>
            );
          })}
        </div>
        <button className='destination-btn'>Explore Destination</button>
      </div>
    </section>
  );
}
