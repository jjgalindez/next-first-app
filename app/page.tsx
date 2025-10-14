import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl">Hola mundo</span>
        <Link href={'/general/about'} className="hover:bg-blue-400">About Page</Link>
      </main>
      
    </div>
  );
}
