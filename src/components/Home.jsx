import img from "../assets/image/imgHome.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import capaBuffet from '../assets/image/buffet/capaBuffetDesktop.jpeg';
import HomeMobileView from "./HomeMobileView";
import { useMobile } from "./useMobile";
import PropTypes from 'prop-types'
import { HomeDesktopView } from "./HomeDesktopView";

export function Home({setSalao, setBuffet}) {
    
    const mobile = useMobile();

    useGSAP(() => {

        let animationGsap = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);
            gsap.to("#img", {
                x: 0,
                duration: 1,

                scrollTrigger: {
                    trigger: "#divImg",
                    start: "top 90%",
                }

            })
            gsap.to("#text", {
                opacity: 1,
                duration: 1,

                scrollTrigger: {
                    trigger: "#text",
                    start: "top 60%",
                }

            })
        })

        return () => { animationGsap.revert() }

    }, [])

    return (
        <section className="bg-zinc-950/70 text-2xl greatVibesRegular
                            sm:bg-zinc-50/0 sm:text-3xl
                            ">

            <div className="bg-zinc-800 p-3 text-justify
                sm:w-4/5 sm:m-auto sm:rounded-t-md sm:py-5 sm:px-8
            ">
                <h1>Bem-vindo ao RD Churrasco.<br/>
                    Transforme seus eventos em experiências inesquecíveis com o nosso serviços de buffet.

                </h1>

                <img src={capaBuffet} alt="Foto de uma picanha" className="rounded-md my-2" />

                <h1>
                    Explore nossos serviços e descubra como podemos tornar seu próximo evento memorável!
                </h1>
            </div>

            <div className="w-full lg:flex lg:justify-start lg:items-start">

                <div id="divImg" className="w-full object-cover overflow-hidden">

                    <img id="img" src={img} alt="imagem RD churrasco" className="w-full object-cover -translate-x-full h-auto" />

                </div>

                <div id="text" className="opacity-0 h-auto text-zinc-50 bg-zinc-800 p-4 lg:sticky lg:top-0 lg:w-full lg:py-10">
                    <p>
                        Olá, sou o Robson, churrasqueiro e dono da RD Churrasco. <br /> Na RD Churrasco, combinamos a arte da culinária com um atendimento excepcional para criar momentos únicos e saborosos. Nosso diferencial é a combinação de cortes nobres, técnicas de preparo aperfeiçoadas e um atendimento impecável. Seja para eventos corporativos, casamentos ou festas de aniversário, nossa equipe dedicada está pronta para oferecer menus personalizados que atendem a todos os gostos e necessidades.
                    </p>
                </div>
            </div>
            {mobile ? <HomeMobileView handleClickBuffet = {setBuffet} handleClickSalao= {setSalao} /> : <HomeDesktopView handleClickBuffet={setBuffet} handleClickSalao={setSalao} />}
        </section>
    );

}

Home.propTypes = {
    setBuffet: PropTypes.func.isRequired,
    setSalao: PropTypes.func.isRequired
 }