import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy, Suspense } from 'react';
import { LoadingImage } from '../LoadingImage';

const CarrosselFotos = lazy(() => import('./CarrosselFotos'));
const DadosSalao = lazy(() => import('./DadosSalao'));

export default function Salao() {
    return (

        <div className="greatVibesRegular">


            <div className='w-full h-full'>

                <div className="w-auto h-auto lg:bg-zinc-800 lg:w-2/3 lg:m-auto lg:rounded lg:p-10">
                    <Suspense fallback={<LoadingImage />}>

                        <CarrosselFotos />

                    </Suspense>
                </div>

            </div>


            <Suspense fallback={<LoadingImage />}>

                <div className='flex justify-center items-center mt-2'>
                    <DadosSalao />
                </div>


            </Suspense>
            <button type='button' aria-label='realizar orçamento' className="bg-[#3FE05C] text-zinc-50 text-4xl w-full py-2 animate-pulse" >
                <span className="mr-2">Faça seu orçamento!</span>
                <FontAwesomeIcon icon={faWhatsapp} />
            </button>

        </div>

    )
}