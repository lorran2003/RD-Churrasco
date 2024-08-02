import { lazy, Suspense, useEffect, useState } from "react";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingImage } from "../LoadingImage";
import PropTypes from 'prop-types'
//imagens
import imgChurrasco from '../../assets/image/buffet/capaBuffet.jpeg';
import imgFestaInfantil from '../../assets/image/buffet/miniBurguer.jpg';
import imgFeijoda from '../../assets/image/buffet/buffet_feijoada.jpg';
//components
const MenuChurrasco = lazy(() => import('./CardapioChurrasco'));
const MenuFeijoada = lazy(() => import('./CardapioFeijoada'));
const MenuFestaInfantil = lazy(() => import('./CardapioFestaInfantil'));

const arryInfoBuffet = [
    {
        img: imgChurrasco,
        title: 'Churrasco',
        component: < MenuChurrasco />
    },
    {
        img: imgFeijoda,
        title: 'Feijoada',
        component: <MenuFeijoada />
    },
    {
        img: imgFestaInfantil,
        title: 'Infantil',
        component: <MenuFestaInfantil />
    }
]
export default function OptionsBuffet({ index }) {

    const [viewBuffet, setViewBuffet] = useState((arryInfoBuffet[index]));

    useEffect(() => {
        setViewBuffet(arryInfoBuffet[index]);
    }, [index]);

    let ComponentMenu = () => viewBuffet.component;

    return (
        <div className="px-4 sm:px-6">

            <div className='h-auto flex max-lg:flex-col justify-center max-lg:items-center gap-2 pb-10 xl:w-4/5 xl:m-auto'>
              
                <div className="flex flex-col items-center justify-center">

                    <div className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center w-full sm:m-auto rounded-md py-1
                    before:block before:bg-[#D70319] before:h-[2px] before:w-1/4 sm:before:w-1/3
                    after:block after:bg-[#D70319] after:h-[2px] after:w-1/4 sm:after:w-1/3 ">

                        <h1 className="text-3xl sm:text-4xl px-4">
                            {viewBuffet.title}
                        </h1>
                    </div>

                    <div className='rounded-md bg-zinc-800 p-2 my-2'>
                        <img src={viewBuffet.img} alt='foto do prato de feijoada' className='rounded w-full h-auto border-2 border-solid border-[#D70319]' />
                    </div>

                    <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl lg:text-2xl w-full py-1 sm:py-2 animate-pulse sm:text-3xl sm:max-lg:mt-1 rounded" >
                        <span className="mr-2">Faça seu orçamento!</span>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </button>

                </div>

            </div>

            <Suspense fallback={<LoadingImage />}>
                <ComponentMenu />
            </Suspense>
        </div>
    )
}

OptionsBuffet.propTypes = {
    index: PropTypes.number.isRequired
}