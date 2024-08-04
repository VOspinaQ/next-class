import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Primer Post'
}

export default function PrimerPost() {
    return (
        <div>
            <h1>Este es el primer post</h1>
            <Image src="/img/imagen1.jpg" alt="Descripción de la imagen" width={300} height={300} />
            <Link href="/"> Ir a la pagina principal </Link>
            <br></br>
            <a href="/">Ejemplo con ancla</a>
        </div>
    );
}
