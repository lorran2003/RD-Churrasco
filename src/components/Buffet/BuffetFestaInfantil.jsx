import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgFestaInfantil from '../../assets/image/buffet/buffet_infantil.jpeg';

export function BuffetFestaInfantil() {
    return (
        <div className='mt-2'>

            <h1 className="dacingScriptPersonalizada bg-zinc-800 flex justify-center items-center text-center gap-5 py-2 px-2 sticky top-12 z-10 sm:w-3/4 sm:m-auto sm:rounded-md
                                before:block before:bg-[#D70319] before:h-[2px] before:w-20 sm:before:w-2/5
                                after:block after:bg-[#D70319] after:h-[2px] after:w-20 sm:after:w-2/5 "
            >
                Festa infantil
            </h1>

            <div className="sm:w-3/4 bg-zinc-800 sm:p-4 sm:rounded-b-md sm:m-auto sm:relative sm:bottom-2">

                <img src={imgFestaInfantil} alt='foto de picanha' />

                <button className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse sm:text-4xl sm:mt-1" >
                    <span className="mr-2">Faça seu orçamento!</span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </button>

                <p className='p-3' >
                    Transforme a sua festa em um evento inesquecível com nosso Buffet de Comidas para Festas Infantis. Oferecemos um cardápio variado e delicioso, pensado especialmente para agradar o paladar dos pequenos e garantir a alegria de todos os convidados. Confira o nosso cardapio a baixo!
                </p>

            </div>

        </div>
    )
}