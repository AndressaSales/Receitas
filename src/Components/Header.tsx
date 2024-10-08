export default function Header(){
    return(
        <main>
            <div className="bg-purple-600 relative flex justify-center items-center w-[100%] h-[250px]">
                <video autoPlay loop playsInline muted className="absolute w-[100%] h-[250px] right-0 bottom-0 object-cover">
                    <source src="/assets/banner.mp4" type="video/mp4" />
                </video>
                <div className="text-center z-10 ">
                    <h1 className="text-[#fff] text-[40px]">Desvende os segredos da culinária</h1>
                </div>
            </div>
        </main>
    )
}