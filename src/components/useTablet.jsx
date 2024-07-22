import { useState, useEffect } from 'react';

export function useTablet (){

    const [tablet, setTablet] = useState(window.innerWidth < 1100);

    useEffect(() => {

        function handleResize() {
            setTablet(window.innerWidth < 1100) 
        }

        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return tablet
}