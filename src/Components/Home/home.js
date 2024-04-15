import React, { Component } from "react";
import "./home.css";
import TodoForm from "../TodoForm/todoForm";
import TodoList from "../TodoList/todoList";

// Color variables
const backgroundColor1 = "#c3cbd6";
const textColor1 = "#2a403d";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Task 1",
          description: "Description of Task 1",
          status: "InProgress",
          startDate: "2024-04-15T08:00",
          endDate: "2024-04-16T10:00",
          email: "user@example.com",
          category: "Category A",
        },
        {
          title: "Task 2",
          description: "Description of Task 2",
          status: "Completed",
          startDate: "2024-04-15T12:00",
          endDate: "2024-04-16T14:00",
          email: "user@example.com",
          category: "Category B",
        },
        {
          title: "Task 3",
          description: "Description of Task 3",
          status: "New",
          startDate: "2024-04-17T09:00",
          endDate: "2024-04-17T11:00",
          email: "user@example.com",
          category: "Category A",
        },
        {
          title: "Task 4",
          description: "Description of Task 4",
          status: "OnHold",
          startDate: "2024-04-17T12:00",
          endDate: "2024-04-17T14:00",
          email: "user@example.com",
          category: "Category B",
        },
        {
          title: "Task 5",
          description: "Description of Task 1",
          status: "InProgress",
          startDate: "2024-04-15T08:00",
          endDate: "2024-04-16T10:00",
          email: "user@example.com",
          category: "Category A",
        },
        {
          title: "Task 6",
          description: "Description of Task 2",
          status: "Completed",
          startDate: "2024-04-15T12:00",
          endDate: "2024-04-16T14:00",
          email: "user@example.com",
          category: "Category B",
        },
        {
          title: "Task 7",
          description: "Description of Task 3",
          status: "New",
          startDate: "2024-04-17T09:00",
          endDate: "2024-04-17T11:00",
          email: "user@example.com",
          category: "Category A",
        },
        {
          title: "Task 8",
          description: "Description of Task 4",
          status: "OnHold",
          startDate: "2024-04-17T12:00",
          endDate: "2024-04-17T14:00",
          email: "user@example.com",
          category: "Category B",
        },
      ],
    };
  }

  handleSubmit = (todo) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  render() {
    return (
      <div
        className="home-container"
        style={{ backgroundColor: backgroundColor1, color: textColor1 }}
      >
        <h1>Todo List</h1>
        <TodoForm onSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
