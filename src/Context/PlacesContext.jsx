import React, { createContext, useEffect, useState } from 'react'
import { getPlaces } from '../Services/places.js'
export const PlacesContext = createContext();

export const PlacesProvider = ({children}) => {

    const [places, setPlaces] = useState([]);
    const [update, setUpdate] = useState(false);

    useEffect( () => {
        const obtenerPlaces = async () => {
            try {
                await getPlaces(setPlaces);
                setUpdate(false);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerPlaces();
        
      }, [update])

    return (
        <PlacesContext.Provider value={{places}}>
            {children}
        </PlacesContext.Provider>
    )
}
