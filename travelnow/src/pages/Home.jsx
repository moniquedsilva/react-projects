import '../styles/index.css';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='main-container'>
      <Header />
      <Hero />
    </div>
  );
}
