const initialSate = [{
    id: 1,
    todo: 'Comprar Microfono',
    done: false
}];

const todoReducer = ( state = initialSate, action ) => {

    if(action?.type === 'agregar'){ //Si la accion no esta vacio, que entonces busque el type, sino que no haga nada action?.type
        return [ ...state, action.payload ]; //Muestro todos los anteriores y agrego el que viene en payload    
    }

    return state; //Siempre se regresa state
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar Refri',
    done: false
}

const agregarTodoAction = {
    type: 'agregar', //accion que vamos a hacer
    payload: newTodo //lo que vamos a agregar
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);