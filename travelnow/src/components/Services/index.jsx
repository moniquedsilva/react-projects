import './services.css';

export default function Services() {
  return (
    <section className='services-section'>
      <img
        src='./assets/figures/camping-family.svg'
        alt='Family Camping'
        className='services-img'
      />
      <div className='services-content'>
        <h2 className='services-title'>Our Quality Services</h2>
        <div>
          <img src='./assets/icons/ticket.png' alt='Tickets' />
          <article>
            <h3 className='services-subtitle'>Ticket </h3>
            <p className='services-paragraph'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500.
            </p>
          </article>
        </div>
        <div>
          <img src='./assets/icons/car.png' alt='car' />
          <article>
            <h3 className='services-subtitle'>Driver</h3>
            <p className='services-paragraph'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500.
            </p>
          </article>
        </div>
        <div>
          <img src='./assets/icons/plane.png' alt='Plane' />
          <article>
            <h3 className='services-subtitle'>Tour</h3>
            <p className='services-paragraph'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
