import React from "react";

function Todo({ todo, onToggle, onDelete }) {
  return (
    <div style={styles.todo}>
      <span
        style={{
          ...styles.text,
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black"
        }}
      >
        {todo.text}
      </span>
      <button onClick={onToggle} style={styles.doneBtn}>
        {todo.completed ? "Undo" : "Mark as Done"}
      </button>
      <button onClick={onDelete} style={styles.deleteBtn}>❌</button>
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
    fontSize: "16px",
    marginLeft: "8px"
  },
  doneBtn: {
    background: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "14px"
  }
};

export default Todo;
