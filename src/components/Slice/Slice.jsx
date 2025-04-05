import {createSlice} from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

const TodoSlice =createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo :(state , action)=>{
            state.todos.push(action.payload)
            console.log("actions" , action.payload);
        },
        deleteTodo :(state, action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload )
        },
        clearTodo :(state , action)=>{
            state.todos=[];
        }
    }
});

console.log("actions" , TodoSlice.initialState);

export const {addtodo, deleteTodo, clearTodo} = TodoSlice.actions;
export default TodoSlice.reducer;