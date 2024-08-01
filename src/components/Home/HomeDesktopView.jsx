import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import capaSalao from '../../assets/image/salao/capaSalao.jpeg';
import capaBuffet from '../../assets/image/buffet/capaBuffet.jpeg';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from 'prop-types'
export default function HomeDesktopView({ handleClickBuffet, handleClickSalao }) {

    //estilização
    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger);

        const ct = gsap.context(() => {
            let tlBuffet = gsap.timeline({
                scrollTrigger: {
                    trigger: "#divBuffet",
                    start: "top 90%",
                }

            })
            let tlSalao = gsap.timeline({
                scrollTrigger: {
                    trigger: "#divSalao",
                    start: "top 90%",
                }

            })

            const img = document.querySelectorAll(".img");
            const btnsInfo = document.querySelectorAll(".btnsInfo");
            const btnOrcamento = document.querySelectorAll(".btnOrcamento");
            const text = document.querySelectorAll(".text");

            tlBuffet.to(img[0], { x: 0, duration: 0.6, opacity: 1 });
            tlBuffet.to(text[0], { duration: 0.5, opacity: 1 });
            tlBuffet.to(btnsInfo[0], { x: 0, duration: 0.5, opacity: 1 });
            tlBuffet.to(btnOrcamento[0], { x: 0, duration: 0.5, opacity: 1 });

            tlSalao.to(img[1], { x: 0, duration: 0.6, opacity: 1 });
            tlSalao.to(text[1], { duration: 0.5, opacity: 1 });
            tlSalao.to(btnsInfo[1], { x: 0, duration: 0.5, opacity: 1 });
            tlSalao.to(btnOrcamento[1], { x: 0, duration: 0.5, opacity: 1 });
        })

        return () => { ct.revert() }
    }, [])


    return (
        <div className='fontTimes mt-2'>

            <div className="dacingScriptPersonalizada mt-3 flex justify-center items-center gap-4 
            before:block before:bg-[#D70319] before:h-[1px] before:w-2/5 before:xl:5/12
            after:block after:bg-[#D70319] after:h-[1px] after:w-2/5 after:xl:w-5/12">
                <h1 className='text-5xl'>Serviços</h1>
            </div>

            <div id='divBuffet' className='flex justify-center gap-4 text-lg py-16 px-4'>

                <div className='relative w-2/3 xl:w-1/2 overflow-hidden'>

                    <div className='rounded-md bg-zinc-800 border border-solid border-[#D70319] p-4'>
                        <img src={capaBuffet} alt='imagem de carne cortada' className='w-full h-auto shadow-md translate-x-full rounded-md img' />
                    </div>

                    <div className='absolute flex flex-col gap-2 justify-center items-start top-8 '>


                        <button type='button' aria-label='acessar pagina de buffet' className='btnsInfo translate-x-full opacity-0 z-10 ml-4 bg-zinc-50 text-zinc-800 rounded-md shadow-[0_0_6px] shadow-zinc-950 flex justify-start items-center gap-2 pr-2 animate-bounce text-xl' onClick={handleClickBuffet}>

                            <FontAwesomeIcon icon={faBars} className='shadow-md shadow-zinc-950 rounded p-2' />

                            <FontAwesomeIcon icon={faUtensils} />

                            Acessar buffet
                        </button>

                        <button type='button' aria-label='realizar orçamento' className='btnOrcamento bg-[#3FE05C] text-zinc-50 rounded-r-md bottom-96 w-80 h-14 -translate-x-full opacity-0 flex gap-2 justify-center items-center shadow shadow-zinc-950 text-2xl'>

                            <span>Faça seu orçamento!</span>
                            <FontAwesomeIcon icon={faWhatsapp} />

                        </button>

                    </div>

                </div >

                <div className='w-1/2 xl:w-1/3 flex flex-col items-start justify-center gap-10'>

                    <h2 className="flex items-center gap-3 sm:text-4xl greatVibesRegular text-3xl
                    before:block before:bg-[#D70319] before:h-3 before:w-3 before:rounded-full sm:before:h-5 sm:before:w-5">Buffet</h2>

                    <p className='text text-justify p-5 bg-zinc-800 rounded-md overflow-visible shadow-sm shadow-zinc-950 opacity-0'>
                        Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar. Combinando técnicas tradicionais com os melhores cortes, entregamos uma explosão de sabores que vai conquistar até os paladares mais exigentes.
                    </p>
                </div>

            </div >

            <div id='divSalao' className='flex justify-center items-center gap-4 text-lg pb-16 px-4'>

                <div className='w-1/2 xl:w-1/3 flex flex-col items-end justify-center gap-10'>

                    <h2 className="flex items-center gap-3 sm:text-4xl greatVibesRegular text-3xl
                    after:block after:bg-[#D70319] after:h-3 after:w-3 after:rounded-full sm:after:h-5 sm:after:w-5">Salão de festa</h2>
                    
                    <p className='text text-justify p-5 bg-zinc-800 rounded-md overflow-visible shadow-sm shadow-zinc-950 opacity-0'>
                        Descubra o lugar ideal para tornar seus momentos especiais! Nosso espaço oferece o cenário perfeito para celebrar com estilo e conforto. Com espaços amplos e piscina, estamos prontos para receber eventos de todos os tipos, desde festas de aniversário até eventos corporativos. Venha nos visitar e descubra por que somos a escolha preferida para quem busca qualidade.
                    </p>
                </div>

                <div className='w-2/3 xl:w-1/2 relative overflow-hidden'>

                    <div className='rounded-md bg-zinc-800 border border-solid border-[#D70319] p-4'>
                        <img src={capaSalao} alt='foto do salão de festa' className='w-full h-auto opacity-0 rounded-md -translate-x-full img' />
                    </div>

                    <div className='flex flex-col justify-center items-end gap-2 right-0 absolute top-8'>

                        <button type='button' aria-label='acessar pagina do salão de festa' className='btnsInfo translate-x-full opacity-0 z-10 mr-4 bg-zinc-50 text-zinc-800 rounded-md shadow-[0_0_6px] shadow-zinc-950 flex justify-start items-center gap-2 pl-2 animate-bounce text-xl' onClick={handleClickSalao}>

                            Acessar fotos

                            <FontAwesomeIcon icon={faImage} />

                            <FontAwesomeIcon icon={faBars} className='shadow-md shadow-zinc-950 rounded p-2' />

                        </button>

                        <button type='button' aria-label='realizar orçamento' className='btnOrcamento bg-[#3FE05C] text-zinc-50 rounded-l-md bottom-96 w-80 h-14 translate-x-full opacity-0 flex gap-2 justify-center items-center shadow shadow-zinc-950 text-2xl'>

                            <span>Faça seu orçamento!</span>
                            <FontAwesomeIcon icon={faWhatsapp} />

                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

HomeDesktopView.propTypes = {
    handleClickBuffet: PropTypes.func.isRequired,
    handleClickSalao: PropTypes.func.isRequired
}