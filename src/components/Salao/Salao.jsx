import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy, Suspense } from 'react';
import { LoadingImage } from '../LoadingImage';

const CarrosselFotos = lazy(() => import('./CarrosselFotos'));
const DadosSalao = lazy(() => import('./DadosSalao'));

export default function Salao() {
    return (

        <section className="greatVibesRegular bg-zinc-950/60 py-10 px-5">


            <Suspense fallback={<LoadingImage />}>

                <div className='w-auto h-full'>

                    <div className="w-auto h-auto lg:px-5">

                        <CarrosselFotos />
                        
                    </div>

                </div>

                <div className='flex justify-center items-center'>
                    <DadosSalao />
                </div>

                <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-4xl w-full py-2 animate-pulse" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>
                
            </Suspense>

        </section >

    )
}