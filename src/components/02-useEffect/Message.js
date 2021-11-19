import React, { useEffect, useState } from 'react'


export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0});
    const { x, y } = coords;

    useEffect(() => {
            
        const mouseMove = (e) =>{
            const coords = { x: e.x, y: e.y };
            setCoords ( coords) 
        };

        // Creo el listener cuando es 123
        window.addEventListener( 'mousemove', mouseMove );

        return () => {
            // limpio el listener
            window.removeEventListener( 'mousemove', mouseMove );
        }

    }, []);


    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x : {x}, y: {y}
            </p>
        </div>
    )
}
