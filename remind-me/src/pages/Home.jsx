import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='w-screen 2xl:w-container flex justify-center'>
      <Header />
      <Hero />
    </div>
  );
}
