import logo from "../../public/logo.jpg";
import logoMobel from "../../public/logoMobel.jpg";
import videoBackgroundHeader from "../assets/video.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useMobile } from "../components/useMobile";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function Header() {

    const mobile = useMobile();
    const logoView = mobile ? logoMobel : logo;

    useGSAP(() => {
        const ct = gsap.context(
            gsap.to("#divMain", { duration: 3, opacity: 1 }),
            gsap.to("#divIntro", { delay: 1, duration: 1, height: 150, opacity:1 })
        )

        return () => { ct.revert() };
    }, []);

    return (
        <header className="relative h-screen px-28 text-zinc-50 overflow-hidden">

            <div className="absolute w-full inset-0">
                <video autoPlay muted loop className="object-cover w-full h-screen">
                    <source src={videoBackgroundHeader} type="video/mp4" />
                </video>
            </div>


            <div id="divMain" className="absolute z-10 w-full h-full bg-zinc-950/80 inset-0 opacity-0">


                <div className="w-full py-5 sm:m-auto sm:w-3/4 sm:flex sm:justify-between">

                    <div>
                        <img src={logoView} alt="Logo" className="w-28 sm:w-full h-auto rounded-full m-auto" />
                    </div>

                    <nav className="flex mt-2 items-center justify-center gap-4 text-xl">

                        <a href="https://www.facebook.com/rdchurrascorj" target="_blank" className="flex justify-center items-center gap-1 
                        before:block before:w-1 before:h-6 before:bg-[#8F1620] duration-500 sm:hover:opacity-70">

                            <FontAwesomeIcon icon={faSquareFacebook} className="size-5" />
                            <span>Facebook</span>

                        </a>

                        <a href="https://www.instagram.com/rdchurrasco/" target="_blank" className="flex justify-center items-center gap-1 
                        before:block before:w-1 before:h-6 before:bg-[#8F1620] duration-500 sm:hover:opacity-70">

                            <FontAwesomeIcon icon={faInstagram} className="size-5" />
                            <span>Instagram</span>
                        </a>
                    </nav>
                </div>


                <div className="text-justify flex flex-col gap-8 sm:mt-5 justify-start items-center w-full">

                    <div className="w-full flex justify-center items-center after:content-[''] after:bg-[#8F1620] after:h-0.5 after:w-1/4 after:block before:h-0.5 before:w-1/4 before:block before:bg-[#8F1620]">

                        <h1 className="text-center text-4xl sm:text-5xl sm:px-5 dacingScript">
                            <strong>Seja bem vindo!</strong>
                        </h1>

                    </div>

                    <div className="text-center">
                        <h1 className=" w-full text-center text-4xl sm:text-5xl">
                            RD
                            <br />
                            Churrasco
                        </h1>
                        <p className="text-xl">
                            Churrasco & Eventos
                        </p>
                    </div>

                    <div id="divIntro" className="w-11/12 sm:w-4/5 h-0 overflow-hidden flex justify-center items-center bg-zinc-950/20 border-y-2 border-[#8F1620] py-3 opacity-0 ">

                        <p className="text-2xl sm:text-4xl px-4 greatVibesRegular">Transformando eventos há mais de 18 anos em uma celebração inesquecível da vida. Junte-se a nós para uma festa com sabores que ficam na memória.</p>
                    </div>
                </div>
            </div>
        </header>
    );
}