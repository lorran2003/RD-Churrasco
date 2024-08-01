import bebidas from "../../assets/image/buffet/bebidas.jpg";
import strognoff from '../../assets/image/buffet/strognoff.jpg';
import miniBurguer from '../../assets/image/buffet/miniBurguer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const arrayMenu = [
    {
        id: 0,
        type: "Cardapio",
        img: miniBurguer,
        alt: "foto de mini hamburguer",
        menu: [
            {
                id: 0,
                number: 1,
                name: "Salgadinhos variados"
            },
            {
                id: 1,
                number: 2,
                name: "Mini pizzas"
            },
            {
                id: 2,
                number: 3,
                name: "Mini hambúrguer"
            },
            {
                id: 3,
                number: 4,
                name: "Cachorro quente"
            },
            {
                id: 4,
                number: 5,
                name: "Batata frita"
            },
            {
                id: 5,
                number: 6,
                name: "Nugts"
            },
            {
                id: 6,
                number: 7,
                name: "Pipoca"
            },
        ]
    },
    {
        id: 1,
        type: "Almoço",
        img: strognoff,
        alt: "foto de prato de strognoff",
        menu: [
            {
                id: 0,
                number: 1,
                name: "Arroz"
            },
            {
                id: 1,
                number: 2,
                name: "Batata palha"
            },
            {
                id: 2,
                number: 3,
                name: "Strogonoff de frango"
            },
            {
                id: 3,
                number: 4,
                name: "Macarrão penne"
            },
            {
                id: 4,
                number: 5,
                name: "Macarrão espaguete"
            },
            {
                id: 5,
                number: 6,
                name: "Bolonhesa"
            },
            {
                id: 6,
                number: 7,
                name: "Molho branco"
            },
        ]
    },
    {
        id: 2,
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

export default function CardapioFestaInfantil() {
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