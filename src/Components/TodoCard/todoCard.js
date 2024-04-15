import React from "react";
import Card from "react-bootstrap/Card";

// Color variables
const backgroundColor2 = "#748b6f";
const textColor1 = "#2a403d";

const TodoCard = ({ todo, index }) => {
  return (
    <Card
      className="todo-card"
      style={{ backgroundColor: backgroundColor2, borderColor: textColor1 }}
    >
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{todo.status}</Card.Subtitle>
        <Card.Text>{todo.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TodoCard;
