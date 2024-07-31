import capaSalao from '../assets/image/salao/capaSalaoDesktop.jpeg';
import { faUtensils, faImage } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import capaBuffet from '../assets/image/buffet/capaBuffet.jpeg';
import PropTypes from 'prop-types'

export default function HomeMobileView({ handleClickBuffet, handleClickSalao }) {
    return (
        <div className='fontTimes pt-1'>

            <div className="dacingScriptPersonalizada mt-3 flex justify-center items-center gap-4 
            before:block before:bg-[#D70319] before:h-[1px] before:w-full
            after:block after:bg-[#D70319] after:h-[1px] after:w-full">
                <h1 className='text-4xl'>Serviços</h1>
            </div>

            <div className='px-4'>

                <div className="p-3 flex items-center justify-between">

                    <h2 className="flex items-center gap-3 greatVibesRegular text-3xl
                    before:block before:bg-[#D70319] before:h-3 before:w-3 sm:before:h-5 sm:before:w-5 before:rounded-full">Buffet</h2>

                    <button type='button' aria-label='acessar a pagina buffet' className="bg-zinc-50 text-zinc-800 text-xl sm:text-4xl p-2 rounded-md animate-bounce" onClick={handleClickBuffet}>

                        <FontAwesomeIcon icon={faUtensils} />

                        <span className="ml-2">
                            Clique aqui e confira!
                        </span>

                    </button>

                </div>

                <div>

                    <img src={capaBuffet} alt='imagem de carne cortada' className='w-full h-auto' />

                    <button type='button' aria-label='solicitar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl sm:text-4xl w-full py-1 sm:py-2 animate-pulse" >

                        <span className="mr-2">Faça seu orçamento!</span>

                        <FontAwesomeIcon icon={faWhatsapp} />

                    </button>

                </div>

                <div className="bg-zinc-800 p-3 sm:py-8" >
                    <p >
                        Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar.
                    </p>
                </div>
            </div>

            <div>

                <div className="p-3 flex items-center justify-between">

                    <h1 className="flex items-center gap-3 sm:text-5xl
                    before:block before:bg-[#D70319] before:h-3 before:w-3 before:rounded-full sm:before:h-5 sm:before:w-5">Salão de festa</h1>


                    <button type='button' aria-label='acessar a pagina do salão' className="bg-zinc-50 text-zinc-800 text-xl sm:text-4xl p-2 rounded-md animate-bounce" onClick={handleClickSalao}>

                        <FontAwesomeIcon icon={faImage} />

                        <span className="ml-2">
                            Clique aqui e confira!
                        </span>

                    </button>

                </div>

                <div>

                    <img src={capaSalao} alt='Foto do salão de festa' className='w-full h-auto' />

                    <button type='button' aria-label='solicitar orçamento' className="bg-[#3FE05C] text-zinc-50 text-xl sm:text-4xl w-full py-1 sm:py-2 animate-pulse" >

                        <span className="mr-2">Faça seu orçamento!</span>

                        <FontAwesomeIcon icon={faWhatsapp} />

                    </button>

                </div>

                <div className="bg-zinc-800 p-3 sm:py-8" >
                    <p >
                        Descubra o lugar ideal para tornar seus momentos especiais! Nosso espaço oferece o cenário perfeito para celebrar com estilo e conforto. Com espaços amplos e piscina, estamos prontos para receber eventos de todos os tipos, desde festas de aniversário até eventos corporativos.
                    </p>
                </div>
            </div>
        </div>
    )
}

HomeMobileView.propTypes = {
    handleClickBuffet: PropTypes.func.isRequired,
    handleClickSalao: PropTypes.func.isRequired
}