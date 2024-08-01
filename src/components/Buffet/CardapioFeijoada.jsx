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
        alt: "foto de aipim frito",
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
        alt: "foto de uma panela de feijoada",
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
        alt: "foto de uma tijela de torresmo",
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
        alt: "foto de um pudim de leite",
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
        alt: "foto das bebidas",
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
export default function CardapioFeijoada() {
    return (
        <div className="fontTimes">
            {arrayMenu.map((item) => (

                <div key={item.id} className="pb-10">

                    <div className="dacingScriptPersonalizada w-full flex justify-center items-center gap-2 bg-zinc-800 text-center rounded-md py-1 sm:w-4/5 my-2 mx-auto
                                    before:w-4 before:h-4 before:opacity-70 before:block before:bg-[#D70319] before:rounded-full ">

                        <h1 className="text-3xl sm:text-4xl">{item.type}</h1>
                    </div>

                    <div className="flex max-lg:flex-col justify-center items-center lg:items-start gap-2 lg:w-full">

                        <div className='rounded-md bg-zinc-800 p-2 sm:max-lg:w-4/5 lg:h-full lg:max-xl:w-1/2 xl:w-2/5'>

                            <img src={item.img} alt={item.alt} className="w-full h-auto rounded-md object-cover border-2 border-solid border-[#D70319]" />

                        </div>

                        <div className="bg-zinc-800 text-lg sm:text-2xl p-3 rounded-md w-full sm:max-lg:w-4/5 lg:h-full lg:w-2/5">

                            {item.menu.map((menu) => (

                                <div key={menu.id} className="flex justify-start items-center py-2 px-1 border-dashed border-[#D70319] border-b-2 w-full gap-1 sm:px-2 lg:h-full">

                                    <span>{menu.number}</span>

                                    <FontAwesomeIcon icon={faHashtag} className="text-[#D70319] text-base" />

                                    <span>{menu.name}</span>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div >

    )
}