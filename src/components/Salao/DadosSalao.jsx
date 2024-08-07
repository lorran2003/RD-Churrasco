import video from "../../assets/videoSalao.mp4";
import { lazy, Suspense } from "react";
import { LoadingImage } from "../LoadingImage";

const MapPage = lazy(() => import('./MapPage'))
const itens = [
    {
        id: 0,
        item: "Wi-fi"
    },
    {
        id: 1,
        item: "Som ambiente"
    },
    {
        id: 2,
        item: "Piscina"
    },
    {
        id: 3,
        item: "Area coberta"
    },
    {
        id: 4,
        item: "Area verde"
    },
    {
        id: 5,
        item: "4 banheiros"
    },
    {
        id: 6,
        item: "Churrasqueira"
    },
    {
        id: 7,
        item: "Cozinha"
    }
]

export default function DadosSalao() {
    return (
        <div className="dacingScriptPersonalizada w-full h-full lg:w-4/5 lg:m-auto ">


            <div className="max-w-[836px] h-96 bg-zinc-800 rounded-md p-4 m-auto mt-4">
                <Suspense fallback={<LoadingImage />}>
                    <MapPage />
                </Suspense>
            </div>

            <div className="w-full lg:h-screen p-4 flex max-lg:flex-col lg:justify-center gap-4 ">

                <div className="py-3 text-justify px-5 bg-zinc-800 w-auto h-auto text-2xl border-2 border-solid border-[#D70319] shadow-md shadow-zinc-950 rounded-xl">

                    <div className="justify-start items-center gap-3 py-4">
                        <h1>Rua Ramiro Barcelos</h1>
                        <span>Numero: 80</span>
                    </div>

                    <ul>
                        <h1>Temos:</h1>
                        {itens.map((itens) => (

                            <li key={itens.id} className="flex justify-start items-center gap-2 mt-1
                            before:block before:bg-[#87ceeb] before:h-2 before:w-2 before:rounded-full">
                                <span>{itens.item}</span>
                            </li>
                        ))}

                    </ul>

                    <span className="italic font-bold text-red-500 mt-1">OBS: Horário do salão é de 10h ás 21h</span>
                </div>

                <div className="w-auto h-auto">
                    <video controls muted loop className="object-cover w-auto h-full shadow-md shadow-zinc-950 rounded-xl border-2 border-solid border-[#D70319] m-auto bg-zinc-800 p-5">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    )
} 