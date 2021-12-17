import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {
            target: { value } 
        });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    })
    
    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });
        
        expect( setCategories ).not.toHaveBeenCalled(); //No se tiene que haber llamado
    })
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo'
        
        //Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });
        
        //Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        //Se espera que reciba una funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        //El valor del input debe estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');

    })
    

})
