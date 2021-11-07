export default function index() {
  const year = new Date().getFullYear();
  return (
    <div>
      <p>@ {year} · All rights reserved.</p>
    </div>
  );
}
