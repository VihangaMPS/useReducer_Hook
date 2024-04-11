import {useReducer, useState} from "react";
import Todo from "./Todo";

const ACTIONS = {
    ADD_TODO: 'add-todo'
}

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false};
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO: return [...todos, newTodo(action.payload.name)];

    }
}

//=================================================================

export default function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();

        dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name}});
        setName('');
    }

    console.log(todos);

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
        </>
    )
}