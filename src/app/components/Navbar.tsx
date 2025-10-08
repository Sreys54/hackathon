import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Equipo 1 Hackathon
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/reto1" className="hover:text-gray-300">
            Reto 1
            </Link>
        <Link href="/reto2" className="hover:text-gray-300">
            Reto 2
          </Link>
        <Link href="/reto3" className="hover:text-gray-300">
            Reto 3
          </Link>
        <Link href="/reto4" className="hover:text-gray-300">
            Reto 4
          </Link>
        <Link href="/reto5" className="hover:text-gray-300">
            Reto 5
          </Link>
        <Link href="/reto6" className="hover:text-gray-300">
            Reto 6
          </Link>
        </div>
      </div>
    </nav>
  );
}
