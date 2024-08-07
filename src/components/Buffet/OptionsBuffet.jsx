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
        component: < MenuChurrasco />
    },
    {
        img: imgFeijoda,
        component: <MenuFeijoada />
    },
    {
        img: imgFestaInfantil,
        component: <MenuFestaInfantil />
    }
]
export default function OptionsBuffet({ index, children }) {

    const [viewBuffet, setViewBuffet] = useState((arryInfoBuffet[index]));

    useEffect(() => {
        setViewBuffet(arryInfoBuffet[index]);
    }, [index]);

    let ComponentMenu = () => viewBuffet.component;

    return (
        <div className="py-10 px-4 sm:px-6">

            <div className='h-auto flex max-lg:flex-col justify-center max-lg:items-center gap-2 pb-10 lg:max-xl:w-3/5 xl:w-1/2 lg:m-auto'>

                <div className="flex flex-col items-center justify-center">

                    <div className="dacingScriptPersonalizada bg-zinc-800 w-full sm:m-auto rounded-md border-2 border-solid border-[#D70319]">

                        <h1 className="text-3xl sm:text-4xl px-4 flex justify-center items-center gap-4 py-1
                        before:block before:bg-[#D70319] before:h-[2px] before:w-1/4 sm:before:w-1/3
                        after:block after:bg-[#D70319] after:h-[2px] after:w-1/4 sm:after:w-1/3">
                            
                            <span>
                                Cardápio
                            </span>

                        </h1>
                        
                        {children}
                    </div>


                    <div className='rounded-sm bg-zinc-800 p-4 my-2'>
                        <img src={viewBuffet.img} alt='foto do prato de feijoada' className='rounded-md w-full h-auto border-2 border-solid border-[#D70319] shadow-md shadow-zinc-950' />
                    </div>

                    <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl lg:text-2xl w-full py-1 sm:py-2 animate-pulse sm:text-3xl sm:max-lg:mt-1 rounded border-2 border-solid border-zinc-50" >
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
    index: PropTypes.number.isRequired,
    children: PropTypes.element.isRequired
}