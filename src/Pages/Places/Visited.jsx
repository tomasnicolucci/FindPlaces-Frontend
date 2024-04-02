import React, {useState, useEffect} from 'react'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <h1>Lugares Visitados <FontAwesomeIcon icon={faSquareCheck} /></h1>
            {visited !== null ? (
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr className='table-success'>
                            <th>
                                Nombre
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {visited.map(v => (
                            <tr>
                                <td>
                                    {v.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ): ("No hay lugares para mostrar")}
        </Page>
    )
}

export default Visited