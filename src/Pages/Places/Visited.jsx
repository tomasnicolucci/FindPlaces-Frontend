import React, {useState, useEffect} from 'react'
import Page from '../../components/Page/Page'
import {getAllVisited} from '../../Services/users.js'

const Visited = () => {
    const [update, setUpdate] = useState(false)
    const [visited, setVisited] = useState(null);

    useEffect( () => {
        const storedToken = localStorage.getItem('token');
        const request =  {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}`}
        }
        getAllVisited(setVisited, request);
        setUpdate(false);
    }, [update])

    return (
        <Page>
            <div>Visitados</div>
            <div>{visited !== null ? (
                visited.map(v => (
                    <div>
                        <p>{v.name}</p>
                    </div>
                ))
            ) : ('No hay lugares visitados')}
            </div>
        </Page>
    )
}

export default Visited