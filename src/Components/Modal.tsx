interface ModalP{
    isOpen? : boolean,
    onClose?: () => void
}

export default function Modal({isOpen, onClose} : ModalP){

    if(!isOpen) return null

    return(
        <>
            <div className="fixed inset-0 bg-[#000] bg-opacity-25 backdrop-blur-sm flex justify-center items-center">

                <div className="w-[600px] flex flex-col bg-[#fff]">
                    <div className="flex items-center justify-between">
                        <h3 className="pl-4 font-light text-[22px]">Modal</h3>
                        <button className=" text-[#f00] w-[30px] text-center mr-4 font-bold" onClick={onClose}>X</button>
                    </div>
                    <hr />
                    <div>
                        ingredientes da receita
                    </div>
                </div>

            </div>
        </>
    )
}