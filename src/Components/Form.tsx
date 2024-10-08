import { useState, useEffect } from "react"


export default function Form(){
    const [ingredientes, SetIngredientes] = useState<string>('')

    useEffect(()=>{

    },[])

    return(
        <main className="bg-[#f4f4f4] w-[100%] h-[100vh]">
            <div className="p-[20px] justify-center items-center flex">
                <input type="text" placeholder="Digite o ingrediente..." className="outline-none border-[3px] border-[#000] border-t-transparent border-l-transparent border-r-transparent w-[450px] text-[22px] bg-transparent" />
                <button className="ml-3 bg-blue-600 text-[#fff]  rounded-[10px] font-bold text-[17px] py-[10px] px-[20px]" >Buscar</button>
            </div>

            <div></div>
            <div></div>
            <div></div>
        </main>
    )
}