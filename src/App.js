import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1>📝 To-Do List</h1>
      <div>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={styles.button} onClick={addTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onToggle={() => toggleTodo(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
  }
};

export default App;
