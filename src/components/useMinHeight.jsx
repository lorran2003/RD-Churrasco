import { useEffect, useState } from "react";

export function useMinHeight (){

    const [ocultarImage, setOcultarImage] = useState(window.innerHeight < 570);

    useEffect(() => {

        function handleResize() {
            setOcultarImage(window.innerHeight < 570)
        }

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return ocultarImage;
}