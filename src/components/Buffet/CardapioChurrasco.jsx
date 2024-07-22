import sobremesa from "../../assets/image/buffet/sobremesa.jpeg";
import bebidas from "../../assets/image/buffet/bebidas.jpg";
import capaBuffet from '../../assets/image/buffet/capaBuffet.jpeg';
import entrada from '../../assets/image/buffet/Entrada.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import guarnicao from "../../assets/image/buffet/fotoSalada.jpeg"

const arrayMenu = [
    {
        id: 0,
        type: "Entrada",
        img: entrada,
        alt: "foto dos aperetivos de entrada",
        menu: [
            {
                id: 0,
                number: 1,
                name: "Anéis de cebola com barbecue"
            },
            {
                id: 1,
                number: 2,
                name: "Batata frita"
            },
            {
                id: 2,
                number: 3,
                name: "Linguiça"
            },
            {
                id: 3,
                number: 4,
                name: "Pão de alho"
            },
        ]
    },
    {
        id: 1,
        type: "Carnes",
        img: capaBuffet,
        alt: "foto de uma peça de picanha",
        menu: [
            {
                id: 0,
                number: 1,
                name: "Alcatra"
            },
            {
                id: 1,
                number: 2,
                name: "Coração de alcatra"
            },
            {
                id: 2,
                number: 3,
                name: "Coração de frango"
            },
            {
                id: 3,
                number: 4,
                name: "Drumet"
            },
            {
                id: 4,
                number: 5,
                name: "Linguiça suína"
            },
            {
                id: 5,
                number: 6,
                name: "Linguiça toscana"
            },
            {
                id: 6,
                number: 7,
                name: "Linguiça calabresa"
            },
            {
                id: 7,
                number: 8,
                name: "Maminha"
            },
            {
                id: 8,
                number: 9,
                name: "Picanha"
            },
        ]
    },
    {
        id: 2,
        type: "Guarnições",
        img: guarnicao,
        alt: "foto da guarnição",
        menu: [
            {
                id: 0,
                number: 1,
                name: "Arroz branco"
            },
            {
                id: 1,
                number: 2,
                name: "Batata calabresa"
            },
            {
                id: 2,
                number: 3,
                name: "Feijão fradinho"
            },
            {
                id: 3,
                number: 4,
                name: "Farofa"
            },
            {
                id: 4,
                number: 5,
                name: "Maionese"
            },
            {
                id: 5,
                number: 6,
                name: "Salpicão"
            },
            {
                id: 6,
                number: 7,
                name: "Salada verde"
            },
            {
                id: 7,
                number: 8,
                name: "Salada de legumes"
            },
            {
                id: 8,
                number: 9,
                name: "Tabule"
            },
            {
                id: 9,
                number: 10,
                name: "Vinagrete ou molho"
            },
        ]

    },
    {
        id: 3,
        type: "Sobremesa",
        img: sobremesa,
        alt: "foto da sobremesa",
        menu: [
            {
                id: 0,
                number: 1,
                name: "Banana com cobertura"
            },
            {
                id: 1,
                number: 2,
                name: "Canela"
            },
            {
                id: 2,
                number: 3,
                name: "Sorvete"
            },
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

export default function CardapioChurrasco() {
    return (
        <div className="greatVibesRegular">
            {arrayMenu.map((item) => (
               
               <div key={item.id}>
               
                    <h1 className="dacingScriptPersonalizada flex justify-center items-center gap-2
                    before:w-4 before:h-4 before:opacity-70 before:block before:bg-[#D70319] before:rounded-full
                    text-center text-4xl bg-zinc-800 my-1 py-2">{item.type}</h1>

                    <div className="w-full sm:flex sm:w-11/12 sm:m-auto">

                        <img src={item.img} alt={item.alt} className="w-full h-auto sm:w-1/2 sm:rounded-l-md object-cover" />

                        <div className="bg-zinc-900/95 text-3xl py-2 sm:w-1/2 sm:rounded-r-md">

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