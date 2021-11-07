import './copyright.css';

export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className='copyright'>
      <p>@ {year} · All rights reserved.</p>
    </div>
  );
}
