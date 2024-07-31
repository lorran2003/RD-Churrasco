import { useState, lazy, Suspense } from "react";
import { LoadingImage } from "../LoadingImage";

const OptionsBuffet = lazy(() => import('./OptionsBuffet'))

export default function Buffet() {

    const [index, setIndex] = useState(0);

    return (

        <section className="text-2xl sm:text-3xl mt-2">

            <div className="bg-zinc-800 mb-2 py-2
                    sm:max-lg:w-4/5 lg:w-3/4 sm:m-auto sm:rounded-md">

                <h1 className="text-4xl text-center">Nosso menu</h1>

                <nav className="sm:flex sm:justify-center sm:items-center sm:gap-5">

                    <button type='button' aria-label='acessar cardapio do buffet de churrasco' className={`text-4xl flex justify-start items-center gap-2 pl-5 py-2
                            before:w-3 before:h-3 before:block before:bg-[#e90e24] before:rounded-full before:duration-500 duration-500 hover:text-zinc-50/40
    
                                ` + (index === 0 ? "before:opacity-100" : "before:opacity-40")} onClick={() => setIndex(0)}>

                        <span className={"after:duration-500 after:block after:w-full after:h-0.5 " + (index === 0 ? " after:bg-[#e90e24]" : "after:bg-zinc-800")}>

                            Churrasco

                        </span>

                    </button>

                    <button type='button' aria-label='acessar cardapio do buffet de feijoada' className={"text-4xl flex justify-start items-center gap-2 pl-5 py-2 before:w-3 before:h-3 before:block before:bg-[#D70319] before:rounded-full before:duration-500 duration-500 hover:text-zinc-50/40 " + (index === 1 ? "before:opacity-100" : "before:opacity-40")} onClick={() => setIndex(1)}>

                        <span className={"after:duration-500 after:block after:w-full after:h-0.5 " + (index === 1 ? " after:bg-[#e90e24]" : "after:bg-zinc-800")}>

                            Feijoda

                        </span>

                    </button>

                    <button type='button' aria-label='acessar cardapio do buffet de festa infantil' className={"text-4xl flex justify-start items-center gap-2 pl-5 py-2 before:w-3 before:h-3 before:block before:bg-[#D70319] before:rounded-full before:duration-500 duration-500 hover:text-zinc-50/40 " + (index === 2 ? "before:opacity-100" : "before:opacity-40")} onClick={() => setIndex(2)}>

                        <span className={"after:duration-500 after:block after:w-full after:h-0.5 " + (index === 2 ? " after:bg-[#e90e24]" : "after:bg-zinc-800")}>

                            Festa infantil

                        </span>

                    </button>

                </nav>
            </div>

            <Suspense fallback={<LoadingImage />}>
                <OptionsBuffet index={index} />
            </Suspense>
            
        </section>
    )
}