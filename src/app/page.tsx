import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Equipo 1 - Hackathon</h1>
      <p className="text-xl mb-12">Selecciona un reto:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        <Link href="/reto1">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Reto 1
          </button>
        </Link>
        
        <Link href="/reto2">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Reto 2
          </button>
        </Link>
        
        <Link href="/reto3">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Reto 3
          </button>
        </Link>
        
        <Link href="/reto4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Reto 4
          </button>
        </Link>
        
        <Link href="/reto5">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Reto 5
          </button>
        </Link>
        
        <Link href="/reto6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">
            Reto 6
          </button>
        </Link>
      </div>
    </main>
  );
}