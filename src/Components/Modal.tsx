import { ReactNode } from "react"

interface ModalP{
    isOpen : boolean,
    onClose: () => void,
    children: ReactNode
}

export default function Modal({isOpen, onClose, children} : ModalP){

    if(!isOpen) return null

    return(
        <>
            <div className="fixed inset-0 bg-[#000] bg-opacity-25 backdrop-blur-sm flex justify-center z-[99] items-center">

                <div className="w-[600px] flex flex-col bg-[#fff] rounded-md min-w-[90%] md:min-w-[600px]">
                    <div className="flex items-center justify-between">
                        <h3 className="pl-4 font-light text-[22px]">Receitas</h3>
                        <button className=" text-[#fff] bg-[#f00] w-[30px] text-center mr-4  px-[6px] rounded-md font-bold text-xl" onClick={onClose}>X</button>
                    </div>
                    <hr/>
                    <div>
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}