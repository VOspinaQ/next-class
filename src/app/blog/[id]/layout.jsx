import Image from "next/image";
export default function Layout({children}){
    return(
        <>
            <Image src="/img/imagen1.jpg" alt="Descripción de la imagen" width={150} height={150}/>
            <main>
                {children}
            </main>
        
        </>
    )
}
