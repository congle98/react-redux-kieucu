import axios from "axios";
import {ADD_TODO, DELETE_TODO, GET_TODOS, MARK_COMPLETE} from "../types";
// export const markComplete = ()=>{
//     const markCompleteAction = dispatch =>{
//         dispatch({
//             type:"MARK_COMPLETE",
//             payload:"my playload"
//         })
//     }
//     return markCompleteAction()
// }



export const getTodos = () =>async dispatch =>{
    try {
        const reponse = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=3")
        dispatch({
            type:GET_TODOS,
            payload:reponse.data
        })
    }
    catch (e){

    }
}

export const markComplete = id => dispatch =>{
    dispatch({
            type:MARK_COMPLETE,
            payload:id
        })
}

export const addTodo = newTodo =>async dispatch =>{
    try {
        const reponse = await axios.post("https://jsonplaceholder.typicode.com/todos",newTodo)
        console.log(reponse.data)
        dispatch({
            type:ADD_TODO,
            payload:reponse.data
        })
    }
    catch (e){

    }
}

export const deleteTodo = id =>async dispatch =>{
    try {
        const reponse = await axios.delete("https://jsonplaceholder.typicode.com/todos/"+id)
        dispatch({
            type:DELETE_TODO,
            payload:id
        })
    }
    catch (e){

    }
}
