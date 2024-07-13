import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import bebidas from "../../assets/image/buffet/bebidas.jpg";
import guarnicao from '../../assets/image/buffet/torresmo.jpeg';
import feijoada from '../../assets/image/buffet/feijoada.jpg';
import entrada from '../../assets/image/buffet/entrada.jpg';
import sobremesa from '../../assets/image/buffet/sobremesa.jpg';

const arrayMenu = [
    {
        id: 0,
        type: "Petisco de entrada",
        img: entrada,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Aipim Frito"
            },
            {
                id: 1,
                number: 2,
                name: "Pastéis de queijo"
            },
        ]
    },
    {
        id: 1,
        type: "Carnes",
        img: feijoada,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Linguiça calabresa"
            },
            {
                id: 1,
                number: 2,
                name: "Linguiça paio"
            },
            {
                id: 2,
                number: 3,
                name: "Costelinha de porco"
            },
            {
                id: 3,
                number: 4,
                name: "Lombinho"
            },
            {
                id: 4,
                number: 5,
                name: "Carne Seca"
            },
            {
                id: 5,
                number: 6,
                name: "Bacon"
            },
            {
                id: 6,
                number: 7,
                name: "Orelha"
            },
            {
                id: 7,
                number: 8,
                name: "Rabinho de porco"
            },
            {
                id: 8,
                number: 9,
                name: "Pé de porco"
            },
        ]
    },
    {
        id: 2,
        type: "Guarnições",
        img: guarnicao,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Arroz branco com alho"
            },
            {
                id: 1,
                number: 2,
                name: "Farofa"
            },
            {
                id: 2,
                number: 3,
                name: "Couve"
            },
            {
                id: 3,
                number: 4,
                name: "Torresmo"
            },
            {
                id: 4,
                number: 5,
                name: "Laranja"
            },
            {
                id: 5,
                number: 6,
                name: "Salada verde"
            },
            {
                id: 6,
                number: 7,
                name: "Legumes"
            },
        ]

    },
    {
        id: 3,
        type: "Sobremesa",
        img: sobremesa,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Pudim de leite"
            }
        ]
    },
    {
        id: 4,
        type: "Bebidas",
        img: bebidas,
        menu: [
            {
                id: 0,
                number: 1,
                name: "Água"
            },
            {
                id: 1,
                number: 2,
                name: "Brahma (1,4 litros por pessoa)"
            },
            {
                id: 2,
                number: 3,
                name: "Mate"
            },
            {
                id: 3,
                number: 4,
                name: "Refrigetante comum e zero"
            },
        ]
    }

]
export function CardapioFeijoada() {
    return (
        <div className="greatVibesRegular">
            {arrayMenu.map((item) => (

                <div key={item.id}>

                    <h1 className="dacingScriptPersonalizada flex justify-center items-center gap-2
                    before:w-4 before:h-4 before:opacity-70 before:block before:bg-[#D70319] before:rounded-full
                    text-center text-4xl bg-zinc-800 my-1 py-2">{item.type}</h1>

                    <div className="sm:flex sm:w-11/12 sm:m-auto">

                        <img src={item.img} alt="Entrada" className="w-full sm:max-w-3xl sm:rounded-l-md object-cover" />

                        <div className="bg-zinc-900/95 text-3xl py-2 sm:w-full sm:rounded-r-md">

                            {item.menu.map((menu) => (

                                <div key={menu.id} className="flex justify-start items-center py-2 px-1 border-dashed border-[#D70319] border-b-2 w-full gap-1 sm:px-2">

                                    <p>{menu.number}</p>

                                    <FontAwesomeIcon icon={faHashtag} className="text-[#D70319] text-base" />

                                    <p>{menu.name}</p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div > 

    )
}