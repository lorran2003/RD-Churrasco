import video from "../../assets/videoSalao.mp4";
import { lazy, Suspense } from "react";
import { LoadingImage } from "../LoadingImage";

const MapPage = lazy(() => import('./MapPage'))
const itens = [
    {
        id: 0,
        item: "WI-FI"
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
        <div className="roboto-light text-xl w-full h-full lg:flex lg:justify-center lg:items-center">

            <div className="w-full h-screen">
                <Suspense fallback={<LoadingImage />}>
                    <MapPage />
                </Suspense>
            </div>

            <div className="h-auto w-auto lg:w-full">
                <video autoPlay muted loop className="object-cover w-full h-screen">
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="py-3 text-justify px-5 bg-zinc-800 w-full h-auto lg:h-screen text-2xl">

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

        </div>
    )
} 