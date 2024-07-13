import capaSalao from '../assets/image/salao/capaSalaoDesktop.jpeg';
import { faUtensils, faImage } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';
import PropTypes from 'prop-types'

export default function HomeMobileView({handleClickBuffet, handleClickSalao}) {
    return (
        <>
            <div className="dacingScriptPersonalizada mt-3 flex justify-center items-center gap-4
            before:block before:bg-[#D70319] before:h-[2px] before:w-full 
            after:block after:bg-[#D70319] after:h-[1px] after:w-full">
                <h1>Serviços</h1>
            </div>

            <div className="greatVibesRegular">

                <div className="p-3 flex items-center justify-between">

                    <h1 className="text-3xl flex items-center gap-3
                    before:block before:bg-[#D70319] before:h-3 before:w-3 before:rounded-full">Buffet</h1>

                    <button className="bg-zinc-50 text-zinc-800 text-xl p-1 rounded-md animate-bounce" onClick={handleClickBuffet}>

                        <FontAwesomeIcon icon={faUtensils} />

                        <span className="ml-2">
                            Clique aqui e confira!
                        </span>

                    </button>

                </div>

                <div className="text-right">

                    <img src={capaBuffet} alt='foto de picanha' />

                    <button className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse" >

                        <span className="mr-2">Faça seu orçamento!</span>

                        <FontAwesomeIcon icon={faWhatsapp} />

                    </button>

                </div>

                <div className="bg-zinc-800 p-3" >
                    <p >
                        Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar.
                    </p>
                </div>
            </div>

            <div className="greatVibesRegular">

                <div className="p-3 flex items-center justify-between">

                    <h1 className="text-3xl flex items-center gap-3
                    before:block before:bg-[#D70319] before:h-3 before:w-3 before:rounded-full">Salão de festa</h1>


                    <button className="bg-zinc-50 text-zinc-800 text-xl p-1 rounded-md animate-bounce" onClick={handleClickSalao} >

                        <FontAwesomeIcon icon={faImage} />

                        <span className="ml-2">
                            Clique aqui e confira!
                        </span>

                    </button>

                </div>

                <div className="text-right">

                    <img src={capaSalao} alt='Foto do salão' />

                    <button className="bg-[#3FE05C] text-zinc-50 text-xl w-full py-1 animate-pulse" >

                        <span className="mr-2">Faça seu orçamento!</span>

                        <FontAwesomeIcon icon={faWhatsapp} />

                    </button>

                </div>

                <div className="bg-zinc-800 p-3" >
                    <p >
                        Descubra o lugar ideal para tornar seus momentos especiais! Nosso espaço oferece o cenário perfeito para celebrar com estilo e conforto. Com espaços amplos e piscina, estamos prontos para receber eventos de todos os tipos, desde festas de aniversário até eventos corporativos.
                    </p>
                </div>
            </div>
        </>
    )
}

HomeMobileView.propTypes = {
    handleClickBuffet: PropTypes.func.isRequired,
    handleClickSalao: PropTypes.func.isRequired
 }