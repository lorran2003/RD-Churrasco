import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgFeijoda from '../../assets/image/buffet/buffet_feijoada.jpg';
import { CardapioFeijoada } from './CardapioFeijoada';

export function BuffetFeijoada() {
    return (
        <div className='mt-2'>

            <h1 className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center gap-5 py-2 px-2 sticky top-12 z-10 sm:w-3/4 sm:m-auto sm:rounded-md
                                before:block before:bg-[#D70319] before:h-[2px] before:w-full
                                after:block after:bg-[#D70319] after:h-[2px] after:w-full "
            >
                Feijoada
            </h1>

            <div className='sm:w-3/4 bg-zinc-800 sm:p-4 sm:rounded-b-md sm:m-auto sm:relative sm:bottom-2'>


                <img src={imgFeijoda} alt='foto do prato de feijoada' className='sm:rounded' />

                <button className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse sm:text-4xl sm:mt-1 sm:rounded" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>

                <p className='p-3'>
                    Nosso Buffet de Feijoada oferece uma autêntica feijoada brasileira, preparada com ingredientes frescos e selecionados, para garantir uma experiência gastronômica inesquecível. Confira o nosso cardapio a baixo!
                </p>

            </div>

            <CardapioFeijoada />

        </div>
    )
}