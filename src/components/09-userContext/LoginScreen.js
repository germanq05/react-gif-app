import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);
    const object = {
        id:123,
        name: 'Pepe'
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <button className="btn btn-primary"
            onClick={ () => setUser(object)}> 
                Login 
            </button>

        </div>
    )
};
