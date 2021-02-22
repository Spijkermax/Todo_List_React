/** reducers are just a function for the redux store */
import { CREATE_TODO, REMOVE_TODO } from './actions';


export const todos = (state = [], action) => { //state of our current todo items, and action that was triggered, and what should occur as a result of the action
    const { type, payload  } = action;
    switch (type) {
        case CREATE_TODO: {
            const { text } = payload; //get text from payload
            const newTodo = {
                text,
                isCompleted: false,
            }; 
            return state.concat(newTodo); //Wont mutate the array/state
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text != text);
        }
        default:
            return state; //return unchaged state just in case nothing is changed, so reducer doesnt return undefined

    }
}