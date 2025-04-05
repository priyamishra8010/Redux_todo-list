
import { useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import { addtodo ,deleteTodo ,clearTodo } from "./Slice/Slice";


export const TodoList=()=>{
     
    const dispatch =useDispatch();
    const todos= useSelector((state)=>state.todo.todos)
    const [newTodo , setNewTodo] = useState("");
    console.log(todos);

    const handleAddTodo=()=>{
        if (newTodo){
            dispatch(addtodo({id : Date.now(),text: newTodo}));
            setNewTodo("");
        }
    }

// clear totos

const handleClearTodos=()=>{
dispatch(clearTodo());    

}

    return(
        <>
           <section className="main">
        <h1>TO-DO LIST</h1>
        <div className="todo-box">
            <input type="text" placeholder="Add a new Todo"
            onChange={(e)=> setNewTodo(e.target.value)}
            />
            <button className="addBtn"
            onClick={handleAddTodo} >
            Add List
            </button>
           
            <div className="todo-items">
            {
                todos.map((todo)=>(
                    <div className="todolist" key={todo.id}>
                        { todo.text}
                        <button className="deletebtn"
                        onClick={()=>dispatch(deleteTodo(todo.id))}
                        > Delete</button>

                    </div>
                ))
            }
         </div>
            {
                todos.length > 0 &&(
                    <button className="clearAll"
            onClick={handleClearTodos}
            >Clear All</button>
                )
            }

        </div>
        </section>
        </>
    )
}