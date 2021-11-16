import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Advantage from '../components/Advantage';
import Download from '../components/Download';

export default function Home() {
  return (
    <div className='flex flex-col items-center w-screen 2xl:w-container'>
      <Header />
      <Hero />
      <Features />
      <Advantage />
      <Download />
    </div>
  );
}
