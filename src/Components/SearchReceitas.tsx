import Image from "next/image"
import { useState} from "react"


export default function SearchReceitas(){
    
    const [ingredientes, SetIngredientes] = useState<string>('')

    const search = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientes}`)
        const data = await res.json()

        console.log(data)
        SetIngredientes(data)
    }


    return(
        <main className="bg-[#f4f4f4] w-[100%] h-[100vh]">
            <div className="p-[20px] justify-center items-center flex">
                <input 
                    type="text" placeholder="Digite o ingrediente..." 
                    className="outline-none border-[3px] border-[#000] border-t-transparent border-l-transparent border-r-transparent w-[450px] text-[22px] bg-transparent" 
                    value={ingredientes}
                    onChange={(e) => SetIngredientes(e.target.value)}
                />
                <button 
                    className="ml-3 bg-blue-600 text-[#fff]  rounded-[10px] font-bold text-[17px] py-[10px] px-[20px]" 
                    onClick={search}
                >Buscar</button>
            </div>

            <div>

            </div>
        </main>
    )
}