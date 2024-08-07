import img from "../../assets/image/imgHome.jpeg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMobile } from "../useMobile";
import PropTypes from 'prop-types'
import { useTablet } from "../useTablet";
import { lazy, Suspense } from "react";
import { LoadingImage } from "../LoadingImage";

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
        <section className="fontTimes pt-10 bg-zinc-950/80 text-zinc-50">
                
            <div className="dacingScriptPersonalizada mt-3 flex justify-center items-center gap-4

            before:block before:bg-[#D70319] before:h-1 before:w-1/4 before:sm:max-lg:w-[30%] before:lg:max-xl:w-2/5 before:xl:w-5/12
            
            after:block after:bg-[#D70319] after:h-1 after:w-1/4 after:sm:max-lg:w-[30%] after:lg:w-2/5">
              
                <h1 className='text-4xl sm:max-lg:text-6xl lg:text-5xl'>Sobre nós</h1>
            </div>

            <div className="w-auto py-16 max-lg:px-4 flex max-lg:flex-col justify-center items-center gap-4 lg:max-xl:gap-7">

                <div id="divImg" className="bg-zinc-800 p-4 rounded-sm overflow-hidden -translate-x-full opacity-0 w-11/12 sm:max-lg:w-2/3 lg:max-xl:w-2/5 xl:w-1/3">

                    <img id="img" src={img} alt="imagem do proprietario da RD churrasco" className="w-auto object-cover h-auto rounded-xl border-solid border-2 border-[#D70319] shadow-md shadow-zinc-950" />

                </div>

                <div id="text" className="opacity-0 text-lg h-auto bg-zinc-800 rounded-md w-11/12 sm:max-lg:w-2/3 lg:max-xl:w-2/5 xl:w-1/3 p-3 sm:max-lg:text-2xl border-2 border-solid border-zinc-50/30">
                    <p>
                        Olá, sou o Robson, churrasqueiro e dono da RD Churrasco.
                        Na RD Churrasco, combinamos a arte da culinária com um atendimento excepcional para criar momentos únicos e saborosos. Nosso diferencial é a combinação de cortes nobres, técnicas de preparo aperfeiçoadas. Seja para eventos corporativos, casamentos ou festas de aniversário.
                    </p>
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