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
        label: 'Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar. Confira o nosso cardapio a baixo!',
        component: < MenuChurrasco />
    },
    {
        img: imgFeijoda,
        title: 'Feijoada',
        label: 'Nosso Buffet de Feijoada oferece uma autêntica feijoada brasileira, preparada com ingredientes frescos e selecionados, para garantir uma experiência gastronômica inesquecível. Confira o nosso cardapio a baixo!',
        component: <MenuFeijoada />
    },
    {
        img: imgFestaInfantil,
        title: 'Festa infantil',
        label: 'Transforme a sua festa em um evento inesquecível com nosso Buffet de Comidas para Festas Infantis. Oferecemos um cardápio variado e delicioso, pensado especialmente para agradar o paladar dos pequenos e garantir a alegria de todos os convidados. Confira o nosso cardapio a baixo!',
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
        <div className='mt-2'>


            <div className='h-auto flex flex-col justify-center items-center lg:w-7/12 sm:max-lg:w-4/5 bg-zinc-800 sm:max-lg:p-2 sm:rounded-md sm:m-auto sm:p-2'>

                <h1 className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center gap-5 py-2 px-2 w-full sm:m-auto sm:rounded-md
                                before:block before:bg-[#D70319] before:h-[2px] before:w-full
                                after:block after:bg-[#D70319] after:h-[2px] after:w-full "
                >
                    {viewBuffet.title}
                </h1>


                <img src={viewBuffet.img} alt='foto do prato de feijoada' className='sm:rounded w-full h-auto' />

                <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse sm:text-4xl sm:mt-1 sm:rounded" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>

                <p className='p-3'>
                    {viewBuffet.label}
                </p>

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