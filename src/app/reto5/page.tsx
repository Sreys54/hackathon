import Navbar from '../components/Navbar';

export default function Reto5() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Reto 5</h1>
      
      <div className="w-full max-w-4xl">
        <div style={{ transform: 'scaleX(-1)' }}>
          <Navbar />
        </div>
      </div>
    </main>
  );
}
