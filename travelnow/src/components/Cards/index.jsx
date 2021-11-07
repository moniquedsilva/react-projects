import { data } from './data';
import './style.css';

export default function Cards() {
  return (
    <section className='cards-section'>
      <div className='cards-list'>
        {data.map((item) => {
          return (
            <div key={item.id} className='card'>
              <img src={item.image} alt={item.title} className='card-img' />
              <div className='card-content'>
                <h3 className='card-title'>{item.title}</h3>
                <img src={item.star} alt='Stars' />
                <p className='card-paragraph'>{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
