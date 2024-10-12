import { useState, useEffect } from "react"
import Modal from "./Modal"

export default function SearchReceitas(){

    const [buscarIngredientes, SetBuscarIngredientes] = useState<string>('')
    const [reciveIngedient, setRecibeIngedient] = useState([]) 

    const search = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${buscarIngredientes}`)
        const ingredient = await res.json()

        //console.log(ingredient)
        setRecibeIngedient(ingredient.meals)
       
    }

    useEffect(() => {
        search()
    }, [])

    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const handleOpenModal = () =>{
        setModalOpen(!modalOpen)
    }

    const [OpenId, setOpenId] = useState<number>(0)

   async function getRecipesDetails(){
    const response = await fetch(`https//www.themealdb.com/api/json/v1/1/lookup.php?i=${OpenId}`)
    const data = response.json()

    console.log(data)
   }


    return(
        <main className="bg-[#f4f4f4e9] w-[100%] h-[100vh]">
            <div className="p-[20px] justify-center items-center flex">
                <input 
                    type="text" placeholder="Digite o ingrediente..." 
                    className="outline-none border-[3px] border-[#000] border-t-transparent border-l-transparent border-r-transparent w-[450px] text-[22px] bg-transparent" 
                    value={buscarIngredientes}
                    onChange={(e) => SetBuscarIngredientes(e.target.value)}
                />
                <button 
                    className="ml-3 bg-blue-600 text-[#fff]  rounded-[10px] font-bold text-[17px] py-[10px] px-[20px]" 
                    type="submit"
                    onClick={search}
                >Buscar</button>
            </div>

            <div className="mx-auto max-w-6xl mb-16 mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
                {
                    reciveIngedient.map((i) => {
                     return(
                        <button className="border-2 border-[#ddd] py-4 cursor-pointer md:px-[10px] rounded-md b" onClick={getRecipesDetails} onCanPlayCapture={getRecipesDetails} value={OpenId}>
                            <div className="items-center justify-center flex">
                                <img src={i.strMealThumb} alt={i.strMeal} className="w-[250px] rounded-md" />
                            </div>
                            <div>
                                <h2 className="text-center pt-[10px] font-bold font-mono text-[22px]">{i.strMeal}</h2>
                            </div>
                        </button>
                     )
                    })
                }
            </div>
            <Modal isOpen={modalOpen} onClose={handleOpenModal} />
        </main>
    )
}