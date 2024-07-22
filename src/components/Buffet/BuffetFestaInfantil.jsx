import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgFestaInfantil from '../../assets/image/buffet/miniBurguer.jpg';
import { lazy, Suspense } from 'react';
import { LoadingImage } from '../LoadingImage';

const CardapioFestaInfantil = lazy(() => import('./CardaioFestaInfantil'));

export default function BuffetFestaInfantil() {
    return (
        <div className='mt-2'>

            <div className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center text-center py-2 px-2 sticky top-12 z-10 lg:w-3/4 sm:max-lg:w-4/5 sm:m-auto sm:rounded-md
                                before:block before:bg-[#D70319] before:h-[2px]   before:w-full
                                after:block after:bg-[#D70319] after:h-[2px] after:w-full"
            >
                <h1 className='w-[40rem] sm:max-lg:w-full sm:max-lg:px-4'>
                    Festa infantil
                </h1>
            </div>

            <div className="lg:w-3/4 sm:max-lg:w-4/5 bg-zinc-800 sm:p-4 sm:rounded-b-md sm:m-auto sm:relative sm:bottom-2">

                <img src={imgFestaInfantil} alt='foto de mini hamburguer' className='sm:rounded w-full' />

                <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse sm:text-4xl sm:mt-1" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>

                <p className='p-3' >
                    Transforme a sua festa em um evento inesquecível com nosso Buffet de Comidas para Festas Infantis. Oferecemos um cardápio variado e delicioso, pensado especialmente para agradar o paladar dos pequenos e garantir a alegria de todos os convidados. Confira o nosso cardapio a baixo!
                </p>

            </div>

            <Suspense fallback={<LoadingImage />}>
                <CardapioFestaInfantil />
            </Suspense>
        </div>
    )
}