import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password} = formValues;

    useEffect(() => {
        console.log('Email cambio');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <br/>

            <div className="form-group">
                <input type="text" 
                name="name"
                className="form-controol"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <input type="text" 
                name="email"
                className="form-controol"
                placeholder="Tu E-Mail"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}/>
            </div>

            <div className="form-group">
                <input type="password" 
                name="password"
                className="form-controol"
                placeholder="*****"
                value={ password }
                onChange={handleInputChange}/>
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
