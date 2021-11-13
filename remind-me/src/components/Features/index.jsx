import { data } from './data';

export default function Features() {
  return (
    <section
      id='features'
      className='w-content-scale 2xl:w-content-area flex flex-col justify-center items-center md:flex-row gap-distance py-distance text-primary md:my-margin'
    >
      {data.map((element) => {
        return (
          <div
            key={element.id}
            className='space-y-inside flex flex-col items-center md:items-start'
          >
            <img src={element.img} alt={element.alt} className='md:mb-5' />
            <h2 className='text-2xl font-bold'>{element.title}</h2>
            <p className='text-lg text-primary-3'>{element.paragraph}</p>
          </div>
        );
      })}
    </section>
  );
}
