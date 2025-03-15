import './globals.css';
export default function Home() {
  let name = "John";
  console.log(name);
  return (
    <main className="h-screen">
        <h1 className="">Intro to Next.js {name}</h1>
    </main>
  );
}
