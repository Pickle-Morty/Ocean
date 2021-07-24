import React from "react";
import "./Todo.css"
import TodoItem from "./TodoItem"

const styles = {
    ul: {
        margin: 0,
        padding: 0,
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
           {props.todos.map((todo, index) => {
               return <TodoItem todo={todo} key={todo.id} index={index} />
           })}
        </ul>
    );
}




export default TodoList;