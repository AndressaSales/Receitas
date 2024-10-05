import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <div className="w-[100%] h-[100vh] relative flex justify-center items-center nav">

                <video autoPlay loop muted playsInline className="absolute right-0 bottom-0 z-[-1] w-[100%] h-[100%] object-cover mid">
                    <source src="/assets/back.mp4" type="video/mp4" />
                </video>

                <div className="text-center">
                    <h1 className="text-[160px] text-[#fff]">
                         Receitas
                    </h1>
                    <Link href={'/FormReceitas'} className="text-[#fff] text-[24px] border-2 border-[#fff] rounded-[50px] mt-[20px] p">Buscar Receitas</Link>
                </div>
            </div>
        </>
    )
}