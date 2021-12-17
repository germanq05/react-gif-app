import React from 'react';

import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
    
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    
    })
    
    /*
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['Terror', 'Comedia'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    */
    

})