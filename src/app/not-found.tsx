import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-gray-500 mb-2">404</p>
      <h1 className="text-3xl font-bold mb-3">Puslapis nerastas</h1>
      <p className="text-gray-600 mb-6">Šio adreso svetainėje nėra. Grįžkite į pradžią arba darbus.</p>
      <div className="flex gap-3">
        <Link href="/" className="bg-black text-white py-2 px-5 rounded-lg font-medium hover:bg-gray-800">
          Pradžia
        </Link>
        <Link href="/portfolio" className="border-2 border-black py-2 px-5 rounded-lg font-medium hover:bg-black hover:text-white">
          Darbai
        </Link>
      </div>
    </div>
  );
}
