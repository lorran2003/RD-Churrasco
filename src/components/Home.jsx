import img from "../assets/image/imgHome.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import capaBuffet from '../assets/image/buffet/capaBuffet.jpeg';
import { useMobile } from "./useMobile";
import PropTypes from 'prop-types'
import { useTablet } from "./useTablet";
import { lazy, Suspense } from "react";
import { LoadingImage } from "./LoadingImage";

const HomeMobileView = lazy(() => import('./HomeMobileView'));
const HomeDesktopView = lazy(() => import('./HomeDesktopView'));
export default function Home({ setSalao, setBuffet }) {

    const mobile = useMobile();
    const tablet = useTablet();

    let ComponentViewPort = () => {

        if (mobile || tablet) return <HomeMobileView handleClickBuffet={setBuffet} handleClickSalao={setSalao} />

        return <HomeDesktopView handleClickBuffet={setBuffet} handleClickSalao={setSalao} />
    }

    useGSAP(() => {

        let animationGsap = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);
            gsap.to("#divImg", {
                x: 0,
                duration: 1,

                scrollTrigger: {
                    trigger: "#img",
                    start: "top 90%",
                }

            })
            gsap.to("#text", {
                opacity: 1,
                duration: 0.5,

                scrollTrigger: {
                    trigger: "#text",
                    start: "top 60%",
                }

            })
        })

        return () => { animationGsap.revert() }

    }, [])

    return (
        <section className="text-2xl greatVibesRegular mt-2 sm:text-4xl">

            <div className="flex flex-col gap-2">

                <div className="bg-zinc-800 p-3 text-justify
                         sm:m-auto lg:rounded-md lg:w-3/5 sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-5
                ">
                    <h1>Bem-vindo ao RD Churrasco.<br />
                        Transforme seus eventos em experiências inesquecíveis com o nosso serviços de buffet.

                    </h1>

                    <img src={capaBuffet} alt="imagem de carne cortada" className="rounded-md my-2 w-full" />

                    <h1>
                        Explore nossos serviços e descubra como podemos tornar seu próximo evento memorável!
                    </h1>
                </div>

                <div className="w-full xl:w-4/5 lg:m-auto sm:max-lg:relative lg:flex lg:justify-center lg:items-start lg:mt-2 lg:max-xl:gap-8">

                    <div id="divImg" className="bg-zinc-800 p-3 text-justify lg:rounded-l-md object-cover overflow-hidden w-full h-full sm:p-5 lg:w-1/2 -translate-x-full">

                        <img id="img" src={img} alt="imagem do proprietario da RD churrasco" className="w-full object-cover h-full rounded-xl" />

                    </div>

                    <div id="text" className="opacity-0 h-auto text-zinc-50 bg-zinc-800 p-4 lg:w-1/2 lg:rounded-r-md lg:sticky lg:top-0">
                        <p>
                            Olá, sou o Robson, churrasqueiro e dono da RD Churrasco. <br /> Na RD Churrasco, combinamos a arte da culinária com um atendimento excepcional para criar momentos únicos e saborosos. Nosso diferencial é a combinação de cortes nobres, técnicas de preparo aperfeiçoadas e um atendimento impecável. Seja para eventos corporativos, casamentos ou festas de aniversário, nossa equipe dedicada está pronta para oferecer menus personalizados que atendem a todos os gostos e necessidades.
                        </p>
                    </div>
                </div>
            </div>

            <Suspense fallback={<LoadingImage />}>
                <ComponentViewPort />
            </Suspense>

        </section>
    );

}

Home.propTypes = {
    setBuffet: PropTypes.func.isRequired,
    setSalao: PropTypes.func.isRequired
}