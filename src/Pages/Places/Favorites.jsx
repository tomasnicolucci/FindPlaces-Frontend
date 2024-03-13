import React, { useState, useEffect } from 'react'
import Page from '../../components/Page/Page'
import {getAllFavorites} from '../../Services/users.js'

const Favorites = () => {
    const [update, setUpdate] = useState(false)
    const [favorites, setFavorites] = useState(null);

    useEffect( () => {
        const storedToken = localStorage.getItem('token');
        const request =  {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`}
        }
        getAllFavorites(setFavorites, request);
        setUpdate(false);
    }, [update])

    return (
        <Page>
            <div>Favoritos</div>
            <div>{favorites !== null ? (
                favorites.map(f => (
                    <div>
                        <p>{f.name}</p>
                    </div>
                ))
            ) : ('No hay favoritos')}
            </div>
        </Page>
    )
}

export default Favorites