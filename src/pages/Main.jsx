import { Home } from '../components/Home';
import bg from "../assets/image/bgBuffe.jpg";
import { useState } from 'react';
import { Salao } from '../components/Salao/Salao';
import { Buffet } from '../components/Buffet/Buffet';
export function Main() {

    const [navigation, setNavigation] = useState("Home");

    let renderComponent = () => {
        switch (navigation) {
            case "Home":
                return <Home setBuffet={() => setNavigation("Buffet")} setSalao={() => setNavigation("Salao")} />

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

            <div className='greatVibesRegular text-red-700 bg-zinc-800 flex gap-3 justify-center items-center mb-2 text-3xl sm:text-4xl py-2 sticky top-0 z-10'>

                <button className={'after:w-full after:h-0.5 duration-200 after:duration-200 hover:opacity-70 ' + (navigation === "Buffet" ? "after:block text-zinc-50 after:duration-200 after:bg-[#D70319]" : "")} onClick={() => setNavigation("Buffet")} >Buffet</button>

                <button className={'after:w-full after:h-0.5 duration-200 after:duration-200 hover:opacity-70 ' + (navigation === "Home" ? "after:block text-zinc-50 after:duration-200 after:bg-[#D70319]" : "")} onClick={() => setNavigation("Home")} >Home</button>

                <button className={'after:w-full after:h-0.5 duration-200 after:duration-200 hover:opacity-70 ' + (navigation === "Salao" ? "after:block text-zinc-50 after:duration-200 after:bg-[#D70319]" : "")} onClick={() => setNavigation("Salao")} >Salão</button>

            </div>


            {renderComponent()}

        </main>
    );

}

