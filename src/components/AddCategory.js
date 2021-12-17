import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)

        console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> { inputValue } </p>
            <input type="text" placeholder="Agregue categoria"
                value={inputValue} onChange={handleInputChange} />
        </form>
    )
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}
