import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUtensils, faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import capaSalao from '../assets/image/salao/capaSalaoDesktop.jpeg';
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import PropTypes from 'prop-types'

export function HomeDesktopView({handleClickBuffet, handleClickSalao}) {

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

            tlBuffet.to(img[0], { x: 0, duration: 1, opacity: 1 });
            tlBuffet.to(btnsInfo[0], { x: 0, duration: 1, opacity: 1 });
            tlBuffet.to(btnOrcamento[0], { x: 0, duration: 1, opacity: 1 });
            tlBuffet.to(text[0], { duration: 1, opacity: 1 });

            tlSalao.to(img[1], { x: 0, duration: 1, opacity: 1 });
            tlSalao.to(btnsInfo[1], { x: 0, duration: 1, opacity: 1 });
            tlSalao.to(btnOrcamento[1], { x: 0, duration: 1, opacity: 1 });
            tlSalao.to(text[1], { duration: 1, opacity: 1 });
        })

        return () => { ct.revert() }
    }, [])


    return (
        <>

            <div id='divBuffet' className='flex greatVibesRegular text-3xl'>

                <div className='relative w-2/3 overflow-hidden'>

                    <img src={capaBuffet} alt='foto de picanha' className='w-full translate-x-full img' />

                    <div className='absolute flex flex-col gap-2 justify-center items-start top-8 '>

                        <div className='btnsInfo flex translate-x-full opacity-0'>

                            <button className='z-10 ml-4 bg-zinc-50 px-3 rounded-md shadow-[0_0_6px] shadow-zinc-950 flex justify-center items-center text-2xl' onClick={handleClickBuffet}>
                                <FontAwesomeIcon icon={faBars} className='text-zinc-950' />
                            </button>

                            <button className='relative right-2 flex justify-center items-center bg-zinc-50 text-zinc-800 rounded-r-md w-64 py-2 text-3xl shadow shadow-zinc-950' onClick={handleClickBuffet}>
                                <div>
                                    <FontAwesomeIcon icon={faUtensils} />
                                    <span>
                                        Clique aqui e confira!
                                    </span>
                                </div>
                            </button>

                        </div>

                        <button className='btnOrcamento bg-[#3FE05C] text-zinc-50 p-2 rounded-r-md bottom-96 w-80 h-14 text-3xl -translate-x-full opacity-0 flex gap-2 justify-center items-center shadow shadow-zinc-950'>

                            <span>Faça seu orçamento!</span>
                            <FontAwesomeIcon icon={faWhatsapp} />

                        </button>

                    </div>

                </div>

                <div className='w-1/3 px-2 flex items-center'>
                    <p className='text text-justify p-5 bg-zinc-800 rounded-md overflow-visible relative right-14 shadow-sm shadow-zinc-950 opacity-0'>
                        Descubra o sabor autêntico do churrasco feito com paixão e expertise. Nossas carnes selecionadas são cuidadosamente preparadas para oferecer uma experiência gastronômica única, onde cada mordida é um verdadeiro deleite para o paladar. Combinando técnicas tradicionais com os melhores cortes, entregamos uma explosão de sabores que vai conquistar até os paladares mais exigentes. Venha saborear a excelência culinária e descubra por que nosso churrasco é simplesmente incomparável.
                    </p>
                </div>

            </div>

            <div id='divSalao' className='greatVibesRegular text-3xl flex'>

                <div className='w-1/3 px-2 flex items-center z-10 '>
                    <p className='text text-justify p-5 bg-zinc-800 rounded-md overflow-visible relative left-14 opacity-0'>
                        Descubra o lugar ideal para tornar seus momentos especiais! Nosso espaço oferece o cenário perfeito para celebrar com estilo e conforto. Com espaços amplos e piscina, estamos prontos para receber eventos de todos os tipos, desde festas de aniversário até eventos corporativos. Além disso, nossa equipe dedicada está aqui para ajudar a tornar seu evento perfeito em todos os detalhes. Venha nos visitar e descubra por que somos a escolha preferida para quem busca qualidade, praticidade e uma experiência única. Seja qual for a ocasião, estamos aqui para torná-la memorável!
                    </p>
                </div>

                <div className='w-2/3 relative overflow-hidden'>

                    <img src={capaSalao} alt='foto do salão' className='w-full opacity-0 -translate-x-full img' />

                    <div className='flex flex-col justify-center items-end gap-2 right-0 absolute top-8'>

                        <div className='btnsInfo flex translate-x-full opacity-0'>

                            <button className='z-10 ml-4 bg-zinc-50 px-3 rounded-md shadow-[0_0_6px] shadow-zinc-950 flex justify-center items-center text-2xl' onClick={handleClickSalao}>
                                <FontAwesomeIcon icon={faBars} className='text-zinc-950' />
                            </button>

                            <button className='relative right-2 flex justify-center items-center bg-zinc-50 text-zinc-800 rounded-r-md w-64 py-2 text-3xl shadow shadow-zinc-950' onClick={handleClickSalao}>
                                <div>
                                    <FontAwesomeIcon icon={faImage} />
                                    <span>
                                        Clique aqui e confira!
                                    </span>
                                </div>
                            </button>

                        </div>

                        <button className='dacingScript translate-x-full opacity-0 bg-[#3FE05C] text-zinc-50 p-2 rounded-l-md w-80 h-14 text-3xl btnOrcamento' >

                            <div className='flex gap-1 justify-center items-center'>
                                <span>Faça seu orçamento!</span>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

HomeDesktopView.propTypes = {
    handleClickBuffet: PropTypes.func.isRequired,
    handleClickSalao: PropTypes.func.isRequired
 }