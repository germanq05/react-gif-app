import React from 'react';
import GifGridItem from "../../components/GifGridItem";
import { shallow } from 'enzyme';

describe('Pruebas en < GifGridItem />', () => {

    const props = {
        title: "Un titulo",
        url: "https://localhost/algo.jpg"
    };

    const wrapper = shallow( <GifGridItem { ...props }/> );
    
    test('Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p'); //p porque esta envuelto en un parrafo
        expect( p.text().trim() ).toBe( props.title );
    })

    test('Debe tener la imagen igual al url de los props', () => {
        const img = wrapper.find('img');
        expect( img.props().src ).toBe( props.url );
    })
    
    

})
