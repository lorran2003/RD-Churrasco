import { DadosSalao } from "./DadosSalao";
import { CarrosselFotos } from "./CarrosselFotos";
import { VideoSalao } from "./VideoSalao";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Salao() {
    return (

        <div className="greatVibesRegular">

            <button className="bg-[#3FE05C] text-zinc-50 text-5xl p-3 fixed right-2 bottom-1/4 z-10 rounded-full animate-pulse flex justify-center" >

                <FontAwesomeIcon icon={faWhatsapp} className="rounded-full " />

            </button>

            <div className="sm:flex sm:justify-center sm:items-center">
                
                <div className="sm:w-[61%]">
                    <CarrosselFotos />
                </div>

                <div>
                    <VideoSalao />
                </div>

            </div>

            <DadosSalao />
        </div>

    )
}