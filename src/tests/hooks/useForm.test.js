import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Test de useForm', () => {

    const initialForm = {
        name: 'German',
        email: 'gerquiro8@gmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe de cambiar el valor del formulario', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Camila'
                }
            });
        });

        const [ values ] = result.current;
        expect(values).toEqual({
            ...initialForm, name: 'Camila'
        });

    });

test('Debe de reestablecer el valor del formulario', () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [ ,handleInputChange, reset] = result.current;

    act(() => {
        handleInputChange({
            target: {
                name: 'name',
                value: 'Camila'
            }
        });
        reset();
    });

    const [ values ] = result.current;
    expect(values).toEqual( initialForm );

});

})