import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {

    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un TODO', () => {
        const demoTodo = [{
            id: 3,
            desc: 'Aprender Ingles',
            done: false
        }];
        const action = {
            type: 'add',
            payload: demoTodo
        };
        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, demoTodo]);
    });

    test('Debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 2
        };
        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
    });

    test('Debe de hacer el toggle del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };
        const state = todoReducer(demoTodos, action);

        expect(state[0].done).toBe( true );
        expect( state[1] ).toEqual( demoTodos[1] );
    });

});
