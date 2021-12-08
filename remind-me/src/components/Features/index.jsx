import { data } from './data';

export default function Features() {
  return (
    <section
      id='about-us'
      className='flex flex-col md:flex-row gap-distance-m items-center justify-center py-mobile-py lg:py-distance text-primary w-content-scale 2xl:w-content-area'
    >
      {data.map((element) => {
        return (
          <div
            key={element.id}
            className='flex flex-col items-center md:items-start space-y-inside'
          >
            <img src={element.img} alt={element.alt} className='md:mb-5' />
            <h2 className='font-bold text-2xl'>{element.title}</h2>
            <p className='text-lg text-primary-3'>{element.paragraph}</p>
          </div>
        );
      })}
    </section>
  );
}
