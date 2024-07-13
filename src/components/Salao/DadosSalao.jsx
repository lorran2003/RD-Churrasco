import { MapPage } from "./MapPage";

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
export function DadosSalao() {
    return (
        <div className="w-full h-auto roboto-light text-xl sm:w-[87%] sm:flex sm:m-auto">

            <div className="w-full h-screen sm:w-4/5 sm:h-[30rem]">
                <MapPage />
            </div>

            <div className="py-3 text-justify px-5 bg-zinc-800">

                <div className="justify-start items-center gap-3 py-2">
                    <h1>Rua Ramiro Barcelos</h1>
                    <p>Numero: 80</p>
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

                <p className="italic font-bold text-red-500 mt-1">OBS: Horário do salão é de 10h ás 21h</p>
            </div>

        </div>
    )
} 