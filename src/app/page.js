import Link from "next/link";

export default function Home() {
  return (<main className="flex min-h-screen flex-col item-center justify-between p-30">
    <h1>Bienvenidos al blog</h1>
    <Link href="/blog">Ir al blog</Link>

  </main>
  );
}
