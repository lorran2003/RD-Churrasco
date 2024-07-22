import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgFeijoda from '../../assets/image/buffet/buffet_feijoada.jpg';
import { lazy, Suspense } from 'react';
import { LoadingImage } from '../LoadingImage';

const CardapioFeijoada = lazy(() => import('./CardapioFeijoada'));

export default function BuffetFeijoada() {
    return (
        <div className='mt-2'>

            <h1 className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center gap-5 py-2 px-2 sticky top-12 z-10 lg:w-3/4 sm:max-lg:w-4/5 sm:m-auto sm:rounded-md
                                before:block before:bg-[#D70319] before:h-[2px] before:w-full
                                after:block after:bg-[#D70319] after:h-[2px] after:w-full "
            >
                Feijoada
            </h1>

            <div className='lg:w-3/4 sm:max-lg:w-4/5 bg-zinc-800 sm:p-4 sm:rounded-b-md sm:m-auto sm:relative sm:bottom-2'>


                <img src={imgFeijoda} alt='foto do prato de feijoada' className='sm:rounded w-full h-auto' />

                <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse sm:text-4xl sm:mt-1 sm:rounded" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>

                <p className='p-3'>
                    Nosso Buffet de Feijoada oferece uma autêntica feijoada brasileira, preparada com ingredientes frescos e selecionados, para garantir uma experiência gastronômica inesquecível. Confira o nosso cardapio a baixo!
                </p>

            </div>

            <Suspense fallback={<LoadingImage />}>
                <CardapioFeijoada />
            </Suspense>

        </div>
    )
}