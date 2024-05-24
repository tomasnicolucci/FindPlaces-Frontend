import React, { useState, useEffect } from 'react'
import Page from '../../components/Page/Page'
import {getAllFavorites} from '../../Services/users.js'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        const favs = getAllFavorites(request);
        setFavorites(favs);
        setUpdate(false);
    }, [update])

    return (
        <Page>
            <h1>Mis lugares favoritos <FontAwesomeIcon icon={faHeart} /></h1>
            
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