import bg from "../assets/image/bgBuffe.jpg";
import { lazy, Suspense, useState } from 'react';
import { LoadingImage } from "../components/LoadingImage";

const Buffet = lazy(() => import("../components/Buffet/Buffet"));
const Home = lazy(() => import("../components/Home"));
const Salao = lazy(() => import("../components/Salao/Salao"));

export default function Main() {

    const [navigation, setNavigation] = useState("Home");


    let RenderComponent = () => {
        switch (navigation) {
            case "Salao":
                return <Salao />

            case "Buffet":
                return <Buffet />

            default:
                return <Home setBuffet={() => setNavigation("Buffet")} setSalao={() => setNavigation("Salao")} />
        }
    }

    return (

        <main className='text-zinc-50 bg-fixed bg-cover' style={{ backgroundImage: `URL(${bg})` }}>

            <div className='greatVibesRegular text-red-700 bg-zinc-800 flex gap-3 justify-center items-center mb-2 text-3xl sm:text-4xl py-2 sticky top-0 z-20'>

                <button type='button' aria-label='acessar pagina do buffet' className={'after:w-full after:h-0.5 duration-200 after:duration-200 hover:opacity-70 ' + (navigation === "Buffet" ? "after:block text-zinc-50 after:duration-200 after:bg-[#D70319]" : "")} onClick={() => setNavigation("Buffet")} >Buffet</button>

                <button type='button' aria-label='acessar pagina home' className={'after:w-full after:h-0.5 duration-200 after:duration-200 hover:opacity-70 ' + (navigation === "Home" ? "after:block text-zinc-50 after:duration-200 after:bg-[#D70319]" : "")} onClick={() => setNavigation("Home")} >Home</button>

                <button type='button' aria-label='acessar pagina do salão de festa' className={'after:w-full after:h-0.5 duration-200 after:duration-200 hover:opacity-70 ' + (navigation === "Salao" ? "after:block text-zinc-50 after:duration-200 after:bg-[#D70319]" : "")} onClick={() => setNavigation("Salao")} >Salão</button>

            </div>

            <Suspense fallback={<LoadingImage />}>
                <RenderComponent />
            </Suspense>

        </main>
    );

}

