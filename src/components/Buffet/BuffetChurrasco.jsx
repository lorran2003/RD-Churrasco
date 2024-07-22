import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgChurrasco from '../../assets/image/buffet/capaBuffet.jpeg';
import  { lazy, Suspense } from 'react';
import { LoadingImage } from '../LoadingImage';

const CardapioChurrasco = lazy(() => import('./CardapioChurrasco'));

export default function BuffetChurrasco() {
    return (
        <div className='sm:mt-2'>

            <h1 className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center gap-5 py-2 px-2 sticky top-12 z-10 sm:w-3/4 sm:max-lg:w-4/5 sm:m-auto sm:rounded-md
                                before:block before:bg-[#D70319] before:h-[2px] before:w-full
                                after:block after:bg-[#D70319] after:h-[2px] after:w-full ">
                Churrasco
            </h1>

            <div className='sm:w-3/4 sm:max-lg:w-4/5 bg-zinc-800 sm:p-4 sm:rounded-b-md sm:m-auto sm:relative sm:bottom-2 '>

                <img src={imgChurrasco} alt='foto de uma carne sucolenta cortada ' className='sm:rounded w-full h-auto' />

                <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse sm:rounded sm:text-4xl sm:mt-1" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>


                <p className='p-3' >
                    Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar. Confira o nosso cardapio a baixo!
                </p>

            </div>

            <Suspense fallback={<LoadingImage />}>
                <CardapioChurrasco />
            </Suspense>

        </div>
    )
}