import '../styles/index.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Cards from '../components/Cards';
import Services from '../components/Services';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='main-container'>
      <Header />
      <Hero />
      <Destination />
      <Cards />
      <Services />
      <Footer />
    </div>
  );
}
