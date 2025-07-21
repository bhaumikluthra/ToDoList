import React from "react";

function Todo({ todo, onToggle }) {
  return (
    <div style={styles.todo}>
      <span
        onClick={onToggle}
        style={{
          ...styles.text,
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black"
        }}
      >
        {todo.text}
      </span>
    </div>
  );
}

const styles = {
  todo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd"
  },
  text: {
    cursor: "pointer"
  },
  deleteBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Todo;
