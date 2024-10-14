import { useState, useEffect } from "react"
import Modal from "./Modal"
import Link from "next/link"

export default function SearchReceitas(){

    const [buscarIngredientes, SetBuscarIngredientes] = useState<string>('')
    const [reciveIngedient, setRecibeIngedient] = useState([]) 

    const search = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${buscarIngredientes}`)
        const ingredient = await res.json()

        //console.log(ingredient.meals)
        setRecibeIngedient(ingredient.meals)
       
    }

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [recipesDetails, setRecipesDetails] = useState([])

    async function handleOpenModal(id:any) {

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        const recipe = data.meals[0]

        let ingredientList = ''

        for(let i = 1; i <= 20; i++){
            const ingre = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`]

            if(ingre){
                ingredientList += `<li>${ingre} -${measure}</li>`
            }else{
                break
            }
        }

        //console.log(id)
        //console.log(recepe)
        setRecipesDetails([recipe])
        setModalOpen(!modalOpen)
    }



    useEffect(() => {
        search();
    }, [])

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
                        <div key={i.idMeal} value={recipesDetails} className="border-2 border-[#ddd] py-4 cursor-pointer md:px-[10px] rounded-md b" onClick={() =>  handleOpenModal(`${i.idMeal}`)}>
                            <div className="items-center justify-center flex">
                                <img src={i.strMealThumb} alt={i.strMeal} className="w-[250px] rounded-md" />
                            </div>
                            <div>
                                <h2 className="text-center pt-[10px] font-bold font-mono text-[22px]">{i.strMeal}</h2>
                            </div>
                        </div>
                     )
                    })
                }
            </div>
            <Modal isOpen={modalOpen} onClose={handleOpenModal}>
                <div>
                    {
                        recipesDetails.map((r)=> {
                            return(
                                <div key={r.idMeal}>
                                    <h2 className="font-bold py-[10px] text-2xl text-center">Nome: {r.strMeal}</h2>
                                    <h3 className="font-bold pl-[10px]">Categoria: <span className="font-normal">{r.strCategory}</span></h3>
                                    <h3 className="font-bold pl-[10px]">Origem: <span className="font-normal">{r.strArea}</span></h3>
                                    <div className="items-center justify-center flex">
                                        <img src={r.strMealThumb} alt={r.strMeal} className="w-[200px] rounded-md object-cover" />
                                    </div>
                                    
                                    <p className="p-4 text-left">{r.strInstructions}</p>
                                    <p className="text-center pb-6 pt-4 font-bold">Vídeo: <Link className="text-[#f00] hover:underline hover:decoration-[#f00]" href={r.strYoutube}>Assista no Youtube</Link></p>
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        </main>
    )
}