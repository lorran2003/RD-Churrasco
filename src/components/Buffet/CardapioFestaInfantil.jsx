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
        <div className="greatVibesRegular">
            {arrayMenu.map((item) => (
               
               <div key={item.id}>
               
                    <h1 className="dacingScriptPersonalizada flex justify-center items-center gap-2
                    before:w-4 before:h-4 before:opacity-70 before:block before:bg-[#D70319] before:rounded-full
                    text-center text-4xl bg-zinc-800 my-1 py-2">{item.type}</h1>

                    <div className="sm:flex sm:w-11/12 sm:m-auto">

                    <img src={item.img} alt={item.alt} className="w-full h-auto sm:w-1/2 sm:rounded-l-md object-cover" />

                    <div className="bg-zinc-900/95 text-3xl py-2 sm:max-xl:w-11/12 xl:w-4/5 sm:rounded-r-md">

                            {item.menu.map((menu) => (

                                <div key={menu.id} className="flex justify-start items-center py-2 px-1 border-dashed border-[#D70319] border-b-2 w-full gap-1 sm:px-2">

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