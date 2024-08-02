import videoBackgroundHeader from "../assets/video.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


export default function Header() {


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
                <video autoPlay muted loop className="object-cover w-full h-full">
                    <source src={videoBackgroundHeader} type="video/mp4" />
                </video>
            </div>


            <div id="divMain" className="absolute z-10 w-full h-full bg-zinc-950/80 inset-0 opacity-0 flex flex-col justify-center items-center gap-10">


                <div className="w-full pt-10">


                    <nav className="flex items-center justify-center gap-4 text-xl sm:text-2xl">

                        <a href="https://www.facebook.com/rdchurrascorj" target="_blank" className="flex justify-center items-center gap-1 
                        before:block before:w-1 before:h-6 before:bg-[#D70319] duration-500 sm:hover:opacity-70">

                            <FontAwesomeIcon icon={faSquareFacebook} className="size-5" />
                            <span>Facebook</span>

                        </a>

                        <a href="https://www.instagram.com/rdchurrasco/" target="_blank" className="flex justify-center items-center gap-1 
                        before:block before:w-1 before:h-6 before:bg-[#D70319] duration-500 sm:hover:opacity-70">

                            <FontAwesomeIcon icon={faInstagram} className="size-5" />
                            <span>Instagram</span>
                        </a>
                    </nav>
                </div>


                <div className="text-justify flex flex-col gap-5 sm:mt-5 justify-start items-center w-full">

                    <div className="w-full flex justify-center items-center after:content-[''] after:bg-[#D70319] after:h-1 after:w-1/4 after:block before:h-1 before:w-1/4 before:block before:bg-[#D70319]">

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

                    <div id="divIntro" className="w-11/12 sm:w-4/5 h-0 overflow-hidden flex justify-center items-center bg-zinc-950/20 border-y-2 border-[#D70319] py-5 opacity-0 ">

                        <p className="text-2xl sm:text-4xl px-4 greatVibesRegular">Transformando eventos há mais de 18 anos em uma celebração inesquecível da vida. Junte-se a nós para uma festa com sabores que ficam na memória.</p>
                    </div>
                </div>
            </div>
        </header>
    );
}