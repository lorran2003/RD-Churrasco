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
                opacity: 1,

                scrollTrigger: {
                    trigger: "#img",
                    start: "top 95%",
                }

            })
            gsap.to("#text", {
                opacity: 1,
                duration: 0.5,

                scrollTrigger: {
                    trigger: "#text",
                    start: "top 90%",
                }

            })
        })

        return () => { animationGsap.revert() }

    }, [])

    return (
        <section className="fontTimes pt-10 bg-zinc-950/80">

            <div className="text-2xl flex flex-col gap-2">

                <div className="bg-zinc-800 p-3 text-start w-11/12 m-auto rounded-md
                lg:max-xl:w-1/2 xl:w-1/2
                ">
                    <h1>Transforme seus eventos em experiências inesquecíveis com o nosso serviços.

                    </h1>
        
                    <img src={capaBuffet} alt="imagem de carne cortada" className="rounded-md my-2 w-full" />

                    <h1>
                        Explore nossos serviços e descubra como podemos tornar seu próximo evento memorável!
                    </h1>
                </div>

                <div className="w-full py-16 xl:w-4/5 lg:m-auto flex max-lg:flex-col justify-center items-center gap-2">

                    <div id="divImg" className="bg-zinc-800 p-3 text-justify rounded-md object-cover overflow-hidden m-auto w-5/6 h-auto sm:max-lg:w-7/12 lg:w-2/5 -translate-x-full opacity-0">

                        <img id="img" src={img} alt="imagem do proprietario da RD churrasco" className="w-auto object-cover h-full rounded-xl" />

                    </div>

                    <div id="text" className="opacity-0 text-lg h-auto text-zinc-50 m-auto bg-zinc-800 sm:max-lg:w-7/12 p-4 w-5/6 lg:w-1/2 rounded-md ">
                        <p>
                            Olá, sou o Robson, churrasqueiro e dono da RD Churrasco.
                            Na RD Churrasco, combinamos a arte da culinária com um atendimento excepcional para criar momentos únicos e saborosos. Nosso diferencial é a combinação de cortes nobres, técnicas de preparo aperfeiçoadas. Seja para eventos corporativos, casamentos ou festas de aniversário.
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