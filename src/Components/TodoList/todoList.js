import React, { useState } from "react";
import TodoCard from "../TodoCard/todoCard";
import "./todoList.css";

const TodoList = ({ todos }) => {
  // Color variables
  const backgroundColor1 = "#c3cbd6";
  const textColor1 = "#2a403d";

  // Group todos by category
  const todosByCategory = todos.reduce((acc, todo) => {
    if (!acc[todo.category]) {
      acc[todo.category] = [];
    }
    acc[todo.category].push(todo);
    return acc;
  }, {});

  // Get today's and tomorrow's date
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Filter todos for today and tomorrow
  const todosToday = todos.filter((todo) => {
    const dueDate = new Date(todo.endDate);
    return dueDate.toDateString() === today.toDateString();
  });

  const todosTomorrow = todos.filter((todo) => {
    const dueDate = new Date(todo.endDate);
    return dueDate.toDateString() === tomorrow.toDateString();
  });

  // Paginate todos for Today's Todos
  const [currentPageToday, setCurrentPageToday] = useState(1);
  const todosPerPageToday = 3;

  const indexOfLastTodoToday = currentPageToday * todosPerPageToday;
  const indexOfFirstTodoToday = indexOfLastTodoToday - todosPerPageToday;
  const currentTodosToday = todosToday.slice(
    indexOfFirstTodoToday,
    indexOfLastTodoToday
  );

  // Paginate todos for Tomorrow's Todos
  const [currentPageTomorrow, setCurrentPageTomorrow] = useState(1);
  const todosPerPageTomorrow = 3;

  const indexOfLastTodoTomorrow = currentPageTomorrow * todosPerPageTomorrow;
  const indexOfFirstTodoTomorrow =
    indexOfLastTodoTomorrow - todosPerPageTomorrow;
  const currentTodosTomorrow = todosTomorrow.slice(
    indexOfFirstTodoTomorrow,
    indexOfLastTodoTomorrow
  );

  // Paginate todos for Todos by Category
  const [currentPageCategory, setCurrentPageCategory] = useState({});
  const todosPerPageCategory = 3;

  const currentTodosByCategory = Object.keys(todosByCategory).reduce(
    (acc, category) => {
      const currentPage = currentPageCategory[category] || 1;
      const indexOfLastTodoCategory = currentPage * todosPerPageCategory;
      const indexOfFirstTodoCategory =
        indexOfLastTodoCategory - todosPerPageCategory;
      acc[category] = todosByCategory[category].slice(
        indexOfFirstTodoCategory,
        indexOfLastTodoCategory
      );
      return acc;
    },
    {}
  );

  // Change page for Today's Todos
  const paginateToday = (pageNumber) => setCurrentPageToday(pageNumber);

  // Change page for Tomorrow's Todos
  const paginateTomorrow = (pageNumber) => setCurrentPageTomorrow(pageNumber);

  // Change page for Todos by Category
  const paginateCategory = (pageNumber, category) => {
    setCurrentPageCategory((prevState) => ({
      ...prevState,
      [category]: pageNumber,
    }));
  };

  return (
    <div style={{ backgroundColor: backgroundColor1, color: textColor1 }}>
      <div className="todos">
        <div>
          <h2>Today's Todos</h2>
          {currentTodosToday.map((todo, index) => (
            <TodoCard key={index} todo={todo} />
          ))}
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(todosToday.length / todosPerPageToday),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPageToday === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginateToday(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Tomorrow's Todos</h2>
          {currentTodosTomorrow.map((todo, index) => (
            <TodoCard key={index} todo={todo} />
          ))}
          <ul className="pagination">
            {Array.from({
              length: Math.ceil(todosTomorrow.length / todosPerPageTomorrow),
            }).map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPageTomorrow === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => paginateTomorrow(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h2>Todos by Category</h2>
        <div className="todos">
          {Object.entries(currentTodosByCategory).map(([category, todos]) => (
            <div key={category}>
              <h3>{category}</h3>
              <div>
                {todos.map((todo, index) => (
                  <TodoCard key={index} todo={todo} />
                ))}
              </div>
              <ul className="pagination">
                {Array.from({
                  length: Math.ceil(
                    todosByCategory[category].length / todosPerPageCategory
                  ),
                }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPageCategory[category] === index + 1
                        ? "active"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginateCategory(index + 1, category)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
